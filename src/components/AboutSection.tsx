import { motion } from "framer-motion";
import { GraduationCap, Award, Globe } from "lucide-react";

const certifications = [
  "GDG Data Science & Front-end",
  "DSC Front-End",
  "ALX AI Kit",
  "NTI MEAN Stack",
  "ITI Web using Angular",
  "Elevvo Front-End",
  "Almadrasa Git & GitHub",
  "IEEE Back-end & Time Management",
  "Planit Software Engineer",
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
          <p className="text-muted-foreground text-center mb-12">Education, certifications & languages</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 border border-border shadow-card"
          >
            <GraduationCap className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Education</h3>
            <p className="text-muted-foreground text-sm">Al Shrouk Academy</p>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 border border-border shadow-card"
          >
            <Globe className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Languages</h3>
            <p className="text-muted-foreground text-sm">Arabic – Native</p>
            <p className="text-muted-foreground text-sm">English – Good</p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 border border-border shadow-card md:row-span-1"
          >
            <Award className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Certifications</h3>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
