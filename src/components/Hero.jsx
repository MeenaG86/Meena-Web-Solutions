import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fffdf8] py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8c29d] bg-[#f9f1e4] px-4 py-2 text-sm font-medium text-[#8f7040]">
            <Sparkles size={16} />
            Professional Web Development
          </div>

          <h1 className="text-4xl font-bold leading-tight text-[#1f1f1f] md:text-6xl">
            Websites That Help
            <span className="block text-[#b08d57]">
              Your Business Grow
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            I’m Meena, a web developer creating modern, responsive and
            professional websites for businesses, schools and growing brands.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f1f1f] px-6 py-3 font-medium text-white transition hover:bg-[#b08d57]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1f1f1f] px-6 py-3 font-medium text-[#1f1f1f] transition hover:bg-[#1f1f1f] hover:text-white"
            >
              View My Work
            </a>

          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">

            {/* Main Card */}
            <div className="rounded-3xl border border-[#e5d8c5] bg-white p-6 shadow-xl">

              <div className="mb-5 flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                  <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                  <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                </div>

                <div className="ml-2 h-2 flex-1 rounded-full bg-gray-100"></div>
              </div>

              <div className="rounded-2xl bg-[#fffdf8] p-6">

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#f5ead8] p-4">
                    <Code2 size={30} className="text-[#b08d57]" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-[#1f1f1f]">
                      Meena Web Solutions
                    </p>

                    <p className="text-sm text-gray-500">
                      Modern • Responsive • Professional
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="h-3 w-3/4 rounded-full bg-gray-200"></div>
                  <div className="h-3 w-full rounded-full bg-gray-100"></div>
                  <div className="h-3 w-5/6 rounded-full bg-gray-100"></div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-[#f9f1e4] p-4">
                    <p className="text-xs text-gray-500">
                      Design
                    </p>
                    <p className="mt-1 font-semibold text-[#1f1f1f]">
                      Modern
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f9f1e4] p-4">
                    <p className="text-xs text-gray-500">
                      Development
                    </p>
                    <p className="mt-1 font-semibold text-[#1f1f1f]">
                      Responsive
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Decorative Card */}
            <div className="absolute -bottom-5 -left-5 -z-0 rounded-2xl border border-[#e5d8c5] bg-[#f9f1e4] px-5 py-4 shadow-md">
              <p className="text-xs text-gray-500">
                Built for
              </p>

              <p className="font-semibold text-[#1f1f1f]">
                Your Business
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;