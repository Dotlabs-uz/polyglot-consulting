
import React from 'react';

export const Logo: React.FC<{ className?: string, hideText?: boolean }> = ({ className = "", hideText = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          {/* Shield Base */}
          <path d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50V20Z" fill="#1a237e" />
          {/* Stylized Parrot Head - Orange */}
          <path d="M50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C40 80 30 75 25 65L25 50C25 33.4315 36.1929 20 50 20Z" fill="#f57c00" />
          {/* Eye */}
          <circle cx="65" cy="40" r="6" fill="white" />
          {/* Beak Outline (White) */}
          <path d="M25 50L45 50M25 50C25 40 35 30 45 30" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      {!hideText && (
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black text-[#1a237e] tracking-tight uppercase">POLYGLOT</span>
          <span className="text-xl font-semibold text-[#f57c00] tracking-wide">Consulting</span>
        </div>
      )}
    </div>
  );
};
