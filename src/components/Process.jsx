import { MessageSquare, Code2, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discuss",
    text: "We discuss your business, requirements, pages and features.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Design & Develop",
    text: "I create the design and develop the website according to your requirements.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Review",
    text: "You review the website and share your feedback and changes.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    text: "After approval, the website is deployed and made ready for your customers.",
  },
];

function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-[#f5f0e6]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#b08d57] font-semibold tracking-widest uppercase text-sm mb-4">
            How It Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple process.
            <span className="text-[#b08d57]"> Clear communication.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative bg-[#fffdf8] rounded-2xl p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#b08d57]">
                    {step.number}
                  </span>

                  <Icon size={22} />
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Process;