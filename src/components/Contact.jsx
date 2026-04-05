import { Github, Send, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 md:p-20 overflow-hidden relative border-white/5">

          <div className="absolute top-0 right-0 w-64 h-64 bg-muted-pink/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-blue/20 rounded-full blur-3xl -z-10" />

          {/* 🔥 GRID RESPONSIVE */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">

            {/* LEFT */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8 text-white">
                ¿Tienes una idea? <br />
                <span className="text-soft-blue">Hagámosla real.</span>
              </h2>

              <p className="text-base md:text-lg text-light-pink/60 mb-10">
                Estoy disponible para nuevos proyectos y colaboraciones creativas.
              </p>

              <div className="space-y-6">

                {/* EMAIL */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Send size={18} className="text-soft-blue" />
                  </div>

                  {/* 🔥 FIX WRAP */}
                  <p className="text-white break-all text-sm md:text-base">
                    yranzo.nicole@gmail.com
                  </p>
                </div>

                {/* GITHUB */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Github size={18} className="text-soft-blue" />
                  </div>

                  <p className="text-white text-sm md:text-base">
                    @niyranzo
                  </p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <form 
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="fdb0e5fd-6361-4451-85ab-4a0f9196a898" />
              <input type="hidden" name="subject" value="Nuevo mensaje" />

              {/* 🔥 MOBILE → 1 COL / DESKTOP → 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-xs uppercase text-light-pink/50">Nombre</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase text-light-pink/50">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-light-pink/50">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                />
              </div>

              <button className="
                w-full py-4 rounded-2xl font-bold 
                flex justify-center items-center gap-2
                bg-soft-blue text-white

                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-md hover:shadow-soft-blue/40
                active:scale-[0.97]
              ">
                Enviar Mensaje <Send size={18} />
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;