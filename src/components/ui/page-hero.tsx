
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  bgColor?: string;
}

export const PageHero = ({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  bgColor = "bg-indigo-50",
}: PageHeroProps) => {
  return (
    <section className={cn("py-20", bgColor, className)}>
      <div className={cn("max-w-[1312px] mx-auto px-6", contentClassName)}>
        <div className="text-center">
          <h1 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-4", titleClassName)}>
            {title}
          </h1>
          {subtitle && (
            <p className={cn("text-xl text-gray-600 max-w-2xl mx-auto", subtitleClassName)}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
