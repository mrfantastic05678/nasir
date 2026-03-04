/**
 * Server-side validation utilities for contact form
 * Prevents spam and validates input data
 */

/**
 * List of disposable email domains to block
 */
const DISPOSABLE_EMAIL_DOMAINS = [
  // Common disposable email providers
  "tempmail.org", "tempmail.com", "tempmail.net", "tempmailaddress.com",
  "temp-mail.org", "temp-mail.io",
  "guerrillamail.com", "guerrillamail.org", "guerrillamail.net",
  "mailinator.com", "10minutemail.com", "throwaway.email",
  "getairmail.com", "yopmail.com", "maildrop.cc",
  "sharklasers.com", "fakeinbox.com", "incognitomail.org",
  "mailnesia.com", "trashmail.com", "throwawaymail.com",
  "randomail.net", "maildisposable.com", "disposablemail.com",
  "dispostable.com", "trashmail.me", "spamgourmet.com",
  "spamgourmet.org", "mailnull.com", "spamfree24.org",
  "discard.email", "filzmail.com", "tempr.email",
  "getnada.com", "mohmal.com", "tnef.email",
  "mailpoof.com", "trashmail.at", "trashmail.io",
  "mailexpire.com", "deadaddress.com", "spambog.com",
  "spamdecoy.com", "tempinbox.com", "mailsac.com",
  "jetable.fr", "mytrashmail.com", "mt2015.com",
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
  // Money / prize / gambling spam
  /\b(win|winner|won|prize|lottery|jackpot|earn \$|make \$|\$\d+|usd|free money|easy money|extra income|cash|payout|reward|bonus|gift card|coupon|discount code)\b/gi,
  // Financial spam
  /\b(viagra|cialis|bitcoin|crypto|forex|trading|investment|loan|debt|credit card|casino|poker|bet|gambling|nft|airdrop)\b/gi,
  // Urgency manipulation
  /\b(urgent|act now|limited time|click here|buy now|order now|sign up now|don'?t miss|expires|last chance|hurry|immediately)\b/gi,
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

  // Detect bot-generated random strings
  // Real names have vowels — random strings often don't
  const vowels = (cleanName.match(/[aeiouAEIOU]/g) || []).length;
  const vowelRatio = vowels / cleanName.replace(/\s/g, "").length;
  if (vowelRatio < 0.15 && cleanName.length > 4) {
    return { valid: false, error: "Please enter your real name" };
  }

  // Real names have spaces (first + last) OR are short (single name like 'Ali')
  // Bot strings like 'ssFeVZomc' or 'yqPJkl0GU' are 8–12 chars with no space
  const hasSpace = /\s/.test(cleanName);
  if (!hasSpace && cleanName.length > 9) {
    return { valid: false, error: "Please enter your full name" };
  }

  // Detect random camelCase strings (e.g. 'sFqJMBbsd', 'NaZCXldLX')
  // Count uppercase letters that are NOT the first char — real names rarely have many
  const midUpperCount = (cleanName.slice(1).match(/[A-Z]/g) || []).length;
  const midUpperRatio = midUpperCount / cleanName.length;
  if (midUpperRatio > 0.35 && cleanName.length > 5) {
    return { valid: false, error: "Please enter your real name" };
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

  // Check subject for spam keywords (same signal patterns as message)
  const subjectSpamPatterns = [
    /\b(win|winner|won|prize|lottery|jackpot|\$\d+|free money|easy money|cash|reward|gift card)\b/gi,
    /\b(viagra|cialis|bitcoin|crypto|casino|poker|forex|investment|loan|credit card|nft|airdrop)\b/gi,
    /\b(urgent|act now|limited time|click here|buy now|sign up now|last chance|hurry)\b/gi,
  ];
  for (const pattern of subjectSpamPatterns) {
    if (pattern.test(cleanSubject)) {
      return { valid: false, error: "Subject contains prohibited content" };
    }
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

  // Minimum word count (too short = likely spam/test)
  const wordCount = cleanMessage.split(/\s+/).filter(w => w.length > 1).length;
  if (wordCount < 3) {
    return { valid: false, error: "Message is too short. Please describe how I can help you." };
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

  // Lower threshold — 2 hits = spam (was 3)
  if (spamScore >= 2) {
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
