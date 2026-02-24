/**
 * Site Configuration
 * Centralized configuration values used across the application
 */

export const siteConfig = {
  // Production URL - set via environment variable
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // Site Metadata
  name: 'Nasir Siddiqui',
  title: 'Nasir Siddiqui | AI Automations, Chatbots & Digital Services',
  description: 'Nasir Siddiqui is an AI automation expert and full-stack developer specializing in intelligent chatbots, business automation systems, and modern web solutions.',

  // Social Links
  social: {
    twitter: 'https://twitter.com/nasirsiddiqui',
    linkedin: 'https://linkedin.com/in/nasirsiddiqui',
    github: 'https://github.com/nasirsiddiqui',
    facebook: 'https://facebook.com/nasirsiddiqui',
    instagram: 'https://www.instagram.com/nasirsiddiqui/',
  },
} as const;

// Helper function to get full URL for a path
export function getAbsolutePath(path: string = ''): string {
  return `${siteConfig.url}${path}`;
}
