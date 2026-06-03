import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Building2, FlaskConical, BookMarked, Utensils, Clock, ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const TABS = ["Campus Montes Claros", "Demais Unidades", "Organograma"] as const;
type Tab = typeof TABS[number];

const legenda = [
  { icon: Building2, k: "Prédios", color: "#6E3AFF" },
  { icon: Building2, k: "Administrativos", color: "#1a1a1a" },
  { icon: MapPin, k: "Setores", color: "#FF4D2E" },
  { icon: FlaskConical, k: "Laboratórios", color: "#00B894" },
  { icon: BookMarked, k: "Biblioteca", color: "#FFB800" },
  { icon: Utensils, k: "Restaurante", color: "#FF4D2E" },
];

const predios = [
  { b: "Bloco A", d: "Ciências Exatas e Tecnológicas" },
  { b: "Bloco B", d: "Ciências Sociais Aplicadas" },
  { b: "Bloco C", d: "Ciências Humanas" },
  { b: "Bloco D", d: "Reitoria e setores administrativos" },
];

const setores = [
  { k: "Secretaria Geral", v: "Bloco D · Sala 101" },
  { k: "Coordenação de Cursos", v: "Vários blocos" },
  { k: "Pró-Reitoria de Ensino", v: "Bloco D · Sala 205" },
  { k: "Departamento de Ciências", v: "Bloco A · Sala 102" },
];

const labs = [
  { k: "Informática", v: "Bloco A · Labs 1–4" },
  { k: "Química", v: "Bloco A · Labs 5–7" },
  { k: "Multifuncionais", v: "Bloco B · Labs 1–3" },
  { k: "Ciências", v: "Bloco C · Labs 1–2" },
];

export function UnidadesLocalizacao() {
  const [tab, setTab] = useState<Tab>("Campus Montes Claros");

  return (
    <>
      <PageHeader
        eyebrow="Unidades e Localização"
        title="Conheça nossos campi e setores."
        description="Mapas, prédios, setores, laboratórios e contatos das unidades da Unimontes."
        icon={MapPin}
      />

      {/* Tabs */}
      <section className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto flex max-w-[1400px] gap-7 overflow-x-auto px-6 lg:px-12">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative whitespace-nowrap py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors ${
                tab === t ? "text-[#1a1a1a]" : "text-[#1a1a1a]/45 hover:text-[#1a1a1a]"
              }`}
            >
              {t}
              {tab === t && (
                <motion.span
                  layoutId="unit-tab"
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#6E3AFF]"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {tab === "Campus Montes Claros" && (
          <motion.div
            key="mc"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {/* Mapa + Legenda */}
            <section className="bg-white">
              <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
                <div className="lg:col-span-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6E3AFF]">
                    Mapa interativo
                  </div>
                  <h2 className="mt-5 text-balance text-[36px] font-bold leading-[1.0] tracking-[-0.03em] text-[#1a1a1a] lg:text-[52px]">
                    Clique nos pontos para <em className="font-light italic">explorar.</em>
                  </h2>
                  <div className="mt-8 overflow-hidden rounded-[4px] border border-[#1a1a1a]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                      alt="Mapa do Campus Vila Mauricéia"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a] hover:text-[#6E3AFF]"
                  >
                    Ver mapa interativo do site <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <aside className="lg:col-span-4">
                  <div className="lg:sticky lg:top-40">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
                      Legenda do mapa
                    </div>
                    <ul className="mt-5 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
                      {legenda.map((l) => {
                        const Icon = l.icon;
                        return (
                          <li key={l.k} className="flex items-center gap-3 py-3.5">
                            <span
                              className="flex h-8 w-8 items-center justify-center rounded-[4px]"
                              style={{ backgroundColor: `${l.color}15`, color: l.color }}
                            >
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </span>
                            <span className="text-[13px] font-semibold text-[#1a1a1a]">{l.k}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </aside>
              </div>
            </section>

            {/* Prédios */}
            <section className="border-t border-[#e5e5e5] bg-[#fafafa]">
              <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
                <Reveal>
                  <div className="border-b border-[#1a1a1a] pb-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6E3AFF]">Prédios</div>
                    <h3 className="mt-4 text-balance text-[28px] font-bold tracking-[-0.025em] text-[#1a1a1a] lg:text-[40px]">
                      Quatro blocos principais.
                    </h3>
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                  {predios.map((p, i) => (
                    <Reveal key={p.b} delay={i * 0.05}>
                      <div className={`border-b border-r border-[#e5e5e5] bg-white p-6 lg:[&:nth-child(4n)]:border-r-0`}>
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E3AFF]">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-4 text-[24px] font-bold tracking-[-0.025em] text-[#1a1a1a]">{p.b}</div>
                        <div className="mt-2 text-[14px] leading-[1.5] text-[#1a1a1a]/65">{p.d}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* Setores & Laboratórios */}
            <section className="bg-white">
              <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
                {[
                  { title: "Setores", icon: MapPin, color: "#FF4D2E", items: setores },
                  { title: "Laboratórios", icon: FlaskConical, color: "#00B894", items: labs },
                ].map((g) => {
                  const Icon = g.icon;
                  return (
                    <Reveal key={g.title}>
                      <div>
                        <div className="flex items-center gap-3 border-b border-[#1a1a1a] pb-5">
                          <Icon className="h-5 w-5" style={{ color: g.color }} strokeWidth={1.75} />
                          <h3 className="text-[28px] font-bold tracking-[-0.025em] text-[#1a1a1a]">
                            {g.title}
                          </h3>
                        </div>
                        <dl className="divide-y divide-[#e5e5e5]">
                          {g.items.map((it) => (
                            <div key={it.k} className="flex items-baseline justify-between gap-4 py-4">
                              <dt className="text-[15px] font-semibold text-[#1a1a1a]">{it.k}</dt>
                              <dd className="text-right text-[13px] text-[#1a1a1a]/60">{it.v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </section>

            {/* Biblioteca & RU */}
            <section className="border-t border-[#e5e5e5] bg-[#fafafa]">
              <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-6 py-0 lg:grid-cols-2 lg:px-12">
                <div className="border-b border-[#e5e5e5] py-16 pr-0 lg:border-b-0 lg:border-r lg:py-24 lg:pr-12">
                  <BookMarked className="h-6 w-6 text-[#FFB800]" strokeWidth={1.75} />
                  <h3 className="mt-5 text-[32px] font-bold tracking-[-0.025em] text-[#1a1a1a] lg:text-[40px]">
                    Biblioteca Central
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[#1a1a1a]/65">
                    Acervo de livros, periódicos, teses e dissertações.
                  </p>
                  <dl className="mt-8 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
                    <Row k="Localização" v="Bloco B · Térreo" />
                    <Row k="Horário" v="Seg–sex · 7h–22h · Sáb 8h–12h" />
                  </dl>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a] hover:text-[#6E3AFF]"
                  >
                    Acessar catálogo online <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="py-16 lg:py-24 lg:pl-12">
                  <Utensils className="h-6 w-6 text-[#FF4D2E]" strokeWidth={1.75} />
                  <h3 className="mt-5 text-[32px] font-bold tracking-[-0.025em] text-[#1a1a1a] lg:text-[40px]">
                    Restaurante Universitário
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[#1a1a1a]/65">
                    Refeições subsidiadas aos estudantes regularmente matriculados.
                  </p>
                  <dl className="mt-8 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
                    <Row k="Café da manhã" v="07h–09h" icon={Clock} />
                    <Row k="Almoço" v="11h–14h" icon={Clock} />
                    <Row k="Jantar" v="17h–19h30" icon={Clock} />
                    <Row k="Localização" v="Bloco E · Térreo" icon={MapPin} />
                  </dl>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {tab !== "Campus Montes Claros" && (
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white"
          >
            <div className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-12 lg:py-32">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
                Em construção
              </div>
              <h3 className="mt-4 text-balance text-[32px] font-bold tracking-[-0.025em] text-[#1a1a1a]">
                Conteúdo de <em className="font-light italic">{tab}</em>
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] text-[#1a1a1a]/60">
                Esta aba será publicada em breve com unidades, organograma e
                contatos institucionais.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Row({ k, v, icon: Icon }: { k: string; v: string; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="flex items-center gap-2 text-[13px] font-semibold text-[#1a1a1a]">
        {Icon && <Icon className="h-3.5 w-3.5 text-[#1a1a1a]/40" />}
        {k}
      </dt>
      <dd className="text-right text-[13px] text-[#1a1a1a]/65">{v}</dd>
    </div>
  );
}
