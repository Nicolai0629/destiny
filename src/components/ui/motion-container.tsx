
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MotionContainer = ({
  children,
  className,
  delay = 0,
}: MotionContainerProps) => {
  const delayClass = delay ? `delay-${delay}00` : "";
  
  return (
    <div
      className={cn(
        "animate-fade-in opacity-0",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
};
