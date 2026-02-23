"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Logo = ({ scrolled = false }: { scrolled?: boolean }) => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 12 }}
        className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-950 border border-indigo-500/30 shadow-lg shadow-primary/20 transition-all duration-300 ${
          scrolled ? "w-9 h-9" : "w-12 h-12"
        }`}
      >
        <span
          className={`text-white font-sans font-extrabold tracking-tighter leading-none ${
            scrolled ? "text-sm" : "text-xl"
          }`}
        >
          NS
        </span>
      </motion.div>
      <span
        className={`font-montserrat font-bold tracking-tight text-foreground transition-all duration-300 ${
          scrolled ? "text-xl" : "text-2xl"
        }`}
      >
        Nasir<span className="text-accent text-3xl leading-none">.</span>
      </span>
    </div>
  );
};
