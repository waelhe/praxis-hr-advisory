"use client";

import { Button } from "@/components/ui/button";
import { useLang, useContent } from "@/lib/i18n";
import { Network, ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLang();
  const { navItems } = useContent();

  const principles = [
    t("Evidence before opinion", "الدليل قبل الرأي"),
    t("The system, not the person", "النظام لا الشخص"),
    t("Simple beats bureaucratic", "البسيط يغلب البيروقراطي"),
    t("Legal frameworks verified locally", "الأطر القانونية تُتحقَّق محليًا"),
  ];

  return (
    <footer className="border-t border-navy-200 bg-white">
      <div className="shell flex flex-col gap-10 py-12 lg:flex-row lg:gap-16">
        {/* Brand */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900">
              <Network className="h-[18px] w-[18px] text-tealbr-200" strokeWidth={2.2} />
            </span>
            <div className="leading-none">
              <p className="font-display text-[17px] font-bold tracking-tight text-navy-950">
                Praxis
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-navy-500">
                {t("People & Organization Advisory", "استشارات الأفراد والمؤسسات")}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-navy-600">
            {t(
              "Don’t just manage employees. Understand the people system behind the organization, diagnose what is actually happening, and design better ways of working.",
              "لا تكتفِ بإدارة الموظفين. افهم منظومة البشر الكامنة خلف المنظمة، وشخّص ما يحدث فعلًا، وصمّم طرق عمل أفضل."
            )}
          </p>
          <p className="mt-4 flex items-center gap-2 text-[12.5px] text-navy-500" dir="ltr">
            <Mail className="h-3.5 w-3.5 text-tealbr-600" />
            advisory@praxis-hr.example
          </p>
        </div>

        {/* Nav */}
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:ms-auto" aria-label={t("Footer", "التذييل")}>
          <div>
            <p className="eyebrow mb-3 text-navy-400">{t("Platform", "المنصة")}</p>
            <ul className="space-y-2">
              {navItems.slice(0, 4).map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[13px] font-medium text-navy-700 hover:text-tealbr-700"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3 text-navy-400">{t("Continue", "تابع")}</p>
            <ul className="space-y-2">
              {navItems.slice(4).map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[13px] font-medium text-navy-700 hover:text-tealbr-700"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#small-business"
                  className="text-[13px] font-medium text-navy-700 hover:text-tealbr-700"
                >
                  {t("Small Business Mode", "وضع الأعمال الصغيرة")}
                </a>
              </li>
              <li>
                <a
                  href="#hr-tech"
                  className="text-[13px] font-medium text-navy-700 hover:text-tealbr-700"
                >
                  {t("HR Technology", "تقنية الموارد البشرية")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3 text-navy-400">{t("Principles", "المبادئ")}</p>
            <ul className="space-y-2 text-[13px] font-medium text-navy-700">
              {principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-navy-100 bg-navy-50/50">
        <div className="shell flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <p className="text-[11.5px] leading-relaxed text-navy-500">
            {t(
              `© ${new Date().getFullYear()} Praxis People Advisory — a demonstration platform. Faculty profile and case studies are illustrative composites. Content is general HR knowledge, not legal advice.`,
              `© ${new Date().getFullYear()} براكسيس للاستشارات — منصة عرض توضيحي. ملف الخبير ودراسات الحالة مركّبات توضيحية. المحتوى معرفة عامة بالموارد البشرية، لا استشارة قانونية.`
            )}
          </p>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="shrink-0 border-navy-200 font-display text-[12.5px] font-semibold text-navy-700 hover:border-tealbr-500 hover:text-tealbr-700"
          >
            <a href="#diagnose">
              {t("Start a diagnosis", "ابدأ تشخيصًا")}
              <ArrowUpRight className="ms-1.5 h-3.5 w-3.5 rtl:-scale-x-100" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
