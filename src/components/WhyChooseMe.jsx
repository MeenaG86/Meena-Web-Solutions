import { Check, MessageCircle, Palette, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Palette,
    title: "Professional Design",
    text: "Clean and modern designs created around your business and brand.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    text: "Your website will work smoothly across phones, tablets and desktops.",
  },
  {
    icon: Rocket,
    title: "Fast & Modern",
    text: "Modern technologies and optimized development for a smooth experience.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    text: "Discuss your requirements directly without unnecessary middlemen.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    text: "Support and guidance during the website development process.",
  },
  {
    icon: Check,
    title: "Business Focused",
    text: "Every website is built with your customers and business goals in mind.",
  },
];

function WhyChooseMe() {
  return (
    <section className="py-24 px-6 bg-[#fffdf8]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-[#b08d57] font-semibold tracking-widest uppercase text-sm mb-4">
            Why Meena Web Solutions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            More than just a
            <span className="text-[#b08d57]"> website.</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            I focus on creating websites that are professional,
            practical and easy for your customers to use.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="p-7 rounded-2xl border border-black/10 hover:border-[#b08d57]/40 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f5f0e6] flex items-center justify-center">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseMe;