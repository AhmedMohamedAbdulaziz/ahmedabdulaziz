import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import certDscBestMember from "@/assets/certs/cert-dsc-best-member.jpg";
import certAlxAi from "@/assets/certs/cert-alx-ai.jpg";
import certNtiMean from "@/assets/certs/cert-nti-mean.jpg";
import certElevvo from "@/assets/certs/cert-elevvo.jpg";
import certUdemyCpp from "@/assets/certs/cert-udemy-cpp.jpg";
import certItiAngular from "@/assets/certs/cert-iti-angular.jpg";
import certDscFrontend from "@/assets/certs/cert-dsc-frontend.png";
import certPlanit from "@/assets/certs/cert-planit.png";
import certGdgDs from "@/assets/certs/cert-gdg-datascience.jpg";
import certAlmadrasaGit from "@/assets/certs/cert-almadrasa-git.jpg";
import certGdgFrontend from "@/assets/certs/cert-gdg-frontend.jpg";

const certificates = [
  { title: "DSC Best Member – Frontend", org: "DSC Elshorouk Academy", image: certDscBestMember },
  { title: "AI Starter Kit", org: "ALX Africa", image: certAlxAi },
  { title: "MEAN Stack Web Development", org: "NTI – Score: 94.5%", image: certNtiMean },
  { title: "Front-End Internship", org: "Elevvo", image: certElevvo },
  { title: "The C++ Learning Guide", org: "Udemy", image: certUdemyCpp },
  { title: "Web Development using Angular", org: "ITI – 120 hrs", image: certItiAngular },
  { title: "Frontend Phase 1 – Score: 90%", org: "DSC", image: certDscFrontend },
  { title: "Software Engineering Diploma", org: "PlanIT – Score: 97.6%", image: certPlanit },
  { title: "Data Science & AI BootCamp", org: "GDG Benha University", image: certGdgDs },
  { title: "Git and GitHub", org: "Almdrasa", image: certAlmadrasaGit },
  { title: "Front-End BootCamp", org: "GDG Benha University", image: certGdgFrontend },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-center">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Courses & certifications I've completed</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(i)}
              className="group cursor-pointer bg-card rounded-xl border border-border shadow-card hover:border-primary/40 hover:shadow-glow transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 font-mono">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={certificates[selected].image}
            alt={certificates[selected].title}
            className="max-w-full max-h-[85vh] rounded-xl shadow-card object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
