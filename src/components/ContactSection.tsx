import { Mail, Phone, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-10">Feel free to reach out for collaborations or opportunities</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ahmedmohamedabdulaziz96@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary/40 hover:shadow-glow transition-all"
          >
            <Mail size={18} className="text-primary" />
            <span className="text-sm">ahmedmohamedabdulaziz96@gmail.com</span>
          </a>
          <a
            href="tel:+201097022569"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary/40 hover:shadow-glow transition-all"
          >
            <Phone size={18} className="text-primary" />
            <span className="text-sm">+201097022569</span>
          </a>
          <a
            href="https://github.com/AhmedMohamedAbdulaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary/40 hover:shadow-glow transition-all"
          >
            <Github size={18} className="text-primary" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm font-mono">
          © 2026 Ahmed Mohamed. Built with ❤️
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
