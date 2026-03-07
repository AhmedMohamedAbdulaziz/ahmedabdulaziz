import { motion } from "framer-motion";
import ahmedPhoto from "@/assets/ahmed-photo.jpg";
import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
            <img
              src={ahmedPhoto}
              alt="Ahmed Mohamed"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-mono text-xs font-bold">DEV</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center lg:text-left max-w-xl"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 leading-tight">
            Ahmed Mohamed
            <span className="block text-gradient">Web Developer</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Passionate full-stack web developer focused on speed, quality, and client satisfaction. Building modern web solutions with React, Laravel & more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="mailto:ahmedmohamedabdulaziz96@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              <Mail size={18} /> Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mohamed-Abdulaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
