
import { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, CreditCardIcon, LockIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const planDetails = {
    basic: {
      name: "Basic Plan",
      price: "$49",
      period: "monthly",
      description: "Perfect for small businesses",
      features: [
        "5 team members",
        "Basic support",
        "10 projects",
        "2GB storage"
      ]
    },
    pro: {
      name: "Pro Plan",
      price: "$99",
      period: "monthly",
      description: "Ideal for growing businesses",
      features: [
        "20 team members",
        "Priority support",
        "Unlimited projects",
        "20GB storage",
        "Advanced analytics"
      ]
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "$299",
      period: "monthly",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "24/7 dedicated support",
        "Unlimited projects",
        "Unlimited storage",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful!",
        description: `You have successfully subscribed to the ${planDetails[selectedPlan as keyof typeof planDetails].name}.`,
      });
      
      // Redirect to home after successful payment
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 2000);
  };

  return (
    <PageLayout>
      <PageHero 
        title="Complete Your Purchase" 
        subtitle="You're just one step away from unlocking premium features"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your selected plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="basic">Basic</TabsTrigger>
                      <TabsTrigger value="pro">Pro</TabsTrigger>
                      <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(planDetails).map(([key, plan]) => (
                      <TabsContent value={key} key={key} className="mt-0">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <div className="flex items-end gap-1 my-2">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-gray-500">/{plan.period}</span>
                          </div>
                          <p className="text-gray-600">{plan.description}</p>
                        </div>
                        
                        <ul className="space-y-2 my-4">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckIcon className="h-5 w-5 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    ))}
                  </Tabs>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{planDetails[selectedPlan as keyof typeof planDetails].price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>$0.00</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{planDetails[selectedPlan as keyof typeof planDetails].price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Enter your payment information securely</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Billing Information */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Billing Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" placeholder="123 Main St" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="New York" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" placeholder="10001" required />
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment Information */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Payment Information</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <div className="relative">
                            <Input 
                              id="cardNumber" 
                              placeholder="1234 5678 9012 3456" 
                              required 
                              className="pl-10"
                            />
                            <CreditCardIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-6 mb-4">
                    <LockIcon className="h-4 w-4 text-green-600 mr-2" />
                    <p className="text-sm text-gray-600">Your payment information is secured with 256-bit encryption</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay ${planDetails[selectedPlan as keyof typeof planDetails].price}`}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 justify-center">
                By completing this purchase, you agree to our Terms of Service and Privacy Policy
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CheckoutPage;
