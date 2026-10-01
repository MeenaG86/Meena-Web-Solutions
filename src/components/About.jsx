import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Responsive websites for desktop, tablet and mobile",
  "Clean and modern user-friendly designs",
  "Websites developed according to your requirements",
  "Clear communication throughout the project",
  "Reliable support after website delivery",
];

function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#b08d57]">
              About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#1f1f1f] md:text-5xl">
              Building websites with
              <span className="text-[#b08d57]">
                {" "}purpose and simplicity.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              I’m Meena, a web developer focused on creating modern,
              responsive and professional websites for businesses,
              schools and growing brands.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              My approach is simple: understand your requirements,
              create a clean design, build the website carefully and
              make sure it works well across different devices.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#b08d57]"
                  />

                  <p className="text-sm leading-6 text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl bg-[#f5f0e6] p-8 md:p-10">

              <div className="rounded-2xl bg-white p-8 shadow-sm">

                <p className="text-sm font-medium text-[#b08d57]">
                  Meena Web Solutions
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#1f1f1f]">
                  Modern websites for growing businesses.
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  From simple business websites to custom web
                  applications, each project is developed with
                  usability, responsiveness and a professional
                  appearance in mind.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-[#fffdf8] p-5">
                    <p className="text-2xl font-bold text-[#b08d57]">
                      100%
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Responsive
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#fffdf8] p-5">
                    <p className="text-2xl font-bold text-[#b08d57]">
                      Custom
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Development
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;