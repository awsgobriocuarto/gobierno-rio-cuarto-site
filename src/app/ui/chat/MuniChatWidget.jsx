"use client";

import { useState, useEffect, useRef } from "react";

export default function MuniChatWidget({
  widgetUrl,
  showHintByDefault = true,
}) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHintClosed, setIsHintClosed] = useState(!showHintByDefault);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMessage = (event) => {
      if (typeof event.data !== "string") return;
      try {
        const widgetOrigin = new URL(widgetUrl).origin;
        if (event.origin !== widgetOrigin) return;
      } catch (e) {}

      switch (event.data) {
        case "chat-opened":
          setIsOpen(true);
          setIsHintClosed(true);
          break;
        case "chat-closed":
          setIsOpen(false);
          break;
        case "chat-hint-closed":
          setIsHintClosed(true);
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [mounted, widgetUrl]);

  useEffect(() => {
    if (!isOpen || !mounted) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        const iframe = containerRef.current.querySelector("iframe");
        if (iframe?.contentWindow) {
          iframe.contentWindow.postMessage("close-chat", "*");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, mounted]);

  if (!mounted) return null;

  const getContainerStyles = () => {
    const base = {
      position: "fixed",
      zIndex: 999999,
      pointerEvents: "none",
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    };

    if (isOpen) {
      return isMobile
        ? { ...base, inset: 0, width: "100%", height: "100%" }
        : { ...base, bottom: "24px", right: "24px", width: "380px", height: "min(620px, calc(100vh - 100px))" };
    }

    if (isHintClosed) {
      // Suficiente espacio para que el ícono no se recorte ni genere sombra visible
      return {
        ...base,
        bottom: "12px",
        right: "12px",
        width: isMobile ? "110px" : "120px",
        height: isMobile ? "110px" : "120px",
      };
    }

    return {
      ...base,
      bottom: "12px",
      right: "12px",
      width: isMobile ? "calc(100% - 32px)" : "360px",
      height: isMobile ? "180px" : "200px",
      maxWidth: "360px",
    };
  };

  return (
    <div
      ref={containerRef}
      id="muni-chat-widget-container"
      style={{ ...getContainerStyles(), boxShadow: "none", background: "transparent", overflow: "visible" }}
    >
      <iframe
        src={widgetUrl}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: "auto",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        allow="telephone=yes; clipboard-write"
        title="Asistente Muni Chat"
      />
    </div>
  );
}
