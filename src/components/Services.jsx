import {
  BriefcaseBusiness,
  GraduationCap,
  ShoppingCart,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Websites",
    description:
      "Professional and responsive websites that help small businesses build an online presence and reach more customers.",
  },
  {
    icon: GraduationCap,
    title: "School Websites",
    description:
      "Modern websites for schools, preschools and educational institutions to showcase programs, facilities and activities.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Responsive online stores with products, shopping cart, checkout and order management features.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Custom web applications designed around your business requirements, workflows and functionality.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f5f0e6] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
            Services
          </p>

          <h2 className="text-3xl font-bold text-[#1f1f1f] md:text-4xl">
            Websites Designed for Your Business
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From simple business websites to complete web applications,
            I build responsive and professional solutions based on your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-gray-200 bg-[#fffdf8] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5ead8] transition group-hover:bg-[#1f1f1f]">
                  <Icon
                    size={26}
                    className="text-[#b08d57] transition group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1f1f1f]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Services;