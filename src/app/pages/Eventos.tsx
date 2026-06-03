import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarHeart, MapPin, Clock, Search } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Tipo = "Cultural" | "Acadêmico" | "Comunitário";

const events: { dia: string; mes: string; tipo: Tipo; titulo: string; desc: string; quando: string; local: string; img: string }[] = [
  { dia: "16", mes: "Jun", tipo: "Acadêmico", titulo: "Semana do Direito 2026", desc: "Palestras, mesas-redondas e workshops sobre temas atuais do direito brasileiro.", quando: "16/06/2026 · 08h–18h", local: "Auditório Central · Montes Claros", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
  { dia: "28", mes: "Jun", tipo: "Cultural", titulo: "Eclipse Cultural — Mostra de Arte e Fotografia", desc: "Exposição com trabalhos dos cursos de Artes e Comunicação.", quando: "28/06/2026 · 14h–22h", local: "Galeria da UNIMONTES", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
  { dia: "31", mes: "Jul", tipo: "Acadêmico", titulo: "Hackathon Tecnologias, Inovação e Sociedade", desc: "Competição de 48h para soluções tecnológicas com impacto social.", quando: "31/07/2026 · 48h", local: "Bloco de Informática", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
  { dia: "05", mes: "Set", tipo: "Comunitário", titulo: "Simpósio de Extensão Universitária", desc: "Projetos de extensão com comunidades do Norte de Minas.", quando: "05/09/2026 · 09h–17h", local: "Auditório Central", img: "https://images.unsplash.com/photo-1559223607-a43c990c692c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
  { dia: "18", mes: "Set", tipo: "Cultural", titulo: "Noite Cultural — DCE UNIMONTES", desc: "Música, teatro e exposições produzidas pelo DCE.", quando: "18/09/2026 · 19h", local: "Praça de Convivência", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
];

const tabs: ("Todos" | Tipo)[] = ["Todos", "Cultural", "Acadêmico", "Comunitário"];

const tipoColor: Record<Tipo, string> = {
  Cultural: "#FF4D2E",
  Acadêmico: "#6E3AFF",
  Comunitário: "#00B894",
};

export function Eventos() {
  const [tipo, setTipo] = useState<"Todos" | Tipo>("Todos");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      events.filter(
        (e) =>
          (tipo === "Todos" || e.tipo === tipo) &&
          (q === "" || e.titulo.toLowerCase().includes(q.toLowerCase())),
      ),
    [tipo, q],
  );

  return (
    <>
      <PageHeader
        eyebrow="Eventos"
        title="O que está acontecendo na Unimontes."
        description="Eventos acadêmicos, culturais e comunitários abertos à comunidade universitária."
        icon={CalendarHeart}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-[#1a1a1a] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTipo(t)}
                  className={`rounded-[3px] border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors ${
                    tipo === t
                      ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                      : "border-[#e5e5e5] bg-white text-[#1a1a1a]/65 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-[4px] border border-[#e5e5e5] bg-white px-4 py-2.5 focus-within:border-[#6E3AFF] sm:w-72">
              <Search className="h-4 w-4 text-[#1a1a1a]/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar evento..."
                className="w-full bg-transparent text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-12 lg:py-20">
          <div className="divide-y divide-[#e5e5e5] border-b border-[#e5e5e5]">
            {filtered.map((e, i) => (
              <Reveal key={e.titulo} delay={i * 0.05}>
                <motion.article
                  whileHover={{ x: 4 }}
                  className="group grid grid-cols-12 items-stretch gap-6 py-10"
                >
                  <div className="col-span-12 lg:col-span-2">
                    <div className="inline-flex flex-col items-center justify-center rounded-[4px] border border-[#1a1a1a] bg-[#1a1a1a] px-4 py-4 text-white">
                      <span className="text-[40px] font-bold leading-none tracking-[-0.04em]">{e.dia}</span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]">{e.mes}</span>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: tipoColor[e.tipo] }}
                    >
                      {e.tipo}
                    </span>
                    <h3 className="mt-2 text-balance text-[26px] font-bold leading-[1.1] tracking-[-0.025em] text-[#1a1a1a] lg:text-[32px]">
                      {e.titulo}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-[#1a1a1a]/65">{e.desc}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#1a1a1a]/65">
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#1a1a1a]/40" /> {e.quando}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#1a1a1a]/40" /> {e.local}</span>
                    </div>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a] transition-colors group-hover:text-[#6E3AFF]"
                    >
                      Ver evento <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="col-span-12 lg:col-span-3">
                    <div className="h-full overflow-hidden rounded-[4px] border border-[#e5e5e5]">
                      <ImageWithFallback
                        src={e.img}
                        alt={e.titulo}
                        className="h-full min-h-[140px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
