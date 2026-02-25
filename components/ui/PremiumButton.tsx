import React from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ children, className, icon, variant = "primary", ...props }, ref) => {
    if (variant === "secondary") {
      return (
        <button
          ref={ref}
          className={cn(
            "group flex items-center justify-center h-12 rounded-full font-medium text-sm px-8 transition-all duration-300",
            "text-foreground bg-transparent border border-black/20 dark:border-white/20",
            "hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5",
            "hover:scale-105 active:scale-95",
            className
          )}
          {...props}
        >
          {children}
          {icon && (
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full font-bold text-sm px-8 transition-all duration-300",
          "bg-theme-gradient text-black hover:scale-105 active:scale-95",
          "shadow-[0_0_20px_rgba(254,205,26,0.3)] hover:shadow-[0_0_30px_rgba(254,205,26,0.5)]",
          "border border-white/20 dark:border-white/10",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
          <span className="relative h-full w-12 bg-white/40" />
        </span>
        <span className="relative z-10 flex items-center justify-center drop-shadow-sm">
          {children}
          {icon && (
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </span>
      </button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";
