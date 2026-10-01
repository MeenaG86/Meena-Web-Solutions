import { useState } from "react";
import { Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "6bf0883d-848c-4d96-a2ec-d3fe6ab5ea6a",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: "New Website Enquiry - Meena Web Solutions",
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Unable to send enquiry. Please try again.");
  }
};

  return (
    <section id="contact" className="bg-[#fffdf8] py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-[#1f1f1f] md:text-4xl">
            Let’s Build Your Website
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have a website idea or need a website for your business?
            Send me your requirements and I’ll get back to you.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h3 className="text-2xl font-semibold text-[#1f1f1f]">
            Send an Enquiry
          </h3>
           
           {submitted && (
  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
    Thank you! Your enquiry has been sent successfully.
    I’ll get back to you soon.
  </div>
)}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b08d57]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b08d57]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me about your website requirement..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b08d57]"
            ></textarea>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1f1f1f] px-6 py-3 font-medium text-white transition hover:bg-[#b08d57]"
            >
              <Send size={18} />
              Send Enquiry
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;