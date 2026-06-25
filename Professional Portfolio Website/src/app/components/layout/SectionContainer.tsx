import type { ReactNode } from "react";
import { cn } from "../components/ui/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function SectionContainer({ children, className, narrow }: SectionContainerProps) {
  return (
    <div
      className={cn(
        narrow ? "max-w-5xl mx-auto" : "w-11/12 lg:w-[75%] mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
