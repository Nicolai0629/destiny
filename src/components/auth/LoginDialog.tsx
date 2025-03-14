
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, LogIn, UserPlus, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type LoginDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a placeholder for actual authentication logic
    toast({
      title: isLogin ? "Login Successful" : "Signup Successful",
      description: `Welcome${!isLogin ? "! Your account has been created" : ""}`,
    });
    
    onOpenChange(false);
  };

  const handleGoogleLogin = () => {
    // This is a placeholder for Google authentication
    toast({
      title: "Google Authentication",
      description: "Google login functionality would be implemented here.",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isLogin ? (
              <>
                <LogIn className="h-5 w-5" /> Sign In
              </>
            ) : (
              <>
                <UserPlus className="h-5 w-5" /> Create Account
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Enter your credentials to sign in to your account."
              : "Fill in the information below to create your account."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="h-4 w-4" /> Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="col-span-3"
            />
          </div>

          <Button
            type="submit"
            className="mt-2 w-full"
            variant="default"
          >
            {isLogin ? "Sign In" : "Create Account"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
          >
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12 h8 M12 8 v8" />
            </svg>
            Google
          </Button>
        </form>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
          <Button
            type="button"
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            className="text-center text-sm"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
