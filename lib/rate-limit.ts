/**
 * In-memory rate limiter for contact form submissions
 * Limits submissions per IP address within a time window
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store (reset on server restart)
// For production, consider using Redis, Vercel KV, or a database
const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Rate limit configuration
 */
const RATE_LIMIT_CONFIG = {
  // Maximum requests allowed per window
  maxRequests: 5,
  // Time window in milliseconds (1 hour)
  windowMs: 60 * 60 * 1000,
  // Prefix for storage keys
  prefix: "rate_limit:",
};

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (IP address, email, etc.)
 * @returns Object with success status and remaining info
 */
export function checkRateLimit(identifier: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const key = `${RATE_LIMIT_CONFIG.prefix}${identifier}`;

  // Get existing entry or create new one
  const entry = rateLimitStore.get(key);

  if (!entry) {
    // First request from this identifier
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });
    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    };
  }

  // Check if the window has expired
  if (now > entry.resetTime) {
    // Window expired, reset counter
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    };
    rateLimitStore.set(key, newEntry);
    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
      resetTime: newEntry.resetTime,
    };
  }

  // Check if limit exceeded
  if (entry.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment counter
  entry.count += 1;
  rateLimitStore.set(key, entry);
  return {
    allowed: true,
    remaining: RATE_LIMIT_CONFIG.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Clean up expired entries (call periodically)
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Get client IP address from request
 */
export function getClientIP(request: Request): string {
  // Check various headers for IP address
  const headers = request.headers;

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = headers.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback to a default
  return "unknown";
}
