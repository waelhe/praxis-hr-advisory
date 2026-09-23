"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Microscope, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();

  const heroStats = [
    { value: "15", label: t("steps in the diagnostic method", "خطوة في منهجية التشخيص") },
    { value: "11", label: t("HR domains covered", "مجال موارد بشرية مشمولًا") },
    { value: "9", label: t("problem types separated", "أنماط مشكلات مفصولة") },
    { value: "0", label: t("assumptions accepted unexamined", "افتراضات تُقبل دون فحص") },
  ];

  const lensItems = [
    t("Leadership", "القيادة"),
    t("Incentives", "الحوافز"),
    t("Job design", "تصميم العمل"),
    t("Culture", "الثقافة"),
    t("Capability", "القدرات"),
  ];

  const principles = [
    {
      icon: Microscope,
      title: t("Symptoms are not causes", "الأعراض ليست أسبابًا"),
      body: t(
        "Turnover, low morale, missed targets — these are readings, not diagnoses. The cause lives upstream.",
        "الدوران، وانخفاض الروح المعنوية، والأهداف الضائعة — قراءاتٌ لا تشخيصات. السبب يقع في المرحلة الأعلى."
      ),
    },
    {
      icon: GitBranch,
      title: t("The system is the unit of analysis", "النظام هو وحدة التحليل"),
      body: t(
        "Leadership, structure, incentives, and job design interact. We diagnose the system, not the person.",
        "القيادة والهيكل والحوافز وتصميم العمل تتفاعل. نشخّص النظام، لا الشخص."
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Evidence before opinion", "الدليل قبل الرأي"),
      body: t(
        "Facts, data, assumptions, and hypotheses are labeled — so you can challenge the reasoning, not just the conclusion.",
        "الوقائع والبيانات والافتراضات والفرضيات موسومة — لتناقش المنطق كاملًا، لا الخلاصة وحدها."
      ),
    },
  ];

  return (
    <section id="top" className="relative overflow-hidden bg-navy-950">
      <div className="dot-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(14,124,114,0.16),transparent_60%),radial-gradient(60%_50%_at_85%_20%,rgba(76,112,142,0.25),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="shell relative pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Copy ─────────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex items-center gap-3"
            >
              <span className="eyebrow rounded-full border border-tealbr-200/30 bg-tealbr-600/10 px-3 py-1.5 text-tealbr-200">
                {t("HR Advisory & Organizational Diagnostics", "استشارات الموارد البشرية والتشخيص التنظيمي")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              {t("Understand Your People.", "افهم أفرادك.")}{" "}
              <span className="bg-gradient-to-r from-tealbr-200 via-tealbr-200 to-navy-300 bg-clip-text text-transparent">
                {t("Improve Your Organization.", "طوّر منظمتك.")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-200 sm:text-base"
            >
              {t(
                "Diagnose workforce and organizational problems using evidence-based HR thinking, then turn the diagnosis into practical action — with the rigor of a university seminar and the pragmatism of an HR director who has signed the paychecks.",
                "شخّص مشكلات القوى العاملة والمنظمة بتفكيرٍ قائم على الأدلة، ثم حوّل التشخيص إلى عملٍ عملي — بصرامة حلقة جامعية وبراغماتية مدير موارد بشرية وقّع شيكات الرواتب بيده."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="h-12 bg-tealbr-600 px-6 font-display text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(14,124,114,0.35)] hover:bg-tealbr-500"
              >
                <a href="#diagnose">
                  {t("Analyze an HR Problem", "حلّل مشكلة موارد بشرية")}
                  <ArrowRight className="ms-2 h-4.5 w-4.5 rtl:rotate-180" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-navy-600 bg-transparent px-6 font-display text-[15px] font-semibold text-navy-100 hover:border-navy-400 hover:bg-white/5 hover:text-white"
              >
                <a href="#library">
                  <BookOpen className="me-2 h-4.5 w-4.5" />
                  {t("Explore HR Topics", "استكشف موضوعات الموارد البشرية")}
                </a>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-navy-800 bg-navy-800 sm:grid-cols-4"
            >
              {heroStats.map((s) => (
                <div key={s.label} className="bg-navy-900/90 px-4 py-4">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="tnum font-display text-2xl font-bold text-tealbr-200">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-[11.5px] font-medium leading-snug text-navy-300">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Visual ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl border border-navy-700/60 shadow-2xl shadow-navy-950/60">
              <Image
                src="/images/hero.jpg"
                alt={t(
                  "Colleagues collaborating on laptops in a modern office — everyday organizational behavior in practice",
                  "زملاء يتعاونون على حواسيب محمولة في مكتب حديث — السلوك التنظيمي اليومي في ممارسته"
                )}
                width={1600}
                height={1067}
                priority
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
              <div className="absolute bottom-0 start-0 end-0 p-6">
                <p className="font-serif text-[17px] italic leading-snug text-white/95">
                  {t(
                    "“Don’t just manage employees. Understand the people system behind the organization — and design better ways of working.”",
                    "«لا تكتفِ بإدارة الموظفين. افهم منظومة البشر الكامنة خلف المنظمة — وصمّم طرق عمل أفضل.»"
                  )}
                </p>
                <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-tealbr-200">
                  {t("The Praxis principle", "مبدأ براكسيس")}
                </p>
              </div>
            </div>

            <div className="absolute -start-5 top-8 hidden w-52 rounded-xl border border-navy-700/70 bg-navy-900/95 p-4 shadow-xl backdrop-blur xl:block">
              <p className="eyebrow text-[10px] text-navy-300">{t("Root-cause lens", "عدسة السبب الجذري")}</p>
              <ul className="mt-2 space-y-1.5">
                {lensItems.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[12.5px] font-medium text-navy-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-tealbr-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ── Principles strip ─────────────────────────────── */}
        <div className="mt-14 grid gap-4 border-t border-navy-800 pt-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-3.5"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tealbr-600/15 ring-1 ring-tealbr-200/20">
                <p.icon className="h-4 w-4 text-tealbr-200" />
              </span>
              <div>
                <h3 className="font-display text-[14px] font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-navy-300">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
