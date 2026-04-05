import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-4xl font-serif italic tracking-tighter text-white">Nicole.</div>
          
          <div className="flex space-x-12">
            <a href="#hero" className="text-sm font-bold uppercase tracking-widest text-light-pink/60 hover:text-white transition-colors">Inicio</a>
            <a href="#projects" className="text-sm font-bold uppercase tracking-widest text-light-pink/60 hover:text-white transition-colors">Proyectos</a>
            <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-light-pink/60 hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/niyranzo" target="_blank" className="w-12 h-12 rounded-full neumorphic-card flex items-center justify-center text-white hover:text-soft-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nicoleyranzo/" target="_blank" className="w-12 h-12 rounded-full neumorphic-card flex items-center justify-center text-white hover:text-soft-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 pt-12 text-xs font-bold uppercase text-center tracking-widest opacity-40 text-light-pink">
          <p>© 2026 Nicole. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;