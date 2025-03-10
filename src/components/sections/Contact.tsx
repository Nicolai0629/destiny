import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="box-border bg-white pt-6 pb-24">
      <h2 className="box-border text-3xl font-bold text-gray-900 text-center mb-10">
        Get Started Today
      </h2>
      <form
        onSubmit={handleSubmit}
        className="box-border max-w-xl mx-auto my-0 px-6 py-0 max-sm:px-4"
      >
        <div className="box-border mb-6">
          <label
            htmlFor="fullName"
            className="box-border text-sm text-gray-700 mb-2 block"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="box-border w-full border border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-white p-2 rounded-md"
          />
        </div>

        <div className="box-border mb-6">
          <label
            htmlFor="email"
            className="box-border text-sm text-gray-700 mb-2 block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="box-border w-full border border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-white p-2 rounded-md"
          />
        </div>

        <div className="box-border mb-6">
          <label
            htmlFor="message"
            className="box-border text-sm text-gray-700 mb-2 block"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="box-border w-full border border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] h-[82px] resize-y bg-white p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="box-border w-full text-white text-[12.7px] bg-indigo-600 p-3.5 rounded-md border-2 border-solid border-black hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
