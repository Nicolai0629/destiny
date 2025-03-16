
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure component mounts properly before animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50 + delay * 100);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const delayClass = delay ? `delay-${delay}00` : "";
  
  return (
    <div
      className={cn(
        "transition-all duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
};
