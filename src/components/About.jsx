import { motion } from "framer-motion";
import { Layers, Clock, CheckCircle, TrendingUp } from "lucide-react";

const About = () => {
  const skills = [
    { 
      name: 'Desarrollo web orientado a negocio', 
      text: 'Creo webs rápidas, optimizadas y pensadas para convertir visitas en clientes.',
      icon: <Layers size={20} />, 
      color: 'bg-muted-pink' 
    },
    { 
      name: 'Optimización y rendimiento', 
      text: 'Desarrollo aplicaciones eficientes, con tiempos de carga rápidos y estructura preparada para SEO.',
      icon: <Clock size={20} />, 
      color: 'bg-soft-blue' 
    },
    { 
      name: 'Soluciones digitales', 
      text: 'Diseño soluciones que mejoran la experiencia de usuario y ayudan a alcanzar objetivos reales de negocio.',
      icon: <CheckCircle size={20} />, 
      color: 'bg-muted-blue' 
    },
    { 
      name: 'Enfoque en resultados', 
      text: 'Cada proyecto está pensado para aportar valor real y ayudar a negocios a crecer.',
      icon: <TrendingUp size={20} />, 
      color: 'bg-light-pink/20' 
    },
  ];

  return (
    <section id="about" className=" relative scroll-mt-32" >
      <div className="max-w-5xl mx-auto px-6 relative">

        {/* 🔥 DECORACIÓN SUTIL */}
        
        <div className="mb-16 text-center">

            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="
                inline-block
                px-5 py-2 rounded-full 
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-[#E5C9D7] text-xs tracking-widest uppercase
                mb-6
                "
            >
                Sobre mí
            </motion.span>

            <h2 className="text-5xl md:text-6xl font-serif italic tracking-tight text-white">
                Un enfoque <br /> 
                <span className="text-muted-pink">humano</span> al diseño.
            </h2>

            </div>

        {/* 🔥 TEXTO CENTRAL */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-light-pink/70 leading-relaxed">
            Soy desarrolladora web con enfoque en crear soluciones digitales que no solo funcionen bien, sino que ayuden a negocios a crecer.
          </p>

          <p className="text-lg text-light-pink/70 leading-relaxed">
            Me interesa especialmente el desarrollo de páginas rápidas, optimizadas para SEO y pensadas para convertir visitantes en clientes.
          </p>

          <p className="text-lg text-light-pink/70 leading-relaxed">
            Actualmente sigo formándome en desarrollo web y marketing digital para aportar el máximo valor en cada proyecto.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="neumorphic-card p-6 flex flex-col gap-3"
            >
              <div className={`w-10 h-10 rounded-xl ${skill.color} flex items-center justify-center text-white shadow-sm`}>
                {skill.icon}
              </div>

              <h3 className="font-semibold text-sm text-white">
                {skill.name}
              </h3>

              <p className="text-xs text-light-pink/60 leading-relaxed">
                {skill.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;