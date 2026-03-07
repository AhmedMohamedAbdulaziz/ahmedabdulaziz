import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    description: "Responsive and modern online store interface with full shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-commerce with Laravel & React",
    description: "Full-stack e-commerce platform with Laravel backend and React frontend.",
    tech: ["Laravel", "React", "PHP"],
  },
  {
    title: "Hotel Management System",
    description: "Complete hotel management solution for booking and administration.",
    tech: ["Laravel", "PHP"],
  },
  {
    title: "Maswada AI",
    description: "AI-powered application built with the latest React 19 features.",
    tech: ["React 19"],
  },
  {
    title: "Weather API App",
    description: "Real-time weather application consuming external weather APIs.",
    tech: ["React 19", "API"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Some things I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border shadow-card hover:border-primary/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
