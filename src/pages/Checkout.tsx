
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { CreditCard, CheckCircle, ArrowLeft, Lock } from "lucide-react";

interface LocationState {
  plan?: string;
  billingCycle?: "monthly" | "yearly";
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const pricingData = {
  Starter: { monthly: 599, yearly: 6589 },
  Professional: { monthly: 1299, yearly: 14289 },
  Enterprise: { monthly: 2999, yearly: 32989 },
};

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState || {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<"details" | "billing" | "payment" | "confirmation">("details");
  
  const selectedPlan = state.plan || "Professional";
  const selectedBillingCycle = state.billingCycle || "monthly";
  const price = pricingData[selectedPlan as keyof typeof pricingData][selectedBillingCycle];

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  useEffect(() => {
    if (!state.plan) {
      navigate("/pricing");
    }
  }, [state, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step === "details") setStep("billing");
    else if (step === "billing") setStep("payment");
    else if (step === "payment") {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep("confirmation");
      }, 1500);
    }
  };

  const prevStep = () => {
    if (step === "billing") setStep("details");
    else if (step === "payment") setStep("billing");
  };

  const stepValid = () => {
    if (step === "details") {
      return formData.firstName && formData.lastName && formData.email;
    } else if (step === "billing") {
      return formData.billingAddress && formData.city && formData.state && formData.zipCode;
    } else if (step === "payment") {
      return formData.cardNumber && formData.expiryDate && formData.cvv;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stepValid()) {
      nextStep();
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {step !== "confirmation" ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
                <Button variant="ghost" onClick={() => navigate("/pricing")}>
                  <ArrowLeft size={16} className="mr-2" /> Back to Pricing
                </Button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 flex justify-between border-b">
                      <div className={`flex items-center ${step === "details" ? "text-indigo-600 font-medium" : "text-gray-500"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step === "details" ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>1</div>
                        Account Details
                      </div>
                      <div className={`flex items-center ${step === "billing" ? "text-indigo-600 font-medium" : "text-gray-500"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step === "billing" ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>2</div>
                        Billing Address
                      </div>
                      <div className={`flex items-center ${step === "payment" ? "text-indigo-600 font-medium" : "text-gray-500"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step === "payment" ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>3</div>
                        Payment
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-6">
                      {step === "details" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name *</Label>
                              <Input 
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name *</Label>
                              <Input 
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input 
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input 
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      )}
                      
                      {step === "billing" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                          
                          <div className="space-y-2">
                            <Label htmlFor="billingAddress">Street Address *</Label>
                            <Input 
                              id="billingAddress"
                              name="billingAddress"
                              value={formData.billingAddress}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City *</Label>
                              <Input 
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="state">State/Province *</Label>
                              <Input 
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                              <Input 
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="country">Country *</Label>
                              <Input 
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {step === "payment" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                          
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-gray-500">Secure Payment</p>
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Lock size={14} />
                              <span>SSL Encrypted</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <div className="relative">
                              <Input 
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                placeholder="0000 0000 0000 0000"
                                required
                              />
                              <CreditCard size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date *</Label>
                              <Input 
                                id="expiryDate"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input 
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-8 flex justify-between">
                        {step !== "details" && (
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Back
                          </Button>
                        )}
                        <div className={step === "details" ? "ml-auto" : ""}>
                          <Button 
                            type="submit" 
                            disabled={!stepValid() || isSubmitting}
                            className="min-w-[120px]"
                          >
                            {isSubmitting ? "Processing..." : step === "payment" ? "Complete Purchase" : "Continue"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Card>
                </div>
                
                <div className="w-full md:w-1/3">
                  <Card>
                    <div className="p-6 border-b">
                      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Plan:</span>
                        <span className="font-medium">{selectedPlan}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Billing:</span>
                        <span className="font-medium">{selectedBillingCycle === "monthly" ? "Monthly" : "Yearly (10% discount)"}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">${price}</span>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span>${price}</span>
                      </div>
                      
                      <p className="mt-6 text-xs text-gray-500 text-center">
                        By completing your purchase, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <Card className="p-8 max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Your Purchase!</h1>
              <p className="text-gray-600 mb-6">
                Your {selectedPlan} plan has been activated. We've sent a confirmation email to {formData.email}.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Order Details:</h3>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Plan:</span>
                  <span>{selectedPlan}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Billing:</span>
                  <span>{selectedBillingCycle === "monthly" ? "Monthly" : "Yearly"}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>${price}</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button onClick={() => navigate("/")}>
                  Go to Dashboard
                </Button>
                <Button variant="outline" onClick={() => navigate("/contact")}>
                  Contact Support
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
