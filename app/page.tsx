"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Quiz release date: Jan 16, 2026, 12:30 PM IST
const QUIZ_RELEASE_DATE = new Date("2026-01-16T12:30:00+05:30");

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQuizAvailable, setIsQuizAvailable] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const checkQuizStatus = () => {
      const now = new Date();
      setIsQuizAvailable(now >= QUIZ_RELEASE_DATE);
    };

    checkQuizStatus();
    const interval = setInterval(checkQuizStatus, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black font-sans">
      <main className="flex flex-col items-center justify-center px-6 pt-24 pb-0 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8">
            Workshops
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
            This site contains the resources for the workshops conducted by{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              ArtUs Academy
            </span>
            .
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://artusacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950 font-bold hover:scale-105 transition-transform shadow-xl shadow-zinc-200 dark:shadow-none"
            >
              Visit Academy
            </a>
          </div>
        </div>
      </main>

      <section id="resources" className="w-full max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-zinc-100">
          Latest Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all">
            <div className="h-1 bg-zinc-100 dark:bg-zinc-800 mb-6 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 transition-colors" />
            <h3 className="text-xl font-bold mb-2">Git and GitHub Workshop</h3>
            <p className="text-zinc-500 text-sm mb-6">
              A comprehensive workshop on Git and GitHub.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                NN
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                  Mentor
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Nikhil Nath R
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 items-center">
              {isQuizAvailable ? (
                <a
                  href="https://forms.gle/Tyn749ojDBL5Qpd78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950 text-sm font-bold text-center hover:opacity-90 transition-opacity"
                >
                  Take Quiz
                </a>
              ) : (
                <div className="w-full py-3 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 text-sm font-bold text-center cursor-not-allowed group/quiz relative">
                  Take Quiz
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/quiz:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                    Available Jan 16, 12:30 PM
                  </div>
                </div>
              )}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-bold text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2"
                >
                  View Deck
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full py-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl z-10 animate-in fade-in zoom-in-95 duration-200 origin-top">
                    <a
                      href="/workshops/git-github/deck/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      Webpage
                    </a>
                    <a
                      href="/workshops/git-github/deck/presentation.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      PDF Deck
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
