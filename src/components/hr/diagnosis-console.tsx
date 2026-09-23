"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { Markdown } from "./markdown";
import { useLang, useContent, isArabicText } from "@/lib/i18n";
import {
  Send,
  RotateCcw,
  Copy,
  Check,
  Loader2,
  MessageSquareText,
  ListChecks,
  FileText,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

export function DiagnosisConsole() {
  const { lang, t } = useLang();
  const { diagnosisCategories, sampleProblems, followUpSuggestions } = useContent();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const started = messages.length > 0;

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, category, lang }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.content) {
        throw new Error(
          data.error ||
            t(
              "The advisory engine could not be reached. Please try again.",
              "تعذّر الوصول إلى محرك الاستشارات. حاول مجددًا."
            )
        );
      }
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (err) {
      setMessages(next.slice(0, -1));
      setInput(content);
      toast({
        title: t("Diagnosis request failed", "فشل طلب التشخيص"),
        description:
          err instanceof Error
            ? err.message
            : t(
                "The advisory engine could not be reached. Please try again.",
                "تعذّر الوصول إلى محرك الاستشارات. حاول مجددًا."
              ),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setMessages([]);
    setInput("");
    setLoading(false);
  }

  async function copyMsg(i: number, content: string) {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(i);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  const howItWorks = [
    {
      icon: MessageSquareText,
      title: t("1 · Describe the situation", "1 · صِف الوضع"),
      body: t(
        "What you observe, in plain words. The initial description is treated as a symptom, never as the diagnosis.",
        "ما تلاحظه بكلماتك العادية. يُعامل الوصف الأولي كعرَض، لا كتشخيص، أبدًا."
      ),
    },
    {
      icon: ListChecks,
      title: t("2 · Answer the clarifying set", "2 · أجب عن مجموعة التوضيح"),
      body: t(
        "The professor returns an initial read with targeted questions and the data worth pulling — a consultation, not an interrogation.",
        "يعيد الأستاذ قراءة أولية مع أسئلة موجّهة والبيانات التي تستحق جمعها — استشارة، لا استجوابًا."
      ),
    },
    {
      icon: FileText,
      title: t("3 · Receive the full diagnosis", "3 · استلم التشخيص الكامل"),
      body: t(
        "Problem, evidence, ranked root causes, alternative explanations, compared interventions, implementation plan, KPIs, and risks.",
        "المشكلة، والأدلة، والأسباب الجذرية مرتبةً، والتفسيرات البديلة، والتدخلات مقارنةً، وخطة التنفيذ، ومؤشرات الأداء، والمخاطر."
      ),
    },
  ];

  return (
    <section id="diagnose" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="shell">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* ── Left: framing ────────────────────────────── */}
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              index="03"
              eyebrow={t("The diagnosis console", "وحدة التشخيص")}
              title={
                lang === "ar" ? (
                  <>
                    ما الذي يحدث في{" "}
                    <span className="font-serif font-medium text-tealbr-700">
                      منظمتك؟
                    </span>
                  </>
                ) : (
                  <>
                    What is happening in your{" "}
                    <span className="font-serif font-medium italic text-tealbr-700">
                      organization?
                    </span>
                  </>
                )
              }
              description={
                <p>
                  {t(
                    "Describe a workforce or organizational problem — the way you would describe it to a consultant. The professor responds with the diagnostic method: an initial read, clarifying questions, then a structured analysis you can argue with.",
                    "صِف مشكلة قوى عاملة أو تنظيمًا — بالطريقة التي تصف بها الأمر لمستشار. يرد الأستاذ بمنهجية التشخيص: قراءة أولية، وأسئلة توضيحية، ثم تحليل مهيكل يمكنك مجادلته."
                  )}
                </p>
              }
            />

            <div className="mt-8 space-y-3">
              {howItWorks.map((h) => (
                <div
                  key={h.title}
                  className="flex gap-3.5 rounded-xl border border-navy-100 bg-navy-50/50 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-navy-200">
                    <h.icon className="h-4 w-4 text-tealbr-700" />
                  </span>
                  <div>
                    <p className="font-display text-[13.5px] font-semibold text-navy-900">
                      {h.title}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-navy-600">
                      {h.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-sage-200 bg-sage-50 p-4">
              <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sage-600" />
              <p className="text-[12.5px] leading-relaxed text-sage-700">
                <strong>{t("Session privacy.", "خصوصية الجلسة.")}</strong>{" "}
                {t(
                  "The conversation lives in this browser session for the analysis only. Avoid entering identifiable personal data about individual employees — describe roles and patterns, not persons.",
                  "تعيش المحادثة في جلسة المتصفح هذه لأغراض التحليل فقط. تجنّب إدخال بيانات شخصية معرِّفة عن موظفين أفراد — صِف الأدوار والأنماط، لا الأشخاص."
                )}
              </p>
            </div>
          </div>

          {/* ── Right: the console ───────────────────────── */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-navy-200/90 bg-white shadow-[0_20px_60px_-24px_rgba(10,26,38,0.25)]">
              {/* Console header */}
              <div className="flex items-center gap-3.5 border-b border-navy-800 bg-navy-900 px-5 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 font-serif text-[15px] font-semibold text-tealbr-200 ring-1 ring-tealbr-200/30">
                  DH
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[14px] font-bold text-white">
                    {t("Prof. Daniel M. Hartley", "الأستاذ الدكتور دانيال م. هارتلي")}
                  </p>
                  <p className="flex items-center gap-1.5 text-[11.5px] text-navy-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tealbr-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-tealbr-400" />
                    </span>
                    {t(
                      "Advisory session — HR professor & practitioner",
                      "جلسة استشارية — أستاذ وممارس موارد بشرية"
                    )}
                  </p>
                </div>
                {started ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={reset}
                    disabled={loading}
                    className="h-8 gap-1.5 border border-navy-700 text-[12px] font-medium text-navy-200 hover:bg-navy-800 hover:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    {t("New session", "جلسة جديدة")}
                  </Button>
                ) : null}
              </div>

              {/* Body */}
              {!started ? (
                <div className="p-5 sm:p-6">
                  <label
                    htmlFor="problem-input"
                    className="font-display text-[15.5px] font-bold tracking-tight text-navy-950"
                  >
                    {t("What is happening in your organization?", "ما الذي يحدث في منظمتك؟")}
                  </label>
                  <p className="mt-1 text-[13px] text-navy-600">
                    {t(
                      "Plain language is fine. The first response will sharpen the definition.",
                      "اللغة العادية تكفي. أول ردّ سيشحذ التعريف."
                    )}
                  </p>

                  <div className="mt-4">
                    <p className="eyebrow mb-2 text-navy-500">{t("Category (optional)", "الفئة (اختياري)")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {diagnosisCategories.map((c) => (
                        <button
                          key={c.label}
                          type="button"
                          onClick={() =>
                            setCategory(category === c.label ? null : c.label)
                          }
                          title={c.hint}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors",
                            category === c.label
                              ? "border-tealbr-600 bg-tealbr-600 text-white"
                              : "border-navy-200 bg-white text-navy-700 hover:border-tealbr-400 hover:text-tealbr-700"
                          )}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    id="problem-input"
                    ref={inputRef}
                    dir="auto"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        void send(input);
                      }
                    }}
                    rows={4}
                    maxLength={4000}
                    placeholder={t(
                      "e.g. Our best people keep leaving and we can't explain it — exit interviews say 'better opportunity', managers say 'they were never engaged'…",
                      "مثال: أفضل أشخاصنا يغادرون باستمرار ولا نستطيع تفسير ذلك — مقابلات المغادرة تقول «فرصة أفضل»، والمديرون يقولون «لم يندمجوا يومًا»…"
                    )}
                    className="mt-4 w-full resize-none rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3.5 text-[14px] leading-relaxed text-navy-900 placeholder:text-navy-400 focus:border-tealbr-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tealbr-600/20"
                  />

                  <div className="mt-3">
                    <p className="eyebrow mb-2 text-navy-500">{t("Common presenting problems", "مشكلات معلَنة شائعة")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sampleProblems.slice(0, 8).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setInput(p);
                            inputRef.current?.focus();
                          }}
                          className="rounded-lg border border-dashed border-navy-300 bg-white px-2.5 py-1.5 text-[12px] text-navy-600 transition-colors hover:border-tealbr-500 hover:bg-tealbr-50/60 hover:text-tealbr-700"
                        >
                          {lang === "ar" ? `«${p}»` : `&ldquo;${p}&rdquo;`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-navy-100 pt-4">
                    <p className="hidden text-[11.5px] text-navy-400 sm:block">
                      {t("⌘/Ctrl + Enter to send", "⌘/Ctrl + Enter للإرسال")}
                    </p>
                    <Button
                      onClick={() => void send(input)}
                      disabled={!input.trim() || loading}
                      className="bg-navy-900 font-display text-[13.5px] font-semibold hover:bg-navy-800"
                    >
                      {t("Run diagnostic analysis", "شغّل التحليل التشخيصي")}
                      <Send className="ms-2 h-3.5 w-3.5 rtl:rotate-180" />
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    ref={scrollRef}
                    className="chat-scroll max-h-[600px] min-h-[320px] space-y-5 overflow-y-auto bg-navy-50/40 p-5"
                  >
                    {messages.map((m, i) =>
                      m.role === "user" ? (
                        <div key={i} className="flex justify-end" dir={isArabicText(m.content) ? "rtl" : "ltr"}>
                          <div className="max-w-[88%] rounded-xl rounded-ee-md border border-navy-800 bg-navy-900 px-4 py-3 text-[13.5px] leading-relaxed text-navy-50">
                            {m.content}
                          </div>
                        </div>
                      ) : (
                        <div key={i} className="flex gap-3" dir={isArabicText(m.content) ? "rtl" : "ltr"}>
                          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-serif text-[12px] font-semibold text-tealbr-700 ring-1 ring-navy-200">
                            DH
                          </span>
                          <div className="group relative min-w-0 max-w-[calc(100%-2.75rem)] flex-1">
                            <div className="rounded-xl rounded-ss-md border border-navy-200 bg-white px-4 py-3.5 shadow-sm">
                              <Markdown content={m.content} />
                            </div>
                            <button
                              type="button"
                              onClick={() => void copyMsg(i, m.content)}
                              className="absolute -bottom-2.5 end-2 hidden items-center gap-1 rounded-full border border-navy-200 bg-white px-2 py-0.5 text-[10.5px] font-medium text-navy-500 shadow-sm group-hover:flex"
                            >
                              {copied === i ? (
                                <>
                                  <Check className="h-3 w-3 text-sage-600" /> {t("copied", "نُسخ")}
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3" /> {t("copy", "نسخ")}
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )
                    )}

                    {loading ? (
                      <div className="flex gap-3">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-serif text-[12px] font-semibold text-tealbr-700 ring-1 ring-navy-200">
                          DH
                        </span>
                        <div className="flex items-center gap-2.5 rounded-xl border border-navy-200 bg-white px-4 py-3 shadow-sm">
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-tealbr-600" />
                          <span className="soft-pulse text-[13px] font-medium text-navy-600">
                            {t("The professor is examining the problem…", "الأستاذ يفحص المشكلة…")}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {!loading && messages[messages.length - 1]?.role === "assistant" ? (
                      <div className="ps-11" dir={lang === "ar" ? "rtl" : "ltr"}>
                        <p className="eyebrow mb-2 text-navy-500">{t("Continue the consultation", "أكمل الاستشارة")}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {followUpSuggestions.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => void send(s)}
                              className="rounded-lg border border-navy-200 bg-white px-2.5 py-1.5 text-start text-[12px] text-navy-600 transition-colors hover:border-tealbr-500 hover:bg-tealbr-50/60 hover:text-tealbr-700"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="border-t border-navy-100 bg-white p-4">
                    <div className="flex items-end gap-3">
                      <textarea
                        dir="auto"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                            e.preventDefault();
                            void send(input);
                          }
                        }}
                        rows={2}
                        maxLength={4000}
                        placeholder={t(
                          "Add context, answer the clarifying questions, or challenge the diagnosis…",
                          "أضف سياقًا، أو أجب عن الأسئلة التوضيحية، أو ناقش التشخيص…"
                        )}
                        className="min-h-[44px] w-full resize-none rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-[13.5px] leading-relaxed text-navy-900 placeholder:text-navy-400 focus:border-tealbr-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tealbr-600/20"
                      />
                      <Button
                        onClick={() => void send(input)}
                        disabled={!input.trim() || loading}
                        aria-label={t("Send message", "إرسال الرسالة")}
                        className="h-11 w-11 shrink-0 bg-tealbr-600 p-0 text-white hover:bg-tealbr-500"
                      >
                        <Send className="h-4 w-4 rtl:rotate-180" />
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {/* Console footer */}
              <div className="border-t border-navy-100 bg-navy-50/60 px-5 py-3">
                <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-navy-500">
                  <Quote className="mt-0.5 h-3 w-3 shrink-0" />
                  {t(
                    "Analysis applies general HR knowledge, not legal advice. Where a course of action depends on employment law in your jurisdiction, verify it with qualified counsel before acting.",
                    "يطبّق التحليل معرفة عامة بالموارد البشرية، لا استشارة قانونية. وحيثما يعتمد مسار العمل على قانون العمل في ولايتك القضائية، تحقق منه لدى مستشار قانوني مؤهل قبل التنفيذ."
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
