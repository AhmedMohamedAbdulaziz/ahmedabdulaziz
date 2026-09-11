import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Server, Code, Wrench } from "lucide-react";

const featuredProjects = [
  {
    name: "EduSphere",
    description: "A comprehensive educational platform built for course management and online learning.",
  },
  {
    name: "Job-Board Platform",
    description: "A recruitment system enabling candidates to upload resumes and track application status updates in real time.",
  },
  {
    name: "Hotel Management System",
    description: "An enterprise-level backend solution built with Laravel for reservations and system management.",
  },
];

const certifications = [
  "NTI",
  "ITI",
  "IEEE",
  "GDG",
  "ALX",
  "Elevvo",
  "Almadrasa",
  "Planit",
];

const expertise = [
  {
    icon: Server,
    title: "Back-End Specialization",
    skills: ["PHP", "Laravel Framework", "RESTful API Design", "Database Architecture (MySQL)"],
  },
  {
    icon: Code,
    title: "Front-End & Tools",
    skills: ["JavaScript", "React", "HTML5/CSS3", "Git & GitHub", "Postman", "Clean Code & Architecture"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Background, expertise & featured work</p>
        </motion.div>

        <div className="space-y-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-card"
          >
            <p className="text-foreground leading-relaxed">
              I am a dedicated Back-End Developer specializing in PHP & Laravel, with a strong passion for building scalable software architectures, secure RESTful APIs, and optimized database systems. My core focus is writing clean, maintainable server-side logic and managing database systems efficiently. I also hold solid Front-End capabilities (React) to ensure seamless API integration across full-stack applications. Currently, I contribute as a Website Team Member at NASA Space Apps Cairo, developing and supporting web platforms for one of the largest global hackathons.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-card"
          >
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
              <Wrench className="text-primary" size={22} />
              Featured Back-End Projects
            </h3>
            <ul className="space-y-3">
              {featuredProjects.map((project) => (
                <li key={project.name} className="text-muted-foreground">
                  <span className="text-foreground font-medium">{project.name}:</span>{" "}
                  {project.description}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl p-6 border border-border shadow-card"
            >
              <Award className="text-primary mb-4" size={28} />
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Certifications & Specialized Training</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Certified in Web & Software Engineering track technologies through:
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education & Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl p-6 border border-border shadow-card space-y-6"
            >
              <div>
                <GraduationCap className="text-primary mb-4" size={28} />
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Education</h3>
                <p className="text-muted-foreground text-sm">Al Shrouk Academy</p>
              </div>
              <div>
                <Globe className="text-primary mb-4" size={28} />
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Languages</h3>
                <p className="text-muted-foreground text-sm">Arabic – Native</p>
                <p className="text-muted-foreground text-sm">English – Good</p>
              </div>
            </motion.div>
          </div>

          {/* Technical Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <area.icon className="text-primary mb-4" size={28} />
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{area.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
