
import { useState } from "react";
import { LoginDialog } from "@/components/auth/LoginDialog";

export const Hero = () => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  return (
    <section className="box-border px-0 py-[85px]">
      <div className="box-border max-w-[1312px] flex justify-between items-center gap-10 mx-auto my-0 px-6 py-0 max-md:flex-col">
        <div className="box-border max-w-[600px]">
          <h1 className="box-border text-6xl leading-[72px] text-gray-900 font-bold mb-10 max-sm:text-[40px] max-sm:leading-[48px]">
            Transform Your Business With Expert Outsourcing
          </h1>
          <p className="box-border text-lg text-gray-600 mb-8">
            Scale your operations, reduce costs, and focus on core business
            activities with our professional outsourcing solutions.
          </p>
          <div className="box-border flex gap-8 max-sm:flex-col max-sm:gap-4">
            <button 
              className="box-border text-white text-[12.5px] bg-indigo-600 px-[34px] py-3.5 rounded-full border-2 border-solid border-black max-sm:w-full hover:bg-indigo-700 transition-colors"
              onClick={() => setLoginDialogOpen(true)}
            >
              Get Started
            </button>
            <button className="box-border text-gray-600 text-[12.7px] bg-[#EFEFEF] px-8 py-3.5 rounded-full border-2 border-solid border-[#AAA] max-sm:w-full hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="box-border w-[636px] h-[383px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] bg-white rounded-lg overflow-hidden max-md:w-full max-md:h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Team collaborating around laptops" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </section>
  );
};
