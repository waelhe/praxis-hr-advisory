"use client";

import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { Scale, MapPin } from "lucide-react";

export function LegalEthics() {
  const { t } = useLang();
  const { legalAreas, legalStatement } = useContent();

  return (
    <section className="bg-navy-950 py-16 lg:py-20">
      <div className="shell">
        <Reveal>
          <div className="grid items-start gap-8 rounded-2xl border border-navy-800 bg-navy-900/60 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amberbr-500/15 ring-1 ring-amberbr-500/30">
                  <Scale className="h-5.5 w-5.5 text-amberbr-500" strokeWidth={1.8} />
                </span>
                <p className="eyebrow text-amberbr-500">{t("§ 12 — Legal & ethical awareness", "§ 12 — الوعي القانوني والأخلاقي")}</p>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                {t("General HR knowledge is not legal advice", "المعرفة العامة بالموارد البشرية ليست استشارة قانونية")}
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-navy-200">
                {legalStatement}
              </p>
              <p className="mt-4 flex items-start gap-2 text-[12.5px] leading-relaxed text-navy-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amberbr-500" />
                {t(
                  "Employment law varies across countries — and within them. Probation rules, notice periods, works councils, data protection, and at-will doctrines differ enough to change the right answer entirely.",
                  "يختلف قانون العمل بين الدول — وداخلها. قواعد التجربة، ومهل الإشعار، ومجالس العمال، وحماية البيانات، ومذاهب الفصل الحر تختلف بما يكفي لتغيير الجواب الصائب كليًا."
                )}
              </p>
            </div>
            <div className="lg:border-s lg:border-navy-800 lg:ps-8">
              <p className="eyebrow mb-4 text-navy-400">{t("Attention areas", "مجالات الانتباه")}</p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {legalAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 rounded-lg border border-navy-800 bg-navy-950/60 px-3.5 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amberbr-500" />
                    <p className="text-[12.5px] font-medium text-navy-100">{area}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] leading-relaxed text-navy-400">
                {t(
                  "Where any recommendation on this platform touches these areas, the platform says so explicitly — and defers to qualified counsel for the jurisdiction in question.",
                  "حيثما تمسّ أي توصية في هذه المنصة هذه المجالات، تنص المنصة على ذلك صراحةً — وتحيل إلى مستشار مؤهل للولاية القضائية المعنية."
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
