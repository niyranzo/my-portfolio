import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Servicios", href: "#services" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      {/* 🔥 DESKTOP */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div className="
            flex items-center gap-2 px-3 py-2 rounded-full
            bg-[#0B1B32]/70 backdrop-blur-xl
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
          ">
            {navLinks.map((link) => {
              const isActive = active === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className="relative px-5 py-2 rounded-full text-sm font-medium"
                >
                  {/* ACTIVE PILL */}
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C48CB3] to-[#83A6CE]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  {/* TEXT */}
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-[#E5C9D7]/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE */}
      <div className="md:hidden fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-7xl mx-auto">

          {/* BAR */}
          <div className="
            flex justify-between items-center
            bg-[#0B1B32]/80 backdrop-blur-xl
            rounded-full px-5 py-3
            border border-white/10
            shadow-lg
          ">
            <span className="font-serif text-white text-lg">Nicole</span>

            <button
              onClick={() => setIsMobile(!isMobile)}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              {isMobile ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

          {/* MENU */}
          <AnimatePresence>
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="
                  mt-3 p-6 rounded-2xl font-serif
                  bg-[#0B1B32]/95 backdrop-blur-xl
                  border border-white/10
                  shadow-xl
                  flex flex-col gap-4
                "
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setIsMobile(false);
                    }}
                    className="
                      text-xl font-medium
                      text-white
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}