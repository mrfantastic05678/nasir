/**
 * Server-side validation utilities for contact form
 * Prevents spam and validates input data
 */

/**
 * List of disposable email domains to block
 */
const DISPOSABLE_EMAIL_DOMAINS = [
  // Common disposable email providers
  "tempmail.org",
  "guerrillamail.com",
  "mailinator.com",
  "10minutemail.com",
  "throwaway.email",
  "getairmail.com",
  "yopmail.com",
  "maildrop.cc",
  "sharklasers.com",
  "temp-mail.org",
  "fakeinbox.com",
  "incognitomail.org",
  "mailnesia.com",
  "trashmail.com",
  "tempmail.net",
  "tempmailaddress.com",
  "throwawaymail.com",
  "randomail.net",
  "ephp.org",
  "maildisposable.com",
  "disposablemail.com",
];

/**
 * Suspicious patterns that indicate spam
 */
const SPAM_PATTERNS = [
  // URLs in message
  /https?:\/\/[^\s]+/i,
  // Email addresses in message (spammy)
  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi,
  // Excessive capitalization
  /^[A-Z\s!?]{20,}$/,
  // Common spam words
  /\b(viagra|cialis|bitcoin|crypto|lottery|winner|free money|earn \$|make money|casino|poker|forex|trading|investment|loan|debt|credit card)\b/gi,
  // Repeated characters
  /(.)\1{10,}/,
  // Phone number spam patterns
  /\+\d{10,}/g,
];

/**
 * Validate email address format and check against disposable domains
 */
export function validateEmail(email: string): {
  valid: boolean;
  error?: string;
} {
  // Trim and lowercase
  const cleanEmail = email.trim().toLowerCase();

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { valid: false, error: "Invalid email format" };
  }

  // Check email length
  if (cleanEmail.length > 255) {
    return { valid: false, error: "Email address too long" };
  }

  // Extract domain
  const domain = cleanEmail.split("@")[1];

  // Check against disposable email domains
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
    return { valid: false, error: "Disposable email addresses are not allowed" };
  }

  return { valid: true };
}

/**
 * Validate name field
 */
export function validateName(name: string): {
  valid: boolean;
  error?: string;
} {
  const cleanName = name.trim();

  // Check length
  if (cleanName.length < 2) {
    return { valid: false, error: "Name is too short" };
  }

  if (cleanName.length > 100) {
    return { valid: false, error: "Name is too long" };
  }

  // Check for valid characters (letters, spaces, hyphens, apostrophes)
  const nameRegex = /^[a-zA-Z\u00C0-\u017F\s\-'\.]+$/u;
  if (!nameRegex.test(cleanName)) {
    return { valid: false, error: "Name contains invalid characters" };
  }

  return { valid: true };
}

/**
 * Validate subject field
 */
export function validateSubject(subject: string): {
  valid: boolean;
  error?: string;
} {
  const cleanSubject = subject.trim();

  // Check length
  if (cleanSubject.length < 3) {
    return { valid: false, error: "Subject is too short" };
  }

  if (cleanSubject.length > 200) {
    return { valid: false, error: "Subject is too long" };
  }

  return { valid: true };
}

/**
 * Validate message and check for spam patterns
 */
export function validateMessage(message: string): {
  valid: boolean;
  error?: string;
  spamScore?: number;
} {
  const cleanMessage = message.trim();

  // Check length
  if (cleanMessage.length < 10) {
    return { valid: false, error: "Message is too short" };
  }

  if (cleanMessage.length > 5000) {
    return { valid: false, error: "Message is too long" };
  }

  // Check for spam patterns
  let spamScore = 0;
  const detectedPatterns: string[] = [];

  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(cleanMessage)) {
      spamScore += 1;
      detectedPatterns.push(pattern.source);
    }
  }

  // Check for excessive links (more than 2)
  const linkCount = (cleanMessage.match(/https?:\/\//gi) || []).length;
  if (linkCount > 2) {
    spamScore += 2;
  }

  // Check for excessive email addresses in message
  const emailCount = (cleanMessage.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || []).length;
  if (emailCount > 1) {
    spamScore += 1;
  }

  // Check if message is mostly uppercase (shouting/spam)
  const uppercaseRatio = (cleanMessage.match(/[A-Z]/g) || []).length / cleanMessage.length;
  if (uppercaseRatio > 0.7 && cleanMessage.length > 50) {
    spamScore += 1;
  }

  // If spam score is too high, reject
  if (spamScore >= 3) {
    return {
      valid: false,
      error: "Message appears to be spam",
      spamScore,
    };
  }

  return { valid: true, spamScore };
}

/**
 * Validate honeypot field (should be empty for legitimate submissions)
 */
export function validateHoneypot(honeypotValue: string): {
  valid: boolean;
  isBot: boolean;
} {
  // If honeypot has any value, it was filled by a bot
  if (honeypotValue && honeypotValue.trim() !== "") {
    return { valid: false, isBot: true };
  }

  return { valid: true, isBot: false };
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string, maxLength: number): string {
  return input.trim().slice(0, maxLength);
}

/**
 * Check submission timing (too fast = likely bot)
 */
export function validateSubmissionTiming(
  timestamp?: number
): { valid: boolean; error?: string } {
  if (!timestamp) {
    return { valid: true }; // Can't validate without timestamp
  }

  const now = Date.now();
  const timeDiff = now - timestamp;

  // If submitted in less than 2 seconds, likely a bot
  if (timeDiff < 2000) {
    return { valid: false, error: "Form submitted too quickly" };
  }

  // If submitted more than 24 hours after page load, also suspicious
  if (timeDiff > 24 * 60 * 60 * 1000) {
    return { valid: false, error: "Form session expired" };
  }

  return { valid: true };
}

/**
 * Complete form validation
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  timestamp?: number;
}): {
  valid: boolean;
  errors: string[];
  sanitizedData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
} {
  const errors: string[] = [];

  // Validate honeypot first (silent check)
  if (data.honeypot !== undefined) {
    const honeypotCheck = validateHoneypot(data.honeypot);
    if (!honeypotCheck.valid) {
      // Return silently to not alert bots
      return {
        valid: false,
        errors: ["Invalid submission"],
        sanitizedData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    }
  }

  // Validate name
  const nameCheck = validateName(data.name);
  if (!nameCheck.valid) {
    errors.push(nameCheck.error || "Invalid name");
  }

  // Validate email
  const emailCheck = validateEmail(data.email);
  if (!emailCheck.valid) {
    errors.push(emailCheck.error || "Invalid email");
  }

  // Validate subject
  const subjectCheck = validateSubject(data.subject);
  if (!subjectCheck.valid) {
    errors.push(subjectCheck.error || "Invalid subject");
  }

  // Validate message
  const messageCheck = validateMessage(data.message);
  if (!messageCheck.valid) {
    errors.push(messageCheck.error || "Invalid message");
  }

  // Validate submission timing
  if (data.timestamp) {
    const timingCheck = validateSubmissionTiming(data.timestamp);
    if (!timingCheck.valid) {
      errors.push(timingCheck.error || "Invalid timing");
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitizedData: {
      name: sanitizeString(data.name, 100),
      email: sanitizeString(data.email.toLowerCase(), 255),
      subject: sanitizeString(data.subject, 200),
      message: sanitizeString(data.message, 5000),
    },
  };
}
