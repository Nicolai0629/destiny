
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionContainer } from "@/components/ui/motion-container";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  withAnimation?: boolean;
}

export const PageLayout = ({
  children,
  className,
  withAnimation = true,
}: PageLayoutProps) => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn("flex-grow w-full", className)}>
        {withAnimation ? (
          <MotionContainer>{children}</MotionContainer>
        ) : (
          children
        )}
      </main>
      <Footer />
    </div>
  );
};
