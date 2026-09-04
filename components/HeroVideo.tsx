"use client";
import { useEffect, useState } from "react";

/**
 * Composite Tech's own CT6 footage ("NEW RECORD! Producing 6 GFRP Rebars at
 * Once!", youtube.com/watch?v=W1ywFzQaqHU on their channel @compositetechrebar66)
 * as a silent looping background. Muted, no controls, no branding chrome.
 *
 * Gated behind prefers-reduced-motion: a visitor who has asked for less motion
 * gets the plain dark ground instead of an autoplaying video — the hero copy
 * and CTAs render identically either way, just without the moving background.
 */
const VIDEO_ID = "W1ywFzQaqHU";

export default function HeroVideo() {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
  }, []);

  if (!allowMotion) return null;

  const src =
    `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
    `&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`;

  return (
    <div className="heroVideo" aria-hidden="true">
      <iframe
        src={src}
        title=""
        tabIndex={-1}
        allow="autoplay; encrypted-media"
        frameBorder={0}
      />
    </div>
  );
}
