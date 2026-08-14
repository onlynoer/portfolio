"use client";

import React, { useState } from "react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6 overflow-hidden rounded-lg shadow-xl bg-slate-900 border border-slate-800">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 select-none">
        {/* Language Badge & Copy Button */}
        <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider space-x-3">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className={`flex items-center space-x-2 px-2 py-1 rounded text-xs font-medium transition-colors 
              ${copied
                ? "text-main-accent bg-emerald-950/30 border border-emerald-800/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376A8.965 8.965 0 0 0 12 12.75c-.129 0-.258.011-.385.032m5.625 4.468a9.03 9.03 0 0 1-1.591 2.548M12 12.75a8.966 8.966 0 0 1-2.25 5.922m2.25-5.922c1.24 0 2.41.34 3.414.937m-1.591 2.548a8.967 8.967 0 0 1-2.251 2.24m2.251-2.24a8.954 8.954 0 0 1-4.467-1.189m0 0a8.967 8.967 0 0 1-2.25-2.241M12 3c.132 0 .263.01.393.028a8.949 8.949 0 0 1 5.625 4.468m-5.625-4.496A8.967 8.967 0 0 1 12 12.75a8.965 8.965 0 0 1-2.25-5.922M12 3a8.967 8.967 0 0 0-2.25 5.922m0 0A8.919 8.919 0 0 1 12 12.75" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
      </div>

      {/* Code Area */}
      <div className="code-scrollbar p-4 max-h-168 overflow-auto text-sm sm:text-base text-slate-300">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
