"use client";

import { useEffect, useRef, useState } from "react";

export default function AccessibleResultStatus({
  message,
  signature,
  delay = 900,
}: {
  message: string;
  signature: string;
  delay?: number;
}) {
  const [announcement, setAnnouncement] = useState("");
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const timer = window.setTimeout(() => setAnnouncement(message), delay);
    return () => window.clearTimeout(timer);
  }, [message, signature, delay]);

  return (
    <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {announcement}
    </div>
  );
}
