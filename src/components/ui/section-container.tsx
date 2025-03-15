
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  id?: string;
  bgColor?: string;
}

export const SectionContainer = ({
  children,
  className,
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  contentClassName,
  id,
  bgColor = "bg-white",
}: SectionContainerProps) => {
  return (
    <section id={id} className={cn("py-16", bgColor, className)}>
      <div className={cn("max-w-[1312px] mx-auto px-6", contentClassName)}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-900 mb-4", titleClassName)}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn("text-lg text-gray-600 max-w-3xl mx-auto", subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
