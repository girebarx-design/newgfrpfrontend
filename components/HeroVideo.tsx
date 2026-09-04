"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Composite Tech's own CT6 footage as a silent looping background
 * (youtube.com/watch?v=W1ywFzQaqHU on @compositetechrebar66).
 *
 * URL-param autoplay (?autoplay=1&mute=1) is unreliable across browsers for
 * embedded iframes — Chrome loaded the player but left it paused on its
 * thumbnail rather than starting it. The IFrame Player API's explicit
 * mute() + playVideo() call, made from our own JS after the player reports
 * ready, is YouTube's documented fix for exactly this and is what actually
 * starts playback.
 */
const VIDEO_ID = "W1ywFzQaqHU";

declare global {
  interface Window {
    YT?: { Player: new (el: HTMLElement, opts: Record<string, unknown>) => unknown };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function HeroVideo() {
  const [allowMotion, setAllowMotion] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
  }, []);

  useEffect(() => {
    if (!allowMotion || !hostRef.current) return;

    function create() {
      if (!hostRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1, mute: 1, loop: 1, playlist: VIDEO_ID,
          controls: 0, modestbranding: 1, rel: 0, playsinline: 1,
          iv_load_policy: 3, disablekb: 1, fs: 0,
        },
        events: {
          onReady: (e: { target: { mute: () => void; playVideo: () => void } }) => {
            e.target.mute();
            e.target.playVideo();
          },
        },
      }) as { destroy?: () => void };
    }

    if (window.YT?.Player) {
      create();
    } else {
      const existing = document.getElementById("yt-iframe-api");
      if (!existing) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev?.(); create(); };
    }

    return () => { playerRef.current?.destroy?.(); };
  }, [allowMotion]);

  if (!allowMotion) return null;
  return (
    <div className="heroVideo" aria-hidden="true">
      <div ref={hostRef} />
    </div>
  );
}
