"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, Network } from "lucide-react";
import { useLang, useContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, isRTL, setLang, t } = useLang();
  const { navItems } = useContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100 bg-white/95 shadow-[0_1px_16px_rgba(10,26,38,0.06)] backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={t("Praxis home", "براكسيس — الرئيسية")}>
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
              scrolled ? "bg-navy-900" : "bg-white/10 ring-1 ring-white/20"
            )}
          >
            <Network className="h-[18px] w-[18px] text-tealbr-200" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-[17px] font-bold tracking-tight transition-colors",
                scrolled ? "text-navy-950" : "text-white"
              )}
            >
              Praxis
            </span>
            <span
              className={cn(
                "mt-1 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors",
                scrolled ? "text-navy-500" : "text-navy-300"
              )}
            >
              {t("People & Organization Advisory", "استشارات الأفراد والمؤسسات")}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("Primary", "الرئيسية")}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors",
                scrolled
                  ? "text-navy-700 hover:bg-navy-50 hover:text-navy-950"
                  : "text-navy-200 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* ── Language toggle ─────────────────────────────── */}
          <div
            role="group"
            aria-label={t("Switch language", "تبديل اللغة")}
            className={cn(
              "flex items-center rounded-lg p-0.5 font-display text-[12px] font-bold transition-colors",
              scrolled
                ? "border border-navy-200 bg-white"
                : "border border-white/20 bg-white/5 backdrop-blur"
            )}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              title="English"
              className={cn(
                "rounded-md px-2.5 py-1 transition-colors",
                lang === "en"
                  ? "bg-tealbr-600 text-white"
                  : scrolled
                  ? "text-navy-500 hover:text-navy-900"
                  : "text-navy-300 hover:text-white"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("ar")}
              aria-pressed={lang === "ar"}
              title="العربية"
              className={cn(
                "rounded-md px-2.5 py-1 transition-colors",
                lang === "ar"
                  ? "bg-tealbr-600 text-white"
                  : scrolled
                  ? "text-navy-500 hover:text-navy-900"
                  : "text-navy-300 hover:text-white"
              )}
            >
              ع
            </button>
          </div>

          <Button
            asChild
            size="sm"
            className={cn(
              "hidden font-display text-[13px] font-semibold sm:inline-flex",
              scrolled
                ? "bg-navy-900 text-white hover:bg-navy-800"
                : "bg-tealbr-600 text-white hover:bg-tealbr-500"
            )}
          >
            <a href="#diagnose">
              {t("Analyze a Problem", "حلّل مشكلة")}
              <ArrowRight className="ms-1.5 h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("Open navigation menu", "افتح قائمة التنقل")}
                className={cn("lg:hidden", scrolled ? "text-navy-800" : "text-white hover:bg-white/10")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="w-72 bg-white">
              <SheetTitle className="sr-only">{t("Navigation menu", "قائمة التنقل")}</SheetTitle>
              <SheetDescription className="sr-only">
                {t(
                  "Jump to any section of the Praxis advisory platform.",
                  "انتقل إلى أي قسم من منصة براكسيس الاستشارية."
                )}
              </SheetDescription>
              <nav className="mt-2 flex flex-col gap-1" aria-label={t("Mobile", "الجوال")}>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-[15px] font-medium text-navy-800 hover:bg-navy-50"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex items-center justify-between rounded-lg border border-navy-200 bg-navy-50/50 px-4 py-2.5">
                <span className="font-display text-[13px] font-semibold text-navy-800">
                  {t("Language", "اللغة")}
                </span>
                <div role="group" aria-label={t("Switch language", "تبديل اللغة")} className="flex items-center rounded-lg border border-navy-200 bg-white p-0.5">
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    aria-pressed={lang === "en"}
                    className={cn(
                      "rounded-md px-3 py-1 font-display text-[12px] font-bold",
                      lang === "en" ? "bg-tealbr-600 text-white" : "text-navy-600"
                    )}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("ar")}
                    aria-pressed={lang === "ar"}
                    className={cn(
                      "rounded-md px-3 py-1 font-display text-[12px] font-bold",
                      lang === "ar" ? "bg-tealbr-600 text-white" : "text-navy-600"
                    )}
                  >
                    ع
                  </button>
                </div>
              </div>
              <Button
                asChild
                className="mt-4 w-full bg-navy-900 font-display font-semibold hover:bg-navy-800"
              >
                <a href="#diagnose" onClick={() => setOpen(false)}>
                  {t("Analyze a Problem", "حلّل مشكلة")}
                  <ArrowRight className="ms-1.5 h-4 w-4 rtl:rotate-180" />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
