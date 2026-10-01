import { ExternalLink } from "lucide-react";

import pizzaPalaceImage from "../assets/pizza-palace.jpg";
import littleStarsImage from "../assets/little-stars.jpg";

const projects = [
  {
    title: "Pizza Palace",
    category: "Food Ordering Website",
    description:
      "A full-stack pizza ordering website with user authentication, cart, orders and admin management.",
    image: pizzaPalaceImage,
    link: "https://pizza-palace-ebon.vercel.app/",
    technologies: "React • Node.js • Express • MongoDB",
  },
  {
    title: "Little Stars Play School",
    category: "School Website",
    description:
      "A responsive preschool website designed to present programs, facilities, gallery and contact information.",
    image: littleStarsImage,
    link: "https://little-stars-play-school-swart.vercel.app/",
    technologies: "React • Vite • Tailwind CSS",
  },
  {
    title: "E-Commerce Website",
    category: "E-Commerce",
    description:
      "An e-commerce website with products, cart, checkout and order management.",
    image: null,
    link: "#",
    technologies: "React • Node.js • Express • MongoDB",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f5f0e6] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold text-[#1f1f1f] md:text-4xl">
            Recent Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A selection of websites and applications I have built.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-[#fffdf8] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >

              {/* Project Image */}
              <div className="h-56 overflow-hidden bg-gray-100">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} website`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-gray-400">
                      Project Preview
                    </p>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">

                <p className="text-sm font-medium text-[#b08d57]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#1f1f1f]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                <p className="mt-4 text-xs font-medium text-gray-500">
                  {project.technologies}
                </p>

                {/* View Website */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1f1f1f] transition hover:text-[#b08d57]"
                  >
                    View Website
                    <ExternalLink size={16} />
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Portfolio;