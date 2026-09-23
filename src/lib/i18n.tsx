"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import * as EN from "./hr-data";
import * as AR from "./hr-data-ar";

export type Lang = "en" | "ar";

interface LangContextValue {
  lang: Lang;
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  /** Pick a string by language: t("English", "العربية") */
  t: (en: string, ar: string) => string;
}

const STORAGE_KEY = "praxis-lang";

/** External store backed by localStorage (server snapshot: "en"). */
const langStore = {
  listeners: new Set<() => void>(),
  subscribe(listener: () => void) {
    langStore.listeners.add(listener);
    return () => {
      langStore.listeners.delete(listener);
    };
  },
  getSnapshot(): Lang {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  },
  getServerSnapshot(): Lang {
    return "en";
  },
  set(next: Lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
    langStore.listeners.forEach((listener) => listener());
  },
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  isRTL: false,
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot
  );

  // Reflect language + direction on the <html> element.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value: LangContextValue = {
    lang,
    isRTL: lang === "ar",
    setLang: langStore.set,
    t: (en: string, ar: string) => (lang === "ar" ? ar : en),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Language-aware access to the full HR content bundle (EN or AR mirror). */
export function useContent() {
  const { lang } = useLang();
  return lang === "ar" ? AR : EN;
}

/** Detect whether a message is predominantly Arabic (for per-message RTL). */
export function isArabicText(text: string): boolean {
  const arabic = (text.match(/[\u0600-\u06FF]/g) || []).length;
  const latin = (text.match(/[A-Za-z]/g) || []).length;
  return arabic > 0 && arabic >= latin * 0.3;
}
