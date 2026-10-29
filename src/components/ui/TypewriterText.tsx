"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  /** Delay before animation starts (ms) */
  startDelay?: number;
  /** Speed for typing each character (ms) */
  typeSpeed?: number;
  /** How long the full text stays visible before erasing (ms) */
  holdDuration?: number;
  /** Speed for erasing each character (ms) */
  eraseSpeed?: number;
  /** How long to pause after full erase before retyping (ms) */
  pauseAfterErase?: number;
  /** Whether to loop the animation indefinitely */
  loop?: boolean;
}

export function TypewriterText({
  text,
  className = "",
  startDelay = 400,
  typeSpeed = 60,
  holdDuration = 2200,
  eraseSpeed = 35,
  pauseAfterErase = 700,
  loop = true,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "hold" | "erasing" | "pause">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Check reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setDisplayed(text);
      return;
    }

    const clear = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    // Start after initial delay
    timeoutRef.current = setTimeout(() => setPhase("typing"), startDelay);

    return clear;
  }, [startDelay, text]);

  useEffect(() => {
    const clear = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        setPhase("hold");
      }
    } else if (phase === "hold") {
      if (!loop) return; // stay visible if not looping
      timeoutRef.current = setTimeout(() => setPhase("erasing"), holdDuration);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, eraseSpeed);
      } else {
        setPhase("pause");
      }
    } else if (phase === "pause") {
      timeoutRef.current = setTimeout(() => {
        setPhase("typing");
      }, pauseAfterErase);
    }

    return clear;
  }, [phase, displayed, text, typeSpeed, holdDuration, eraseSpeed, pauseAfterErase, loop]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayed}</span>
      {/* blinking cursor */}
      <span
        aria-hidden="true"
        className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] animate-[blink_1s_step-end_infinite]"
      />
    </span>
  );
}

