import { ArrowRight } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";


const Hero = () => {
  // 🔥 Scroll tracking
  const { scrollY } = useScroll();

  // 🎯 Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32" id="hero">

      {/* 🔥 BACKGROUND PARALLAX */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-[#C48CB3]/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-[#83A6CE]/20 rounded-full blur-[160px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#0D1E4C]/40 rounded-full blur-[140px]" />
      </motion.div>

      {/* 🔥 CONTENT */}
      <motion.div 
        style={{ y: yText, opacity, scale }}
        className="max-w-4xl mx-auto text-center"
      >

        {/* 🔥 TAG */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            inline-block px-5 py-2 rounded-full 
            bg-white/5 backdrop-blur-md
            border border-white/10
            text-[#E5C9D7] text-xs tracking-widest uppercase
            mb-8
          "
        >
          Desarrollo web orientado a resultados
        </motion.span>

        {/* 🔥 TITULO CON REVEAL */}
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            text-6xl md:text-8xl lg:text-9xl 
            font-serif italic 
            leading-[0.9] 
            tracking-tight 
            text-white
          "
        >
          Nicole
        </motion.h1>

        {/* 🔥 LINEA ANIMADA */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="origin-left h-[1px] bg-white/20 mx-auto my-10 w-[120px]"
        />

        {/* 🔥 TEXTO */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="
            text-lg md:text-xl 
            text-[#E5C9D7]/70 
            max-w-2xl 
            mx-auto
            leading-relaxed
            uppercase tracking-wide
          "
        >
          Webs rápidas y optimizadas para SEO.  
          Pensadas para convertir visitas en clientes.
        </motion.p>

        {/* 🔥 BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
        >

          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              group px-10 py-4 rounded-full 
              bg-gradient-to-r from-[#C48CB3] to-[#83A6CE]
              text-white font-semibold
              shadow-[0_10px_40px_rgba(196,140,179,0.4)]
              flex items-center gap-3
            "
          >
            Ver proyectos
            <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-8 py-4 rounded-full
              bg-white/5 backdrop-blur-md
              border border-white/10
              text-white font-medium
            "
          >
            Sobre mí
          </motion.a>

        </motion.div>

        {/* 🔥 SCROLL INDICATOR PRO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-widest text-[#E5C9D7]/50 uppercase">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-[1px] h-12 bg-[#E5C9D7]/30"
          />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;