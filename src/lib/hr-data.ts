import type { LucideIcon } from "lucide-react";
import {
  Users,
  UserSearch,
  Compass,
  Target,
  GraduationCap,
  BadgeDollarSign,
  HeartHandshake,
  Network,
  Landmark,
  Building2,
  BarChart3,
  ClipboardList,
  FileSearch,
  Workflow,
  TrendingDown,
  Scale,
  MessageSquareWarning,
  Lightbulb,
  ShieldAlert,
  BookOpen,
  Layers,
  Bot,
  BriefcaseBusiness,
  Gauge,
  CalendarClock,
  AlertTriangle,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   Navigation
   ══════════════════════════════════════════════════════════════ */

export const navItems = [
  { label: "Method", href: "#method" },
  { label: "Diagnose", href: "#diagnose" },
  { label: "Domains", href: "#domains" },
  { label: "Library", href: "#library" },
  { label: "Tools", href: "#tools" },
  { label: "Cases", href: "#cases" },
  { label: "Faculty", href: "#faculty" },
];

/* ══════════════════════════════════════════════════════════════
   Diagnosis categories & sample problems
   ══════════════════════════════════════════════════════════════ */

export const diagnosisCategories: { label: string; hint: string }[] = [
  { label: "Recruitment", hint: "hiring, sourcing, selection" },
  { label: "Turnover", hint: "attrition, exits, retention" },
  { label: "Performance", hint: "results, reviews, underperformance" },
  { label: "Compensation", hint: "pay, bands, incentives" },
  { label: "Engagement", hint: "motivation, effort, satisfaction" },
  { label: "Leadership", hint: "managers, decision-making, coaching" },
  { label: "Conflict", hint: "disputes, friction, departments" },
  { label: "Culture", hint: "norms, values, behavior patterns" },
  { label: "Training", hint: "skills, development, capability" },
  { label: "Productivity", hint: "output, efficiency, workload" },
  { label: "Organization Design", hint: "structure, roles, reporting" },
  { label: "Workforce Planning", hint: "headcount, capacity, future skills" },
];

export const sampleProblems: string[] = [
  "Our employees keep leaving.",
  "We cannot find qualified employees.",
  "Employees are not motivated.",
  "Managers complain that employees are not productive.",
  "Employees complain about management.",
  "Performance evaluations are not working.",
  "We have conflict between departments.",
  "High performers are leaving.",
  "Employees do the minimum required.",
  "We hired people who looked excellent but performed poorly.",
  "New employees take too long to become productive.",
  "Our salary system feels unfair.",
  "Managers don't know how to manage people.",
  "The company has grown but our HR system has not.",
  "We want to introduce AI into HR.",
  "We need to restructure the organization.",
];

export const followUpSuggestions: string[] = [
  "What data should I gather first to test this diagnosis?",
  "What are the risks of your recommended intervention?",
  "Draft a 30-day action plan for the first phase.",
  "What alternative explanations did you rule out, and why?",
];

/* ══════════════════════════════════════════════════════════════
   The 15-step diagnostic method
   ══════════════════════════════════════════════════════════════ */

export interface MethodStep {
  n: number;
  title: string;
  detail: string;
}

export interface MethodPhase {
  phase: string;
  label: string;
  summary: string;
  steps: MethodStep[];
}

export const methodPhases: MethodPhase[] = [
  {
    phase: "I",
    label: "Diagnose",
    summary:
      "Establish what is actually happening before forming any opinion. Most HR problems are misdescribed at the moment they are reported — the presenting complaint is a symptom, not the condition.",
    steps: [
      {
        n: 1,
        title: "Understand the organization",
        detail:
          "Business model, strategy, structure, growth stage, labor market position, and how work actually flows — not how the org chart says it flows.",
      },
      {
        n: 2,
        title: "Understand the workforce",
        detail:
          "Who the people are: tenure, roles, critical segments, skill distribution, contract types, demographics, and where value is created.",
      },
      {
        n: 3,
        title: "Define the observed problem",
        detail:
          "Translate 'people are unhappy' into observable behavior: what is happening, where, to whom, since when, and how it is measured.",
      },
      {
        n: 4,
        title: "Separate symptoms from causes",
        detail:
          "Turnover is a symptom. So is low morale. The cause lives upstream — in leadership, incentives, job design, or the system of work.",
      },
      {
        n: 5,
        title: "Identify stakeholders",
        detail:
          "Who is affected, who influences the outcome, who holds decision rights, and who must implement any eventual change.",
      },
      {
        n: 6,
        title: "Gather evidence and data",
        detail:
          "Exit interviews, engagement signals, performance distributions, pay data, manager quality indicators — triangulated, never single-source.",
      },
      {
        n: 7,
        title: "Generate possible root causes",
        detail:
          "Deliberately generate multiple competing explanations across leadership, structure, incentives, capability, and culture.",
      },
    ],
  },
  {
    phase: "II",
    label: "Analyze",
    summary:
      "Test the competing explanations against evidence, name the systemic factors, then design interventions the organization can actually execute.",
    steps: [
      {
        n: 8,
        title: "Test competing explanations",
        detail:
          "Ask of each hypothesis: what evidence would confirm it, what would falsify it, and what does the data actually show?",
      },
      {
        n: 9,
        title: "Identify systemic factors",
        detail:
          "Look for the pattern behind individual cases: an incentive that punishes collaboration, a structure that creates role ambiguity.",
      },
      {
        n: 10,
        title: "Develop multiple interventions",
        detail:
          "Always more than one option — including doing nothing, and including interventions aimed at management rather than employees.",
      },
      {
        n: 11,
        title: "Compare interventions",
        detail:
          "Score each option on impact, cost, complexity, time, organizational risk, employee impact, and sustainability.",
      },
    ],
  },
  {
    phase: "III",
    label: "Act & Learn",
    summary:
      "Implementation is part of the diagnosis. Define what success looks like in numbers, monitor honestly, and adjust before the next quarter closes.",
    steps: [
      {
        n: 12,
        title: "Select an implementation approach",
        detail:
          "Choose based on the comparison — and on what the organization's leadership is genuinely willing to sustain.",
      },
      {
        n: 13,
        title: "Define KPIs",
        detail:
          "Measurable indicators agreed before launch: the metric, the baseline, the target, and the review cadence.",
      },
      {
        n: 14,
        title: "Monitor results",
        detail:
          "Track the KPIs and the leading indicators beneath them. Watch for unintended consequences, not just intended effects.",
      },
      {
        n: 15,
        title: "Adjust the intervention",
        detail:
          "A plan that cannot be revised is a guess. Feed what you learn back into the diagnosis and improve the next cycle.",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   Eleven HR domains
   ══════════════════════════════════════════════════════════════ */

export interface Domain {
  icon: LucideIcon;
  title: string;
  summary: string;
  topics: string[];
}

export const domains: Domain[] = [
  {
    icon: CalendarClock,
    title: "Workforce Planning",
    summary:
      "Translating business strategy into the people capacity it requires — headcount, skills, and succession, forecast rather than improvised.",
    topics: [
      "Workforce requirements",
      "Headcount planning",
      "Skills forecasting",
      "Workforce capacity",
      "Succession planning",
      "Organizational restructuring",
      "Future skills",
    ],
  },
  {
    icon: UserSearch,
    title: "Recruitment & Selection",
    summary:
      "Defining what the role actually demands, then designing a selection process that predicts performance instead of rewarding interview polish.",
    topics: [
      "Job analysis",
      "Competency profiles",
      "Recruitment strategy",
      "Candidate sourcing",
      "Structured interviews",
      "Selection methods",
      "Quality of hire",
    ],
  },
  {
    icon: Compass,
    title: "Onboarding",
    summary:
      "The first ninety days decide the first two years. Role clarity, early wins, and cultural integration are designed, not left to chance.",
    topics: [
      "New employee onboarding",
      "Role clarity",
      "Probation periods",
      "Early performance",
      "Cultural integration",
      "Employee experience",
    ],
  },
  {
    icon: Target,
    title: "Performance Management",
    summary:
      "Systems that set expectations, generate honest feedback, and distinguish capability problems from clarity and incentive problems.",
    topics: [
      "Performance systems",
      "KPIs & OKRs",
      "Performance reviews",
      "Goal setting",
      "Feedback culture",
      "Improvement plans",
      "Underperformance diagnosis",
    ],
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    summary:
      "Closing the gap between the skills the strategy needs and the skills the organization has — with measurable transfer to the job.",
    topics: [
      "Skills-gap analysis",
      "Training needs analysis",
      "Leadership development",
      "Career development",
      "Upskilling & reskilling",
      "Learning effectiveness",
    ],
  },
  {
    icon: BadgeDollarSign,
    title: "Compensation & Rewards",
    summary:
      "Pay structures that are internally equitable, externally defensible, and behaviorally intelligent — total rewards, not just salary.",
    topics: [
      "Salary structures",
      "Pay bands",
      "Incentive systems",
      "Bonus & commission design",
      "Benefits",
      "Internal equity",
      "External competitiveness",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Engagement & Retention",
    summary:
      "Understanding why people stay, why they leave, and which of those reasons the organization can actually act on.",
    topics: [
      "Employee engagement",
      "Turnover & retention",
      "Motivation",
      "Recognition",
      "Career progression",
      "Workplace satisfaction",
    ],
  },
  {
    icon: Network,
    title: "Organizational Behavior",
    summary:
      "Team dynamics, trust, power, and psychological safety — the invisible physics that determines whether good policy becomes good practice.",
    topics: [
      "Team dynamics",
      "Conflict & communication",
      "Trust",
      "Psychological safety",
      "Power and influence",
      "Collaboration",
    ],
  },
  {
    icon: Landmark,
    title: "Leadership & Management",
    summary:
      "People rarely leave companies; they leave managers. We treat manager capability as infrastructure, not personality.",
    topics: [
      "Manager effectiveness",
      "Leadership development",
      "Delegation",
      "Decision-making",
      "Accountability",
      "Coaching & feedback",
    ],
  },
  {
    icon: Building2,
    title: "Organizational Development",
    summary:
      "Structure, process, and culture as one system — redesigned together when growth, mergers, or strategy demand it.",
    topics: [
      "Organizational structure & design",
      "Change management",
      "Culture transformation",
      "Process redesign",
      "Mergers & restructuring",
      "Organizational effectiveness",
    ],
  },
  {
    icon: BarChart3,
    title: "HR Analytics",
    summary:
      "Data used to support decisions, not decorate reports. Turnover, hiring funnels, productivity, and retention risk, made interpretable.",
    topics: [
      "Turnover analytics",
      "Absenteeism",
      "Recruitment performance",
      "Time-to-hire & cost-per-hire",
      "Productivity analysis",
      "Retention risk",
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   Knowledge library
   ══════════════════════════════════════════════════════════════ */

export interface LibraryEntry {
  title: string;
  summary: string;
  frameworks: string[];
}

export interface LibraryCategory {
  id: string;
  label: string;
  entries: LibraryEntry[];
}

export const libraryCategories: LibraryCategory[] = [
  {
    id: "recruitment",
    label: "Recruitment",
    entries: [
      {
        title: "Structured interviews beat unstructured ones",
        summary:
          "A century of selection research is unusually consistent: structured interviews — same questions, anchored scoring rubrics, job-related content — predict future performance substantially better than free-flowing conversations, which mostly measure conversational charm. The practical implication is uncomfortable for interviewers who trust their gut: standardization feels colder but decides better.",
        frameworks: ["Structured interviewing", "Validity / predictive power", "Halo effect"],
      },
      {
        title: "The job description is a prediction, not a wish list",
        summary:
          "Most job descriptions are inventory lists of virtues. A rigorous job analysis starts from what the role must accomplish in 12 months, decomposes that into critical work behaviors, and only then derives the competencies and experience that predict those behaviors. Hiring against a wish list selects for people who are good at describing themselves.",
        frameworks: ["Job analysis (O*NET method)", "Competency modeling", "Person–job fit"],
      },
      {
        title: "Quality of hire is a measurable number",
        summary:
          "Time-to-fill measures recruiter speed, not hiring quality. Quality of hire combines first-year performance distribution, regretted attrition within the first 18 months, and hiring-manager satisfaction — tracked back to sourcing channel and selection method. Organizations that measure it discover which parts of their funnel are theater.",
        frameworks: ["Quality of hire metrics", "Recruitment funnel analysis", "First-year attrition"],
      },
      {
        title: "Sourcing strategy is a labor-market question",
        summary:
          "Where candidates come from should follow from where talent actually sits: active job-seekers, passive lookers, and the entirely inert majority. Sourcing that ignores the passive market competes for the 20% who are already looking — and wonders why the pipeline looks like everyone else's pipeline.",
        frameworks: ["Labor market segmentation", "Passive candidate strategy", "Employer brand equity"],
      },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    entries: [
      {
        title: "Annual reviews measure the reviewer",
        summary:
          "Multi-source assessment research shows a large share of performance rating variance is explained by the rater, not the ratee — the 'idiosyncratic rater effect'. Ratings are judgements shaped by who gives them. Continuous, specific, behavior-anchored feedback narrows that gap; annual alone widens it.",
        frameworks: ["Idiosyncratic rater effect", "Behaviorally anchored rating scales (BARS)", "Feedback frequency"],
      },
      {
        title: "OKRs fail when they are really task lists",
        summary:
          "Objectives that describe activity ('launch the portal') rather than measurable outcome ('cut support response time 40%') reproduce the old system with new vocabulary. The discipline is fewer, more ambitious objectives with explicitly independent key results — and a stated tolerance for missing ambitious targets.",
        frameworks: ["OKR discipline", "Cascading vs. alignment", "Goal gradient"],
      },
      {
        title: "Underperformance is a differential diagnosis",
        summary:
          "Before 'performance problem' becomes a person problem, three alternatives must be excluded: clarity (do they know what good looks like?), capability (can they do it?), and conditions (does the system let them?). Manager-controlled factors cause a majority of sustained underperformance cases. Treating a system problem with a disciplinary tool is both unfair and ineffective.",
        frameworks: ["Clarity–capability–conditions model", "PIP design principles", "Situational constraints"],
      },
      {
        title: "Rating distributions hide management problems",
        summary:
          "When every employee 'exceeds expectations', the system is not generous — it is unused. Forced distributions are a blunt remedy; the diagnostic remedy is calibration: managers defend ratings with evidence, in front of peers, and the distribution argument surfaces naturally.",
        frameworks: ["Calibration sessions", "Rating inflation", "Distribution analysis"],
      },
    ],
  },
  {
    id: "compensation",
    label: "Compensation",
    entries: [
      {
        title: "Internal equity explains more anger than market rates",
        summary:
          "People tolerate being paid below market far better than being paid below an internal peer they judge less valuable — the reference group is colleagues, not the labor market. Pay transparency inside bands, defensible band placement logic, and honest correction of discovered inequities matter more than another market survey.",
        frameworks: ["Equity theory (Adams)", "Reference group dynamics", "Pay transparency"],
      },
      {
        title: "Incentive systems teach the behavior they pay for",
        summary:
          "Commission structures that reward individual volume destroy collaboration; metrics that reward tickets closed punish the difficult case. Every incentive design question is really a job-design question: what exactly are we asking this role to trade off? If you cannot state the trade-off, the incentive will decide it for you.",
        frameworks: ["Cobra effect / perverse incentives", "Line-of-sight metrics", "Individual vs. team mix"],
      },
      {
        title: "Pay bands are architecture, not arithmetic",
        summary:
          "A band structure encodes organizational philosophy: how big a promotion needs to be before it changes band, how much differentiation is tolerated within the same job, and how overlap communicates that a senior specialist can out-earn a junior manager. Band design decisions are visible to everyone the moment someone asks 'why is she paid more than me?'",
        frameworks: ["Broadbanding", "Dual career ladders", "Compa-ratio management"],
      },
      {
        title: "Raises retain less than systems believe",
        summary:
          "Counter-offers made on resignation typically postpone departure rather than prevent it — the decision was about a different variable. Compensation sets a floor of fairness; career, manager quality, and meaningful work set the ceiling of retention. Pay the market honestly, then fix the ceiling.",
        frameworks: ["Retention drivers hierarchy", "Counter-offer evidence", "Total rewards"],
      },
    ],
  },
  {
    id: "talent",
    label: "Talent",
    entries: [
      {
        title: "The 9-box is a conversation, not a filing system",
        summary:
          "Talent grids mislead when used as annual paperwork: performance axes get inflated, potential becomes 'who the director likes'. The value is forcing explicit conversations about succession depth for critical roles — which roles, if vacated tomorrow, would genuinely damage the business?",
        frameworks: ["Critical role mapping", "Talent review calibration", "Succession depth charts"],
      },
      {
        title: "Potential is context-dependent",
        summary:
          "'High potential' in a 200-person company means tolerance for ambiguity, range, and self-directed learning. In a 40,000-person enterprise it may mean political navigation of matrix structures. The label transfers poorly across contexts; the underlying question — what does THIS organization need next from its people — does not.",
        frameworks: ["Potential definitions critique", "Learning agility", "Context-dependent validity"],
      },
      {
        title: "Build versus buy is a strategy question",
        summary:
          "External hiring imports skills immediately but at high failure risk in senior roles — external senior hires fail at roughly double the rate of internal promotions in many studies. Internal development is slower but compounds: it signals that capability is earnable, which changes who joins and who stays.",
        frameworks: ["Make-vs-buy analysis", "Internal mobility", "Failure rates of external hires"],
      },
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    entries: [
      {
        title: "Manager span of control is a design decision",
        summary:
          "Below roughly five direct reports, managers over-supervise and employees feel surveillance; above roughly ten, coaching disappears and feedback quality collapses. Structure the span to the role's coaching load, not to the org chart's aesthetics. A manager with fourteen reports is not a leader — they are a router.",
        frameworks: ["Span of control", "Coaching load", "Manager-as-router failure"],
      },
      {
        title: "The first-line manager is the highest-leverage HR role",
        summary:
          "Engagement research consistently attributes a dominant share of variance in team engagement to the direct manager — yet first-line managers are typically the least-trained, least-supported, most recently-promoted layer in the organization. Promoting the best individual contributor without training is how organizations manufacture bad managers at scale.",
        frameworks: ["Manager impact on engagement", "Promotion-on-performance fallacy", "First-90-days for new managers"],
      },
      {
        title: "Delegation failure is usually trust design failure",
        summary:
          "When managers hoard decisions, the cause is rarely character — it is a system where the manager is punished for subordinates' errors but not rewarded for their growth. Change the consequence structure and watch delegation change; lecture about empowerment and watch nothing change.",
        frameworks: ["Consequence design", "Delegation levels (Tannenbaum continuum)", "Accountability asymmetry"],
      },
      {
        title: "Psychological safety is a measurable team property",
        summary:
          "Teams where members can raise problems, admit errors, and challenge the plan without fear outperform teams of higher individual skill — the finding behind Google's Project Aristotle is older and broader than Google. It is built through leader responses to bad news: the first reaction to a reported mistake teaches the whole team what is safe.",
        frameworks: ["Project Aristotle", "Edmondson's psychological safety", "Leader response modeling"],
      },
    ],
  },
  {
    id: "ob",
    label: "Organizational Behavior",
    entries: [
      {
        title: "Conflict between departments is usually structure, not personality",
        summary:
          "Two departments in chronic conflict are typically being paid, measured, or structured for opposing goals — sales paid on promises operations must keep, or shared goals nobody owns. Interpersonal mediation without fixing the goal conflict produces a calm organization that still fails at the handoff.",
        frameworks: ["Goal conflict diagnosis", "Handoff analysis", "Contact hypothesis limits"],
      },
      {
        title: "Motivation follows the work design",
        summary:
          "Decades of research on self-determination theory and job characteristics converge: autonomy, mastery, and purpose — experienced daily — drive intrinsic motivation far more than exogenous enthusiasm campaigns. If the work is fragmented, monitored, and meaningless, no communication plan fixes motivation; the work must change.",
        frameworks: ["Self-determination theory", "Job characteristics model (Hackman & Oldham)", "Effort-recovery balance"],
      },
      {
        title: "Trust is built in the boring moments",
        summary:
          "Organizational trust is not created at the offsite; it is created when commitments are kept invisibly — the promised follow-up that arrives, the difficult decision explained honestly. Trust audits measure promise-keeping rates and explanation quality, not sentiment.",
        frameworks: ["Trust equation", "Behavioral integrity", "Procedural vs. distributive justice"],
      },
    ],
  },
  {
    id: "learning",
    label: "Learning",
    entries: [
      {
        title: "Most training transfers nothing to the job",
        summary:
          "Meta-analyses of training effectiveness show that without manager reinforcement and on-the-job application, a large share of course content decays within weeks — the organization paid once for the course and twice for the illusion. Transfer requires pre-course goal-setting with the manager and post-course application assignments.",
        frameworks: ["Training transfer research", "70-20-10 (and its critique)", "Manager reinforcement"],
      },
      {
        title: "Skills-gap analysis starts from strategy, not courses",
        summary:
          "The question is not 'what training do people want' but 'what will the strategy require 18 months from now that current capability cannot deliver'. Working backward from strategic capability to role-level skill gaps produces a defensible learning agenda; working forward from available courses produces a calendar.",
        frameworks: ["Capability mapping", "Strategic skills decomposition", "Build/buy/borrow"],
      },
      {
        title: "Reskilling is cheaper than you think, and slower too",
        summary:
          "Internal reskilling programs consistently cost less than replacement hiring at market rates for mid-skill roles — but they fail when run as classroom exercises. The successful pattern is apprenticeship-shaped: paid learning time, real work products, and a named role at the end.",
        frameworks: ["Reskilling economics", "Apprenticeship models", "Learning retention curves"],
      },
    ],
  },
  {
    id: "culture",
    label: "Culture",
    entries: [
      {
        title: "Culture is what is rewarded and tolerated",
        summary:
          "Culture is not the values poster; it is the promotion criteria, the behaviors leadership forgives, and the systems that decide who thrives. Culture change therefore means changing consequences — which is why culture work is indistinguishable from management-system work, and why posters change nothing.",
        frameworks: ["Consequence-based culture models", "Schein's three levels", "Rituals & promotion signals"],
      },
      {
        title: "Measure behavior patterns, not sentiment scores",
        summary:
          "'Culture surveys' often measure mood. Behavior patterns — meeting conduct, speed of honest escalation, who gets promoted — measure the operating system. A culture audit triangulates: what people say, what systems reward, and what newcomers learn in their first month.",
        frameworks: ["Culture audits", "Newcomer socialization", "Espoused vs. enacted values"],
      },
      {
        title: "Culture change is a two-year project, minimum",
        summary:
          "Organizations that 'rebrand' culture quarterly teach cynicism. Credible change programs are few, specific, and visibly kept — one behavior changed at the top, measured, sustained. Employees believe the change is real the third time they see it survive an inconvenient situation.",
        frameworks: ["Culture change sequencing", "Signaling theory", "Commitment credibility"],
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    entries: [
      {
        title: "Turnover has a numerator problem",
        summary:
          "Aggregate turnover rates mislead: 15% turnover where all departures are low performers is a healthy system; 15% concentrated in your engineering top decile is an emergency. Segmentation — by performance, criticality, tenure band, and manager — converts an HR statistic into a business signal.",
        frameworks: ["Regretted vs. unregretted attrition", "Cohort analysis", "Turnover cost models"],
      },
      {
        title: "Correlation is not an HR strategy",
        summary:
          "Engagement scores correlate with profitability in cross-sectional studies — and causation runs in both directions plus a third variable (good management). Analytics maturity means moving from describing correlation to testing interventions: change something, measure the outcome, keep or discard.",
        frameworks: ["Causality in HR data", "A/B thinking for HR", "Analytics maturity model"],
      },
      {
        title: "The best HR metric is a leading one",
        summary:
          "Turnover is a trailing indicator — the people already left. Leading indicators: internal mobility rates, manager 1:1 cadence, first-year engagement of new hires, and time-to-first-contribution. Dashboards of trailing indicators are history books; the decision value lives in the leading set.",
        frameworks: ["Leading vs. lagging indicators", "Early-warning design", "HR KPI trees"],
      },
    ],
  },
  {
    id: "er",
    label: "Employment Relations",
    entries: [
      {
        title: "Grievances are data, not noise",
        summary:
          "A functioning grievance channel is an organizational nervous system: patterns in complaints reveal broken managers and broken processes before they become legal exposure. Organizations that suppress the channel lose the signal and keep the risk.",
        frameworks: ["Grievance pattern analysis", "Exit-voice theory (Hirschman)", "Speak-up systems"],
      },
      {
        title: "Termination decisions compound in the survivors",
        summary:
          "Every departure is observed by those who remain: was it fair, explained, and consistent with stated values? Layoffs and dismissals handled procedurally and honestly are absorbed; opaque ones damage discretionary effort for quarters. The audience for every termination is the workforce that stays.",
        frameworks: ["Procedural justice", "Survivor syndrome", "Organizational justice theory"],
      },
      {
        title: "Employment law varies by jurisdiction — verify locally",
        summary:
          "General HR knowledge is not legal advice. Probation rules, notice periods, at-will employment, works councils, and data-protection regimes differ sharply across countries and even within federal systems. Any recommendation touching discipline, termination, or monitoring must be verified against the applicable jurisdiction before action.",
        frameworks: ["Jurisdiction verification principle", "ADR frameworks", "Works council contexts"],
      },
    ],
  },
  {
    id: "hrtech",
    label: "HR Technology",
    entries: [
      {
        title: "The tooling question is a process question",
        summary:
          "Automating a broken process produces faster brokenness. HR technology selection should start from a documented, working process — only then decide what to systematize. Vendors demo well because they demo processes that already work.",
        frameworks: ["Process-first tooling", "Digital transformation sequencing", "Configuration vs. customization"],
      },
      {
        title: "AI in recruitment: narrow the automation, widen the judgment",
        summary:
          "Machine assistance adds value in high-volume screening consistency and scheduling logistics. It adds risk where it silently encodes historical bias into selection — well-documented in landmark cases. The defensible pattern: automate the administrative layer, keep human judgement on the decision layer, and audit adverse impact continuously.",
        frameworks: ["Algorithmic bias / adverse impact", "EU AI Act risk classes", "Human-in-the-loop design"],
      },
      {
        title: "Every monitoring tool trades trust for visibility",
        summary:
          "Productivity surveillance generates measurable activity and unmeasurable disengagement: people optimize what is measured, and the monitoring itself signals distrust. Decide explicitly what visibility is worth — and prefer outcome measures over activity measures wherever the work allows.",
        frameworks: ["Surveillance effects research", "Measurement dysfunction (Goodhart)", "Privacy-by-design"],
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   Diagnostic tools
   ══════════════════════════════════════════════════════════════ */

export interface DiagnosticTool {
  icon: LucideIcon;
  name: string;
  purpose: string;
  inputs: string[];
  outputs: string;
  interactive?: boolean;
}

export const diagnosticTools: DiagnosticTool[] = [
  {
    icon: TrendingDown,
    name: "Turnover Analysis",
    purpose:
      "Decompose attrition by regret, performance, tenure, and manager — and price it in currency.",
    inputs: ["Exit records", "Performance data", "Salary data"],
    outputs: "Regretted-attrition rate, turnover cost estimate, hotspot map",
    interactive: true,
  },
  {
    icon: CalendarClock,
    name: "Workforce Planning Model",
    purpose:
      "Translate the operating plan into required headcount and skills by quarter, with supply scenarios.",
    inputs: ["Business plan", "Capacity baselines", "Attrition forecast"],
    outputs: "Headcount gap by role and quarter, build/buy/borrow mix",
  },
  {
    icon: FileSearch,
    name: "Skills-Gap Analysis",
    purpose: "Compare current capability inventory against strategic skill requirements.",
    inputs: ["Strategy capability map", "Skills inventory"],
    outputs: "Priority gaps, reskilling candidates, hiring shortlist",
  },
  {
    icon: ClipboardList,
    name: "Job Analysis",
    purpose: "Establish what a role actually must accomplish, independent of who holds it.",
    inputs: ["Incumbent interviews", "Manager interviews", "Work outputs"],
    outputs: "Rewritten role charter, competency profile, success measures",
  },
  {
    icon: Layers,
    name: "Competency Mapping",
    purpose: "Map required competencies across roles to expose redundancy and single points of failure.",
    inputs: ["Job analysis outputs", "Org structure"],
    outputs: "Competency matrix, critical-role dependencies",
  },
  {
    icon: Target,
    name: "Performance Analysis",
    purpose: "Diagnose whether the performance system measures, motivates, and differentiates.",
    inputs: ["Rating distributions", "Goal quality sample", "Review completion data"],
    outputs: "System diagnosis, calibration plan, rating pattern findings",
  },
  {
    icon: Scale,
    name: "Compensation Analysis",
    purpose: "Test internal equity and external competitiveness before the next pay conversation.",
    inputs: ["Salary register", "Market benchmarks", "Performance data"],
    outputs: "Equity exceptions, compa-ratio distribution, band architecture review",
  },
  {
    icon: MessageSquareWarning,
    name: "Engagement Analysis",
    purpose: "Move beyond the survey score to driver and segment analysis with manager-level cuts.",
    inputs: ["Survey results", "Turnover data", "Focus groups"],
    outputs: "Driver model by segment, manager-level heat map, action priorities",
  },
  {
    icon: Workflow,
    name: "Recruitment Funnel Analysis",
    purpose: "Locate where the pipeline leaks quality — sourcing, screening, or offer stage.",
    inputs: ["ATS funnel data", "Offer/accept records", "First-year performance"],
    outputs: "Stage conversion rates, channel quality-of-hire, cycle-time breakdown",
  },
  {
    icon: GraduationCap,
    name: "Training Needs Analysis",
    purpose: "Derive the learning agenda from strategic gaps rather than course preferences.",
    inputs: ["Skills-gap outputs", "Performance data", "Strategy horizon"],
    outputs: "Prioritized learning agenda, transfer plan, budget case",
  },
  {
    icon: Building2,
    name: "Structure Analysis",
    purpose: "Examine spans, layers, and handoffs for role ambiguity and decision latency.",
    inputs: ["Org chart", "Decision inventory", "Role charters"],
    outputs: "Span/layer report, handoff failure points, redesign options",
  },
  {
    icon: Gauge,
    name: "HR KPI Dashboard",
    purpose: "Consolidate leading and lagging people indicators into one decision view.",
    inputs: ["System data feeds", "Agreed KPI definitions"],
    outputs: "Live dashboard with targets, trends, and owner per metric",
  },
];

/* ══════════════════════════════════════════════════════════════
   Case studies
   ══════════════════════════════════════════════════════════════ */

export interface CaseStage {
  label: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  sector: string;
  context: string;
  stages: CaseStage[];
  metrics: { label: string; before: string; after: string }[];
  lessons: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    image: "/images/case-1.jpg",
    imageAlt: "A team of professionals working together around laptops in a growing company office",
    kicker: "Retention · Scale-up",
    title: "The vanishing high performers",
    sector: "220-person B2B SaaS, post-Series B",
    context:
      "Over ten months, the company lost four senior engineers and two of its top salespeople — all voluntary, all to competitors at similar pay. Leadership's first explanation was 'they got better offers.' The diagnosis found something structural.",
    stages: [
      {
        label: "Problem",
        body: "Regretted attrition in the top performance decile reached 24% annualized — roughly triple the company average — concentrated in two critical role families. Replacement hiring was slow (mean 4.5 months to fill), and every departure triggered a scramble of knowledge transfer that never quite captured what the person knew.",
      },
      {
        label: "Evidence",
        body: "Exit interviews showed a consistent pattern managers had dismissed as exit-interview diplomacy: no visible next role, vague promotion criteria, and pay below the 45th percentile of the local market for critical engineering and sales roles. Pay benchmarking confirmed the market position. Internal analysis showed promotion velocity had collapsed as the company added layers — the average time between promotions for engineers had stretched from 18 to 41 months in two years. An engagement survey cut by manager revealed engagement scores varying 30 points between teams with identical pay — isolating manager quality as a second, independent factor.",
      },
      {
        label: "Diagnosis",
        body: "This was not a retention problem; it was a career-architecture problem with a compensation component. The flat structure that served the company at 80 people offered no path at 220. High performers with options exercised those options. Blaming 'poacher' competitors treated the symptom while the cause compounded.",
      },
      {
        label: "Root causes",
        body: "(1) No dual career track — senior individual contributors hit a ceiling that only management could break; (2) opaque promotion criteria, decided ad hoc at leadership meetings; (3) pay for critical roles positioned below the market band the company itself defined; (4) two teams with persistently low manager-quality signals feeding the pipeline of departures.",
      },
      {
        label: "Alternatives considered",
        body: "A counter-offer policy (rejected: postpones departure in most cases without fixing the cause); across-the-board raises (rejected: expensive, non-targeted, and not the primary driver); hiring freezes on externally-advertised senior roles (rejected: treats supply, not demand); the selected intervention — career architecture plus targeted pay correction plus manager coaching for the two signal-poor teams.",
      },
      {
        label: "Intervention",
        body: "Dual career tracks with published criteria for engineer levels; promotion calibration moved from private leadership judgment to documented, quarterly review; pay for 14 critical-role employees corrected to the 60th percentile over two cycles with a stated equity rationale; the two weakest managers entered a coaching program with explicit behavioral milestones rather than removal.",
      },
      {
        label: "KPIs & result",
        body: "Regretted attrition in the top decile fell from 24% to 11% over three quarters; internal promotion rate doubled; offer-acceptance rate rose from 71% to 86% as published career criteria became a recruiting asset. The pay correction cost 1.1% of payroll — less than the replacement cost of a single senior engineer.",
      },
      {
        label: "Lessons",
        body: "'Better offers' is what departure looks like from outside; the cause is usually an internal path that stopped existing. Manager-level cuts of engagement data found the second cause that pay alone would not have fixed. And the cheapest retention program on record was publishing the promotion criteria that already existed in someone's head.",
      },
    ],
    metrics: [
      { label: "Regretted attrition (top decile)", before: "24%", after: "11%" },
      { label: "Promotion velocity", before: "41 mo", after: "20 mo" },
      { label: "Offer acceptance", before: "71%", after: "86%" },
    ],
    lessons: [
      "Exit interviews are evidence only when read as a pattern, not as individual diplomacy",
      "Career architecture is retention infrastructure",
      "Pay corrections for critical roles pay for themselves in avoided replacement cost",
    ],
  },
  {
    id: "case-2",
    image: "/images/case-2.jpg",
    imageAlt: "Business professionals in a serious conversation in a bright office environment",
    kicker: "Productivity · Manufacturing & Logistics",
    title: "“Our floor staff are lazy”",
    sector: "600-person regional distribution operator",
    context:
      "The general manager's opening line: 'We have a productivity problem — the floor staff do the minimum and go home.' He wanted a discipline program. The evidence pointed somewhere else entirely.",
    stages: [
      {
        label: "Problem",
        body: "Output per labor hour had declined 9% over eighteen months. Error rates in order picking were up. Absenteeism ran at 11%. The GM's interpretation: workforce attitude problem, requiring stricter supervision and disciplinary enforcement.",
      },
      {
        label: "Evidence",
        body: "Pay analysis showed the incentive plan capped monthly bonuses at a level most staff reached by the third week — the fourth week had, economically, no upside for effort. A study of the picking process found the WMS (warehouse system) routed staff through an aisle sequence that double-handled 17% of orders, embedding a time penalty no amount of effort could remove. Supervisor span of control averaged 1:23, making individual coaching structurally impossible. Exit interviews, read as a corpus, contained no references to laziness complaints from peers — they described the cap ('why push for nothing?') and routing frustration. New equipment training had last occurred two years prior, before two major system changes.",
      },
      {
        label: "Diagnosis",
        body: "The 'laziness' was a rational response to a system that capped reward for extra effort and then penalized workers for process waste they could not control. This was an incentive-design and process problem wearing a workforce-attitude costume. The discipline program the GM wanted would have punished people for responding correctly to their economic and operational environment.",
      },
      {
        label: "Root causes",
        body: "(1) Incentive cap eliminating marginal reward for the final week's effort; (2) WMS routing algorithm embedding 17% double-handling; (3) supervisor spans (1:23) making feedback impossible; (4) training debt after two untrained system changes; (5) no error-cause taxonomy, so errors were attributed to people by default.",
      },
      {
        label: "Alternatives considered",
        body: "The GM's discipline program (rejected: punishes rational responses to a broken system, and predictably raises turnover); a new WMS (rejected for phase one: a 14-month implementation that would delay all other fixes); across-the-board wage increase (rejected: raises cost without changing the effort-reward link); selected — incentive redesign, routing fix, span restructuring, and error-cause taxonomy.",
      },
      {
        label: "Intervention",
        body: "The bonus cap was replaced with a productivity curve that continued paying on marginal output, with a quality gate to prevent speed-at-any-cost. The routing algorithm was re-sequenced — a configuration change, not a new system, delivered in six weeks by the existing vendor. Supervisor spans restructured to 1:14 through a layer redesign; supervisors received a two-day coaching cadence course. An error-cause taxonomy separated system-caused from human-caused errors, and only the latter entered performance conversations.",
      },
      {
        label: "KPIs & result",
        body: "Output per labor hour recovered the 9% decline within two quarters and exceeded the prior baseline by 4%. Absenteeism fell from 11% to 7.5%. Error rates fell 31% — three-quarters of the improvement attributable to routing and taxonomy changes, not personnel changes. The discipline program was never needed.",
      },
      {
        label: "Lessons",
        body: "When leadership describes a workforce as lazy, the professional response is curiosity about the system that makes minimum effort the rational choice. Incentive curves are read precisely by the people who live under them. And process waste attributed to workers is a measurement failure before it is a performance failure.",
      },
    ],
    metrics: [
      { label: "Output per labor hour", before: "−9%", after: "+4% vs. baseline" },
      { label: "Absenteeism", before: "11%", after: "7.5%" },
      { label: "Picking errors", before: "index 100", after: "69" },
    ],
    lessons: [
      "'Lazy' is a hypothesis, never a diagnosis",
      "Incentive caps are read exactly as economics predicts",
      "Attribute errors to causes, not to people, before designing any response",
    ],
  },
  {
    id: "case-3",
    image: "/images/case-3.jpg",
    imageAlt: "A professional delivering a training session in front of a screen to a group of colleagues",
    kicker: "Onboarding · Professional Services",
    title: "Nine months to productivity",
    sector: "450-person consulting and advisory firm",
    context:
      "New consultants were taking an average of nine months to reach billable-productivity benchmarks, and nearly a third left within their first year. Partners blamed 'weak hiring.' The data told a different story.",
    stages: [
      {
        label: "Problem",
        body: "Time-to-productivity for new consultants averaged 9.1 months against an internal benchmark of 6. First-year attrition ran at 31%, roughly double the firm's overall rate. Partners attributed both to declining candidate quality and pushed for a more selective hiring bar — which would have raised acquisition cost during a growth mandate.",
      },
      {
        label: "Evidence",
        body: "Cohort analysis showed something the 'weak hiring' theory could not explain: time-to-productivity varied by a factor of two across offices with identical hiring pools — 6.2 months in the two offices with documented onboarding, 11.4 in offices without. A survey of 40 recent hires found 68% could not state their first-90-day expectations with any specificity, and 72% had never had a scheduled check-in with their manager beyond week one. Assignment logs showed new consultants waited an average of 5 weeks for a first billable assignment — idle time attributed to them as 'slow ramp'. Exit interviews of first-year leavers cited role ambiguity and idle time, not the firm or the work.",
      },
      {
        label: "Diagnosis",
        body: "The firm did not have a hiring-quality problem; it had an onboarding vacuum. Productivity lag was substantially manufactured by the firm itself: unclear expectations, no structured early assignments, and manager attention that ended after week one. The offices that happened to have documented onboarding were already proving the counterfactual.",
      },
      {
        label: "Root causes",
        body: "(1) No structured onboarding program — each partner improvised; (2) undocumented first-90-day expectations, leaving new hires to infer them; (3) assignment bottleneck in week 1–8, producing idle time billed to the employee as slow ramp-up; (4) no buddy or peer integration mechanism in the first months; (5) probation feedback happening only at the six-month review — far too late to correct trajectory.",
      },
      {
        label: "Alternatives considered",
        body: "Raising the hiring bar (rejected: the data showed no quality variance between fast and slow offices); a pre-boarding e-learning platform (deferred: useful layer, but the binding constraint was manager behavior and assignment flow, not content delivery); an extended probation (rejected: adds ambiguity, not clarity); selected — a structured 90-day onboarding architecture.",
      },
      {
        label: "Intervention",
        body: "A standard 90-day onboarding design: documented expectations for days 1–30 / 31–60 / 61–90 with named deliverables; every new hire assigned a first billable engagement by day 10, guaranteed by a staffing rule agreed with partners; weekly 30-minute manager check-ins in the first quarter with a two-question format; a buddy pairing with a second-year consultant; and a day-45 trajectory review replacing the silent drift toward the six-month conversation.",
      },
      {
        label: "KPIs & result",
        body: "Time-to-productivity fell from 9.1 to 5.4 months within three quarters — beating the 6-month benchmark. First-year attrition declined from 31% to 19%. The staffing rule eliminated first-assignment idle time (5 weeks to 4 days average). Partner concerns about 'hand-holding' receded when the revenue-per-hire curve arrived two months early, cohort after cohort.",
      },
      {
        label: "Lessons",
        body: "When slow ramp-up is blamed on hiring, check whether the organization itself is manufacturing the lag — idle time, ambiguity, and absent management all bill themselves as 'talent quality'. The offices already running structured onboarding were the natural experiment: the fix existed internally before it was purchased externally.",
      },
    ],
    metrics: [
      { label: "Time to productivity", before: "9.1 mo", after: "5.4 mo" },
      { label: "First-year attrition", before: "31%", after: "19%" },
      { label: "First-assignment wait", before: "5.0 wk", after: "4 days" },
    ],
    lessons: [
      "Slow ramp-up is often manufactured by the organization, not imported by the hire",
      "Documented 90-day expectations are the highest-ROI onboarding artifact",
      "Internal variation is the cheapest experiment you will ever run",
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   Faculty profile
   ══════════════════════════════════════════════════════════════ */

export const faculty = {
  name: "Prof. Daniel M. Hartley",
  role: "Professor of Human Resource Management & Organizational Behavior",
  tagline:
    "Twenty years of academic research and fifteen years of line HR leadership — brought to the same problem at the same time.",
  background: [
    {
      label: "Academic",
      items: [
        "D.Phil. Organizational Behavior, University of Oxford",
        "Professor of HRM & Organizational Behavior — organizational psychology department chair",
        "Research focus: performance system validity, incentive design, managerial quality effects on retention",
      ],
    },
    {
      label: "Practitioner",
      items: [
        "Former Group HR Director, multinational technology & manufacturing group (28,000 employees, 19 countries)",
        "Led three post-merger integrations and one 4,000-role restructuring",
        "Built HR analytics functions from zero at two organizations",
      ],
    },
    {
      label: "Advisory",
      items: [
        "Consulting domains: retention economics, organization design, incentive redesign, HR function build-out",
        "Advisor to growth-stage and mid-market companies on people-system diagnostics",
        "Certified senior HR professional (SPHR-equivalent) and organizational psychology practitioner",
      ],
    },
    {
      label: "Publications & teaching",
      items: [
        "Peer-reviewed work on rating validity, turnover prediction, and structured selection",
        "Teaches evidence-based HR practice to executive MBA cohorts",
        "Case author on incentive design failures and organizational restructuring",
      ],
    },
  ],
  expertise: [
    "Performance system design & validity",
    "Retention economics",
    "Incentive & pay structure redesign",
    "Organization design & restructuring",
    "Manager capability as infrastructure",
    "HR analytics & decision support",
    "Change management",
    "Evidence-based HR practice",
  ],
  researchInterests: [
    "Why performance ratings measure raters more than performance",
    "The economics of internal labor markets",
    "Manager quality as a measurable retention variable",
    "Transfer failure in corporate learning",
  ],
};

/* ══════════════════════════════════════════════════════════════
   Action plan framework
   ══════════════════════════════════════════════════════════════ */

export interface ExampleAction {
  horizon: string;
  when: string;
  action: string;
  owner: string;
  reason: string;
  kpi: string;
}

export const exampleActions: ExampleAction[] = [
  {
    horizon: "NOW",
    when: "Days 0–30",
    action: "Publish promotion criteria for the two critical role families; freeze external senior hiring until published",
    owner: "CHRO + Head of Engineering",
    reason: "Opaque promotion logic is the leading exit driver in the evidence; publishing it is near-zero cost",
    kpi: "Criteria live; 100% of incumbents briefed",
  },
  {
    horizon: "NOW",
    when: "Days 0–30",
    action: "Stand up exit-interview pattern review (monthly, aggregated, manager-level cuts)",
    owner: "HR Director",
    reason: "Converts anecdotes into evidence for the next decision cycle",
    kpi: "Monthly review held; pattern report circulated",
  },
  {
    horizon: "NEXT",
    when: "Quarters 1–2",
    action: "Correct pay for 14 critical-role employees to the 60th percentile with an equity rationale",
    owner: "CHRO + Finance",
    reason: "Pay below the firm's own market band for roles with proven external demand",
    kpi: "Compa-ratio ≥ 0.95 for critical roles",
  },
  {
    horizon: "NEXT",
    when: "Quarters 1–2",
    action: "Manager coaching program for the two lowest-signal teams, with behavioral milestones",
    owner: "Head of Organizational Development",
    reason: "30-point engagement spread between teams at identical pay isolates manager quality",
    kpi: "Team engagement +15 pts; 1:1 cadence ≥ 90%",
  },
  {
    horizon: "LATER",
    when: "Quarters 3+",
    action: "Full dual career architecture with quarterly calibration council for promotions",
    owner: "CHRO + Executive Committee",
    reason: "Sustains the structural fix; prevents the ceiling from re-forming at the next growth stage",
    kpi: "Internal promotion rate ≥ 2× baseline; regretted attrition ≤ 12%",
  },
];

/* ══════════════════════════════════════════════════════════════
   Small business mode
   ══════════════════════════════════════════════════════════════ */

export const smallBusinessPrinciples = [
  {
    icon: ShieldAlert,
    title: "Diagnose before you buy",
    body: "A 30-person company does not have a performance-platform problem; it has a clarity problem. Determine what is actually broken before acquiring infrastructure to manage it.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Systems the owner can run",
    body: "In owner-dependent companies, any system that dies when the owner travels is not a system. Design for the weekly rhythm the owner actually keeps, not the one the software assumes.",
  },
  {
    icon: Lightbulb,
    title: "Simple beats sophisticated",
    body: "Documented expectations, weekly check-ins, five KPIs, and a feedback habit outperform enterprise frameworks that nobody maintains. Complexity is a cost small businesses pay twice.",
  },
];

export const sbComparison = {
  columns: ["Dimension", "Enterprise approach", "Small-business-first approach"],
  rows: [
    ["Performance management", "Calibrated rating cycles, 360° feedback, platform-enabled", "One page of written expectations, weekly 20-minute check-ins, twice-yearly written review"],
    ["Compensation", "Salary bands, job architecture, market survey participation", "Three or four honest pay levels with clear movement rules, reviewed annually against 3–5 local comparators"],
    ["Recruitment", "ATS, structured competency interviews, assessment centers", "A one-page role charter, five fixed questions, and a work-sample task — same discipline, no tooling"],
    ["Onboarding", "90-day program platform, buddy network, e-learning paths", "A written first-week plan, a named buddy, and a day-30 check-in the owner personally keeps"],
    ["Analytics", "Full HR KPI dashboard, retention-risk models", "One spreadsheet: who is critical, who is a flight risk, when each contract renews"],
  ],
};

/* ══════════════════════════════════════════════════════════════
   AI in HR — applications & evaluation discipline
   ══════════════════════════════════════════════════════════════ */

export const aiApplications: { icon: LucideIcon; name: string; use: string; humanKept: string }[] = [
  { icon: UserSearch, name: "Recruitment automation", use: "Scheduling, status updates, pipeline hygiene", humanKept: "Sourcing strategy and every final decision" },
  { icon: FileSearch, name: "CV screening assistance", use: "Consistent keyword & criteria triage at volume", humanKept: "Shortlist review and adverse-impact audit" },
  { icon: MessageSquareWarning, name: "Interview structuring", use: "Question banks, rubric prompts, note capture", humanKept: "Probing, judgment, and scoring" },
  { icon: Compass, name: "Onboarding guidance", use: "Checklists, policy answers, day-one logistics", humanKept: "Manager relationship and early feedback" },
  { icon: BookOpen, name: "HR knowledge assistant", use: "Policy search and plain-language answers", humanKept: "Interpretation and exceptions" },
  { icon: BarChart3, name: "Workforce analytics", use: "Segmentation, dashboards, anomaly flags", humanKept: "Causal interpretation and decisions" },
  { icon: TrendingDown, name: "Sentiment analysis", use: "Pattern detection across open text at scale", humanKept: "Context, privacy boundaries, follow-up" },
  { icon: GraduationCap, name: "Training personalization", use: "Content paths matched to measured gaps", humanKept: "Practice, coaching, and transfer support" },
  { icon: Target, name: "Performance insights", use: "Rating-pattern and calibration assistance", humanKept: "Every rating conversation, always" },
  { icon: CalendarClock, name: "Workforce planning", use: "Scenario modeling and demand drafts", humanKept: "Strategic trade-off decisions" },
  { icon: Gauge, name: "HR reporting", use: "Narrative drafts and standard report assembly", humanKept: "Definition quality and honest framing" },
  { icon: Bot, name: "Administrative automation", use: "Data entry, letters, renewals, filing", humanKept: "Exceptions and sensitive cases" },
];

export const aiEvaluationChecks = [
  "The HR problem it actually solves — stated before the tool is named",
  "What is automated, and what deliberately remains human",
  "Data requirements: quality, coverage, and lawful basis",
  "Risks: bias, adverse impact, gaming, over-reliance",
  "Privacy considerations and employee transparency",
  "Implementation complexity honestly priced, including change effort",
  "Expected benefit — measurable, with a review date",
];

export const aiNoFashion = {
  icon: AlertTriangle,
  quote:
    "Never recommend AI because it is fashionable. A tool that cannot name the problem it solves is a subscription, not a solution.",
};

/* ══════════════════════════════════════════════════════════════
   Legal & ethics
   ══════════════════════════════════════════════════════════════ */

export const legalAreas = [
  "Discrimination & equal opportunity",
  "Employee privacy & personal data",
  "Monitoring & surveillance limits",
  "Automated decision-making rules",
  "Compensation fairness & pay equity",
  "Termination procedure & notice",
  "Workplace investigations",
  "Documentation & record retention",
];

export const legalStatement =
  "Employment practices carry legal and ethical implications that vary by jurisdiction. Recommendations on this platform apply general HR knowledge, not legal advice. Where any action depends on the employment law of a specific country or context, verify the applicable legal framework with qualified local counsel before acting.";
