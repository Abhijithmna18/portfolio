import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Abhijith M Nair. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/18abhi" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/abhijith-m-nair-18abhi/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:abhijithmnair2002@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
