import { Code, Layers, Palette, Camera, Share2 } from "lucide-react";

const Services = () => {
  const services = [
    { 
      title: 'Diseño UI/UX', 
      desc: 'Interfaces intuitivas que guían al usuario y refuerzan la identidad de marca.', 
      icon: <Palette className="text-muted-pink" /> 
    },
    { 
      title: 'Desarrollo Web', 
      desc: 'Sitios rápidos, responsivos y optimizados con las últimas tecnologías.', 
      icon: <Code className="text-soft-blue" /> 
    },
    { 
      title: 'Identidad Visual', 
      desc: 'Logos y sistemas visuales que capturan la esencia de tu negocio.', 
      icon: <Layers className="text-light-pink" /> 
    },

    // 🔥 NUEVOS SERVICIOS

    { 
      title: 'Creación de contenido', 
      desc: 'Diseño y creación de contenido visual atractivo enfocado en captar atención y generar engagement.', 
      icon: <Camera className="text-[#C48CB3]" /> 
    },
    { 
      title: 'Gestión de redes sociales', 
      desc: 'Estrategia y gestión de redes como Instagram, TikTok y Facebook para crecer y conectar con tu audiencia.', 
      icon: <Share2 className="text-[#83A6CE]" /> 
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-serif italic mb-6 text-white">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-light-pink/60">
            Soluciones digitales enfocadas en atraer, convertir y hacer crecer tu negocio online.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="
                neumorphic-card p-10 text-center 
                group hover:-translate-y-2 
                transition-all duration-500
              "
            >
              <div className="
                w-16 h-16 bg-white/5 rounded-2xl shadow-sm 
                flex items-center justify-center mx-auto mb-8 
                group-hover:scale-110 transition-transform 
                border border-white/10
              ">
                {service.icon}
              </div>

              <h3 className="text-xl font-serif italic mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-sm text-light-pink/60 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;