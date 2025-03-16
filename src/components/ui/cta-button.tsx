
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  isExternal?: boolean;
}

export const CTAButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  isExternal = false,
}: CTAButtonProps) => {
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
    outline: "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = cn(
    "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (isExternal && href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
