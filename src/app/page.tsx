import { Header } from "@/components/hr/header";
import { Hero } from "@/components/hr/hero";
import { Philosophy } from "@/components/hr/philosophy";
import { Method } from "@/components/hr/method";
import { DiagnosisConsole } from "@/components/hr/diagnosis-console";
import { Domains } from "@/components/hr/domains";
import { Library } from "@/components/hr/library";
import { Tools } from "@/components/hr/tools";
import { Cases } from "@/components/hr/cases";
import { Faculty } from "@/components/hr/faculty";
import { ActionPlan } from "@/components/hr/action-plan";
import { SmallBusiness } from "@/components/hr/small-business";
import { HrTech } from "@/components/hr/hr-tech";
import { LegalEthics } from "@/components/hr/legal-ethics";
import { Footer } from "@/components/hr/footer";
import { LanguageProvider } from "@/lib/i18n";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Hero />
          <Philosophy />
          <Method />
          <DiagnosisConsole />
          <Domains />
          <Library />
          <Tools />
          <Cases />
          <Faculty />
          <ActionPlan />
          <SmallBusiness />
          <HrTech />
          <LegalEthics />
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
