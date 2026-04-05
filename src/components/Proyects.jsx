import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import isabel from "../img/isabel.png";
import qivet from "../img/qivet.png";
import neopc from "../img/neopc.jpg";
import image from "../img/todah/image.png";
import image2 from "../img/todah/post.png";
import image3 from "../img/todah/post3.png";
import image4 from "../img/todah/post8.png";
import image5 from "../img/todah/todah.png";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [innerIndex, setInnerIndex] = useState(0);

  const projects = [
    {
      title: "Web para restaurante en Nerja",
      category: "Restaurante · Negocio local",
      images: [isabel],
      description: "Desarrollo de una web orientada a mejorar la presencia online y facilitar la captación de clientes.",
      problem: "No tenía presencia online ni generaba reservas desde internet.",
      solution: "Web responsive optimizada para SEO local y experiencia de usuario.",
      result: "Base digital preparada para aumentar visibilidad y captar clientes.",
      tech: "HTML · Tailwind CSS · JavaScript",
      type: "web",
      "url": "https://isabelrestaurante.netlify.app/"
    },
    {
      title: "Web para alojamiento rural",
      category: "Alojamiento rural · Negocio local",
      images: [
        image5,
        image2,
        image3,
        image,
        image4
      ],
      description: "Desarrollo web + creación de contenido visual para mejorar la visibilidad online y aumentar reservas.",
      problem: "Baja visibilidad y falta de contenido atractivo.",
      solution: "Web optimizada + contenido visual para redes y web.",
      result: "Mejor presencia digital y base para aumentar reservas.",
      tech: "HTML · Tailwind · JS · Contenido visual",
      type: "web",
      "url": "https://casatodah.netlify.app/"
    },
    {
      title: "QIVET · Sistema veterinario",
      category: "Clínica veterinaria",
      images: [qivet],
      description: "Sistema para optimizar la gestión de clínicas.",
      problem: "Gestión manual ineficiente.",
      solution: "Sistema de citas y control médico.",
      result: "Mejora organizativa.",
      tech: "Node · MongoDB",
      type: "code",
      "url": "https://github.com/niyranzo/qivetProyectoFinal"
    },
    {
      title: "NeoPc Admin",
      category: "Gestión de usuarios",
      images: [neopc],
      description: "App para gestionar usuarios y suscripciones.",
      problem: "Errores en gestión manual.",
      solution: "Sistema automatizado.",
      result: "Procesos optimizados.",
      tech: "Electron · SQLite",
      type: "code"
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    setInnerIndex(0);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setInnerIndex(0);
  };

  const nextImage = () => {
    const imgs = projects[index].images;
    setInnerIndex((prev) => (prev + 1) % imgs.length);
  };

  const prevImage = () => {
    const imgs = projects[index].images;
    setInnerIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  const project = projects[index];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-4">
            Proyectos seleccionados
          </h2>
          <p className="text-light-pink/60">
            Proyectos donde diseño y negocio trabajan juntos.
          </p>
        </div>

        {/* 🔥 HINT MÓVIL (ARREGLADO) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            md:hidden
            w-fit mx-auto mb-6
            px-4 py-2 rounded-full
            bg-white/5 backdrop-blur-md
            border border-white/10
            text-xs uppercase tracking-widest
            text-[#E5C9D7]/70
            flex items-center gap-2
          "
        >
          Desliza para ver más
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            →
          </motion.span>
        </motion.div>

        {/* CARRUSEL */}
        <div className="relative flex items-center justify-center">

          {/* ← */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative aspect-[16/9] overflow-hidden">

                <motion.img
                  key={innerIndex}
                  src={project.images[innerIndex]}
                  className="w-full h-full object-cover"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-4">
                <p className="text-xs uppercase tracking-widest text-soft-blue">
                  {project.category}
                </p>

                <h3 className="text-2xl font-serif italic text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-light-pink/70">
                  {project.description}
                </p>

                <ul className="text-sm text-light-pink/70 space-y-2">
                  <li><strong className="text-white">Problema:</strong> {project.problem}</li>
                  <li><strong className="text-white">Solución:</strong> {project.solution}</li>
                  <li><strong className="text-white">Resultado:</strong> {project.result}</li>
                </ul>

                <div className="text-xs border border-white/10 rounded-full px-4 py-2 inline-block text-light-pink/70">
                  {project.tech}
                </div>

               <div className="flex items-center justify-between gap-4 mt-4 flex-wrap">

              {/* LINK */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2.5 rounded-full
                    bg-gradient-to-r from-[#C48CB3] to-[#83A6CE]
                    text-white text-sm font-medium
                    hover:scale-105 active:scale-95
                    transition
                    whitespace-nowrap
                  "
                >
                  {project.type === "code" ? "Ver código" : "Ver web"}
                  {project.type === "code"
                    ? <Github size={16} />
                    : <ExternalLink size={16} />}
                </a>
              )}

            </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* → */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Projects;