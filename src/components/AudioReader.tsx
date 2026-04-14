"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export function AudioReader({ contentId }: { contentId: string }) {
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const paragraphsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setCurrentIndex(-1);
    paragraphsRef.current.forEach((el) => {
      el.style.backgroundColor = "";
      el.style.borderRadius = "";
      el.style.padding = "";
      el.style.transition = "";
    });
  }, []);

  const play = useCallback(() => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser doesn't support text-to-speech.");
      return;
    }

    if (playing) {
      stop();
      return;
    }

    const container = document.getElementById(contentId);
    if (!container) return;

    const paragraphs = Array.from(container.querySelectorAll("p, h2, h3, li")) as HTMLElement[];
    paragraphsRef.current = paragraphs;

    if (paragraphs.length === 0) return;

    setPlaying(true);

    // Get a natural-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) => v.lang.startsWith("en") && (v.name.includes("Samantha") || v.name.includes("Karen") || v.name.includes("Daniel") || v.name.includes("Google") || v.name.includes("Natural"))
    ) || voices.find((v) => v.lang.startsWith("en-US")) || voices[0];

    let index = 0;

    function speakNext() {
      if (index >= paragraphs.length) {
        stop();
        return;
      }

      // Reset previous highlight
      paragraphs.forEach((el) => {
        el.style.backgroundColor = "";
        el.style.borderRadius = "";
        el.style.padding = "";
      });

      // Highlight current
      const current = paragraphs[index];
      current.style.backgroundColor = "rgba(45, 106, 79, 0.08)";
      current.style.borderRadius = "8px";
      current.style.padding = "8px 12px";
      current.style.transition = "background-color 0.3s ease";
      current.scrollIntoView({ behavior: "smooth", block: "center" });
      setCurrentIndex(index);

      const text = current.textContent || "";
      if (!text.trim()) {
        index++;
        speakNext();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      if (preferred) utterance.voice = preferred;

      utterance.onend = () => {
        index++;
        speakNext();
      };

      utterance.onerror = () => {
        index++;
        speakNext();
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }

    speakNext();
  }, [playing, contentId, stop]);

  // Pre-load voices
  useEffect(() => {
    window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener?.("voiceschanged", () => {
      window.speechSynthesis.getVoices();
    });
  }, []);

  return (
    <button
      onClick={play}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all font-cta ${
        playing
          ? "bg-accent text-white shadow-lg"
          : "bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200"
      }`}
    >
      {playing ? (
        <>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
          Stop Reading
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
          Listen to Article
        </>
      )}
    </button>
  );
}
