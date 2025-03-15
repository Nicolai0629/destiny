
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { useNavigate, Link } from "react-router-dom";

interface PricingProps {
  checkoutPath?: string;
}

export const Pricing = ({ checkoutPath = "/checkout" }: PricingProps) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with outsourcing",
      monthlyPrice: 599,
      yearlyPrice: 6589, // 10% discount applied
      features: [
        "Dedicated account manager",
        "Up to 40 service hours/month",
        "3 service areas",
        "Email support (24h response)",
        "Monthly reporting",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with broader outsourcing needs",
      monthlyPrice: 1299,
      yearlyPrice: 14289, // 10% discount applied
      features: [
        "Senior account manager",
        "Up to 100 service hours/month",
        "5 service areas",
        "Priority email & phone support",
        "Weekly reporting",
        "Custom workflow setup",
        "Team training session",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For established companies requiring comprehensive support",
      monthlyPrice: 2999,
      yearlyPrice: 32989, // 10% discount applied
      features: [
        "Executive account manager",
        "Unlimited service hours",
        "All service areas",
        "24/7 priority support",
        "Custom reporting schedule",
        "Dedicated team assignment",
        "Strategic consulting",
        "Quarterly business reviews",
      ],
      isPopular: false,
    },
  ];

  const handleGetStarted = (plan: string) => {
    navigate(checkoutPath, { state: { plan, billingCycle } });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs with no hidden fees
          </p>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                billingCycle === "monthly"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                billingCycle === "yearly"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Yearly (10% discount)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col ${
                plan.isPopular ? "border-indigo-500 shadow-lg" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </p>
                  <p className="text-gray-500 text-sm">per {billingCycle === "monthly" ? "month" : "year"}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? "default" : "outline"}
                  onClick={() => handleGetStarted(plan.name)}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
