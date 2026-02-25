"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 border border-black/5 dark:border-white/10 animate-pulse" />
    )
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-[#141414]/80 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg hover:scale-110 transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FECD1A]/20 to-[#64F4AB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(254,205,26,0.5)] transition-transform duration-500 rotate-0 scale-100" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700 transition-transform duration-500 rotate-0 scale-100" />
        )}
      </div>
    </button>
  )
}