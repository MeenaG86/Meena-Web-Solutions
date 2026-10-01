import { Check } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Basic Website",
    description: "Suitable for individuals and small businesses.",
    features: [
      "Responsive design",
      "Up to 5 pages",
      "Modern professional layout",
      "Contact / enquiry form",
      "Mobile-friendly design",
    ],
  },
  {
    title: "Business Website",
    description: "A complete professional website for growing businesses.",
    features: [
      "Responsive design",
      "Multiple pages",
      "Professional UI design",
      "Enquiry / contact form",
      "Project or service sections",
      "Basic SEO setup",
    ],
    popular: true,
  },
  {
    title: "Custom Website",
    description: "For e-commerce websites and projects with custom features.",
    features: [
      "Custom design",
      "Advanced functionality",
      "Database integration",
      "User authentication",
      "Admin features",
      "Custom project requirements",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#b08d57]">
            Website Packages
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#1f1f1f] md:text-5xl">
            Choose a package that
            <span className="text-[#b08d57]"> fits your needs.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Every website is different. Final pricing depends on your
            requirements, number of pages and features.
          </p>
        </div>

        {/* Packages */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`relative rounded-2xl p-7 ${
                pkg.popular
                  ? "border-2 border-[#b08d57] bg-[#f5f0e6]"
                  : "border border-gray-200 bg-[#fffdf8]"
              }`}
            >

              {/* Popular Label */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#b08d57] px-4 py-1 text-xs font-semibold text-white">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#1f1f1f]">
                {pkg.title}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-600">
                {pkg.description}
              </p>

              <div className="my-6 h-px bg-gray-200"></div>

              {/* Features */}
              <ul className="space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5ead8]">
                      <Check
                        size={13}
                        className="text-[#b08d57]"
                      />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className="mt-8 block rounded-lg bg-[#1f1f1f] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#b08d57]"
              >
                Get a Quote
              </a>

            </motion.div>
          ))}

        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Domain, hosting and third-party services are charged separately
          when required.
        </p>

      </div>
    </section>
  );
}

export default Pricing;