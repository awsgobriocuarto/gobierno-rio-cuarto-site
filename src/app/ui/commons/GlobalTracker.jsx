"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/app/lib/track";

const SCROLL_MILESTONES = [25, 50, 75, 100];
const FILE_EXTENSIONS = /\.(pdf|docx?|xlsx?|pptx?|csv|zip|rar|odt|ods)(\?|#|$)/i;
const SOCIAL_NETWORKS = {
  "facebook.com": "facebook",
  "instagram.com": "instagram",
  "youtube.com": "youtube",
  "youtu.be": "youtube",
  "twitter.com": "twitter",
  "x.com": "twitter",
  "tiktok.com": "tiktok",
  "linkedin.com": "linkedin",
};
const IGNORED_IFRAME_HOSTS = ["chat.leandrodev.com.ar"];
const MAX_ERRORS_PER_PAGE = 5;

const hostOf = (href) => {
  try {
    return new URL(href, window.location.origin).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

// Clasifica un enlace; devuelve null si no es de interés.
// Los enlaces con data-track ya los registra OpenPanel, no se duplican.
const classifyLink = (anchor) => {
  const href = anchor.getAttribute("href") || "";
  if (!href || anchor.hasAttribute("data-track")) return null;

  if (href.startsWith("tel:")) {
    return ["contact_click", { type: "phone", value: href.slice(4) }];
  }
  if (href.startsWith("mailto:")) {
    return ["contact_click", { type: "email", value: href.slice(7) }];
  }

  const host = hostOf(href);

  if (anchor.closest(".share-modal")) {
    return ["share_option", { network: host }];
  }
  if (host === "wa.me" || host === "api.whatsapp.com") {
    return ["contact_click", { type: "whatsapp" }];
  }
  if (
    host === "maps.app.goo.gl" ||
    (host.endsWith("google.com") && href.includes("/maps"))
  ) {
    return ["contact_click", { type: "address" }];
  }
  if (SOCIAL_NETWORKS[host]) {
    return [
      "social_click",
      {
        network: SOCIAL_NETWORKS[host],
        location: anchor.closest("footer") ? "footer" : "content",
      },
    ];
  }
  if (FILE_EXTENSIONS.test(href)) {
    const file = decodeURIComponent(href.split(/[?#]/)[0].split("/").pop());
    return [
      "file_download",
      { file, ext: file.split(".").pop().toLowerCase(), host },
    ];
  }
  return null;
};

const classifyText = (text) => {
  if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(text)) return "email";
  if (/^[+\d][\d\s()-]{5,}$/.test(text)) return "phone";
  if (/^https?:\/\//i.test(text)) return "url";
  return "text";
};

// Escuchas globales que no dependen de un componente concreto:
// profundidad de scroll, clics en contactos/redes/archivos, interacción con
// iframes (mapas, videos), copiado, impresión y errores de JavaScript.
export default function GlobalTracker() {
  const pathname = usePathname();

  // Profundidad de scroll por página
  useEffect(() => {
    const reached = new Set();
    let ticking = false;

    const check = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY || doc.scrollTop) / scrollable) * 100;
      SCROLL_MILESTONES.forEach((milestone) => {
        if (percent >= milestone - 1 && !reached.has(milestone)) {
          reached.add(milestone);
          track("scroll_depth", { depth: milestone });
        }
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Clics, copiado, impresión, iframes y errores
  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const result = classifyLink(anchor);
      if (result) track(result[0], result[1]);
    };

    const onCopy = () => {
      const text = window.getSelection()?.toString().trim();
      if (!text) return;
      track("text_copy", { kind: classifyText(text), length: text.length });
    };

    const onPrint = () => track("page_print");

    const seenIframes = new Set();
    const onBlur = () => {
      // Al hacer clic dentro de un iframe, la ventana pierde el foco
      setTimeout(() => {
        const active = document.activeElement;
        if (!active || active.tagName !== "IFRAME") return;
        const host = hostOf(active.src);
        if (!host || IGNORED_IFRAME_HOSTS.includes(host)) return;
        const key = `${window.location.pathname}|${active.src}`;
        if (seenIframes.has(key)) return;
        seenIframes.add(key);
        track("embed_interaction", { host, title: active.title || undefined });
      }, 0);
    };

    let errorCount = 0;
    const onError = (event) => {
      if (errorCount >= MAX_ERRORS_PER_PAGE) return;
      errorCount += 1;
      track("js_error", {
        message: String(event.message || "").slice(0, 200),
        source: String(event.filename || "").slice(0, 200),
      });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("copy", onCopy);
    window.addEventListener("beforeprint", onPrint);
    window.addEventListener("blur", onBlur);
    window.addEventListener("error", onError);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("copy", onCopy);
      window.removeEventListener("beforeprint", onPrint);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}
