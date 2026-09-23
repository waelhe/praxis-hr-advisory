import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span
          className={cn(
            "eyebrow font-mono text-[11px]",
            dark ? "text-tealbr-200" : "text-tealbr-600"
          )}
        >
          § {index}
        </span>
        <span
          className={cn(
            "h-px w-8",
            dark ? "bg-navy-600" : "bg-navy-200"
          )}
        />
        <span
          className={cn(
            "eyebrow",
            dark ? "text-navy-300" : "text-navy-500"
          )}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 font-display text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.4rem]",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "mt-4 max-w-2xl text-[15px] leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-navy-200" : "text-navy-700"
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
