"use client";

import Image from "next/image";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { UserRound, UserCog, Workflow, Building2, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Philosophy() {
  const { lang, t } = useLang();

  const problemTypes = [
    {
      icon: UserRound,
      label: t("Employee problem", "مشكلة موظف"),
      note: t(
        "genuine capability or conduct issue — confirmed, not assumed",
        "قضية قدرة أو سلوك حقيقية — مؤكَّدة لا مفترضة"
      ),
      tone: "text-navy-700",
    },
    {
      icon: UserCog,
      label: t("Manager problem", "مشكلة مدير"),
      note: t(
        "feedback, coaching, and consequence behavior at the team level",
        "سلوك التغذية الراجعة والتوجيه والعواقب على مستوى الفريق"
      ),
      tone: "text-navy-700",
    },
    {
      icon: Workflow,
      label: t("Process problem", "مشكلة عمليات"),
      note: t(
        "handoffs, tooling, and workflow that defeat effort",
        "نقاط التسليم والأدوات وسير العمل الذي يهزم الجهد"
      ),
      tone: "text-tealbr-700",
    },
    {
      icon: Building2,
      label: t("Structural problem", "مشكلة هيكلية"),
      note: t(
        "spans, layers, role charters, and decision rights",
        "النطاقات والطبقات ومواثيق الأدوار وحقوق القرار"
      ),
      tone: "text-tealbr-700",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              index="01"
              eyebrow={t("Core philosophy", "الفلسفة الجوهرية")}
              title={
                lang === "ar" ? (
                  <>
                    الشكوى المعلَنة نادرًا ما تكون{" "}
                    <span className="font-serif font-medium text-tealbr-700">
                      هي الحالة.
                    </span>
                  </>
                ) : (
                  <>
                    The presenting complaint is rarely{" "}
                    <span className="font-serif font-medium italic text-tealbr-700">
                      the condition.
                    </span>
                  </>
                )
              }
              description={
                lang === "ar" ? (
                  <>
                    <p>
                      «موظفونا يغادرون باستمرار.» «الناس كسالى.» «لا أحد متحمّس.» كل واحد
                      منها وصفٌ لعرَض — السطح المرئي لشيءٍ يحدث في نظام العمل تحته.
                    </p>
                    <p className="mt-4">
                      نتعامل مع المنظمة وأفرادها بوصفها نظامًا واحدًا مترابطًا. القيادة،
                      والهيكل، والحوافز، وتصميم العمل، وحجم العمل، والاختيار، والتطوير،
                      والثقافة، والتواصل — كلها تؤثر في السلوك نفسه. وقبل أن تُصنَّف أي
                      مشكلة مشكلةَ{" "}
                      <em className="font-serif">موظف</em>، نفحص التفسيرات الإدارية
                      والعملياتية والهيكلية والتحفيزية التي تنتج الأعراض ذاتها — وتقدّم
                      عادةً إصلاحات أفضل.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      &ldquo;Our employees keep leaving.&rdquo; &ldquo;People are lazy.&rdquo;
                      &ldquo;Nobody is motivated.&rdquo; Every one of these is a description
                      of a symptom — the visible surface of something happening in the
                      system of work underneath.
                    </p>
                    <p className="mt-4">
                      We treat the organization and its people as one interconnected
                      system. Leadership, structure, incentives, job design, workload,
                      selection, development, culture, and communication all act on the
                      same behavior. Before any problem is labeled an{" "}
                      <em className="font-serif">employee</em> problem, we examine the
                      management, process, structure, and incentive explanations that
                      produce identical symptoms — and usually better fixes.
                    </p>
                  </>
                )
              }
            />

            <Reveal delay={0.1} className="mt-8">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/mission.jpg"
                  alt={t(
                    "Colleagues in a relaxed discussion in a modern office lounge — how work actually gets done",
                    "زملاء في نقاش مرتاح داخل صالة مكتب حديث — كيف ينجز العمل فعلًا"
                  )}
                  width={1200}
                  height={960}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <p className="absolute bottom-3 start-4 end-4 font-serif text-[13.5px] italic leading-snug text-white/95">
                  {t(
                    "Diagnosis happens where the work happens — not in the meeting about the work.",
                    "يحدث التشخيص حيث يحدث العمل — لا في الاجتماع عن العمل."
                  )}
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="rounded-2xl border border-navy-200/80 bg-navy-50/60 p-6 sm:p-8">
                <p className="eyebrow text-navy-500">{t("Never assume it starts with people", "لا تفترض أبدًا أنها تبدأ من الناس")}</p>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-navy-950">
                  {t("Nine explanations, separated before judged", "تسعة تفسيرات، تُفصل قبل أن تُحكَم")}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700">
                  {t(
                    "Every presented problem is tested against nine competing explanations. The discipline is the order: system causes are examined before individual ones, because they are more common, more fixable, and cheaper to be wrong about.",
                    "كل مشكلة معلَنة تُختبر مقابل تسعة تفسيرات متنافسة. الانضباط هنا في الترتيب: تُفحص أسباب النظام قبل الأسباب الفردية، لأنها أكثر شيوعًا، وأكثر قابلية للإصلاح، وأرخص كلفةً عند الخطأ فيها."
                  )}
                </p>
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {problemTypes.map((pt) => (
                    <div
                      key={pt.label}
                      className="flex items-start gap-3 rounded-lg border border-navy-200/70 bg-white p-3.5"
                    >
                      <pt.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-tealbr-600" />
                      <div>
                        <p className={`font-display text-[13px] font-semibold ${pt.tone}`}>
                          {pt.label}
                        </p>
                        <p className="mt-0.5 text-[12px] leading-snug text-navy-600">
                          {pt.note}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between rounded-lg border border-tealbr-200 bg-tealbr-50 p-3.5 sm:col-span-2">
                    <div className="flex items-start gap-3">
                      <ArrowUpRight className="mt-0.5 h-4.5 w-4.5 shrink-0 text-tealbr-700" />
                      <p className="text-[12.5px] leading-snug text-tealbr-700">
                        <strong>
                          {t(
                            "…plus leadership, culture, incentive, capability, and systemic problems.",
                            "…إضافةً إلى مشكلات القيادة والثقافة والحوافز والقدرات والنظام."
                          )}
                        </strong>{" "}
                        {t(
                          "Never jump to discipline, replacement, or termination before the organizational causes are examined and excluded.",
                          "لا تقفز أبدًا إلى الانضباط أو الاستبدال أو الإنهاء قبل فحص الأسباب التنظيمية واستبعادها."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-5">
              <div className="rounded-2xl border border-amberbr-100 bg-amberbr-50 p-6">
                <p className="eyebrow text-amberbr-700">{t("Reframe in practice", "إعادة التأطير عمليًا")}</p>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-serif text-[15px] italic text-navy-800">
                      {t("“Employees are lazy.”", "«الموظفون كسالى.»")}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                      {t(
                        "triggers investigation of workload, incentive caps, role clarity, management, skills, resources, goals, measurement, job design, culture, compensation, and leadership — before anyone is disciplined.",
                        "يستدعي تحقيقًا في حجم العمل، وحدود الحوافز، ووضوح الدور، والإدارة، والمهارات، والموارد، والأهداف، والقياس، وتصميم العمل، والثقافة، والتعويضات، والقيادة — قبل أن يُؤدَّب أحد."
                      )}
                    </p>
                  </div>
                  <div className="h-px bg-amberbr-100" />
                  <div>
                    <p className="font-serif text-[15px] italic text-navy-800">
                      {t("“Employees are not loyal.”", "«الموظفون غير مخلصين.»")}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                      {t(
                        "triggers investigation of career opportunity, pay position, manager quality, employee experience, recognition, culture, and the external labor market — the decision is usually more rational than the framing.",
                        "يستدعي تحقيقًا في فرص المسار المهني، وموقع الأجر، وجودة المدير، وتجربة الموظف، والتقدير، والثقافة، وسوق العمل الخارجي — فالقرار عادةً أكثر عقلانية من التأطير نفسه."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
