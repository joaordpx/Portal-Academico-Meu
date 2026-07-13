import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink, Image as ImageIcon, Info } from "lucide-react";
import { Reveal } from "../shared/Reveal";

type Section = {
  id: string;
  label: string;
  content: ReactNode;
};

export function SectionLayout({
  popular,
  tags,
  searchPlaceholder,
  sections,
  related,
}: {
  popular: { label: string; href?: string }[];
  tags: string[];
  searchPlaceholder: string;
  sections: Section[];
  related: { label: string; to: string }[];
}) {
  const [active, setActive] = useState(sections[0]?.id);

  return (
    <>
      {/* Mais acessados + Search */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-12 lg:px-12 lg:pt-12 lg:pb-16">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
            Mais acessados
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {popular.map((p) => (
              <a
                key={p.label}
                href={p.href ?? "#"}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1a1a1a] bg-white px-4 py-1.5 text-[12px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
              >
                {p.label}
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex items-center rounded-[4px] border border-[#e5e5e5] bg-white focus-within:border-[#6E3AFF] cursor: cursor-pointer"
          >
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="flex-1 bg-transparent px-5 py-4 text-[14px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none"
            />
            <button
              type="submit"
              className="m-1.5 inline-flex items-center gap-2 rounded-[3px] bg-[#1a1a1a] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#6E3AFF]"
            >
              Buscar
            </button>
          </form>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/35">
              Sugestões:
            </span>
            {tags.map((t) => (
              <button
                key={t}
                className="text-[12px] text-[#1a1a1a]/60 transition-colors hover:text-[#6E3AFF]"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar + active section content */}
      <section className="border-t border-[#e5e5e5] bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-40">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
                Nesta seção
              </div>
              <nav className="mt-5 flex flex-col border-t border-[#e5e5e5]">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`group flex items-center justify-between border-b border-[#e5e5e5] py-3.5 text-left text-[13px] transition-colors ${active === s.id
                      ? "font-bold text-[#1a1a1a]"
                      : "font-medium text-[#1a1a1a]/55 hover:text-[#1a1a1a]"
                      }`}
                  >
                    <span>{s.label}</span>
                    {active === s.id && (
                      <motion.span
                        layoutId="section-dot"
                        className="h-1.5 w-1.5 rounded-full bg-[#6E3AFF]"
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {sections.find((s) => s.id === active)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Links relacionados */}
      {related.length > 0 && (
        <section className="bg-[#fafafa]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
            <Reveal>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6E3AFF]">
                Links relacionados
              </div>
              <div className="mt-6 grid grid-cols-1 gap-0 border-t border-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.label}
                    to={r.to}
                    className="group flex items-center justify-between border-b border-[#e5e5e5] py-5 transition-colors hover:text-[#6E3AFF]"
                  >
                    <span className="text-[16px] font-bold tracking-[-0.015em] text-[#1a1a1a] group-hover:text-[#6E3AFF]">
                      {r.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#1a1a1a]/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6E3AFF]" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

/* Helper: editorial card row used inside section panels */
export function PanelCardGrid({
  intro,
  cards,
}: {
  intro?: string;
  cards: { title: string; desc: string; href?: string }[];
}) {
  return (
    <div>
      {intro && (
        <p className="max-w-2xl text-[17px] leading-[1.6] text-[#1a1a1a]/70">
          {intro}
        </p>
      )}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((c, i) => (
          <a
            key={c.title}
            href={c.href ?? "#"}
            className="group relative flex flex-col justify-between gap-6 rounded-[10px] border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6E3AFF]/50 hover:shadow-[0_10px_28px_rgba(110,58,255,0.12)]"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Indicador persistente de que o card é clicável */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] text-[#1a1a1a]/50 transition-all duration-200 group-hover:border-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <h3 className="mt-4 text-balance text-[22px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
                {c.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#1a1a1a]/65">
                {c.desc}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/70">
              Acessar
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* Helper: painel de redirecionamento para uma fonte oficial externa (ex.: site da Unimontes) */
export function PanelRedirect({
  intro,
  eyebrow = "Site oficial da Unimontes",
  title,
  note,
  href,
}: {
  intro?: string;
  eyebrow?: string;
  title: string;
  note?: string;
  href: string;
}) {
  return (
    <div>
      {intro && (
        <p className="max-w-2xl text-[17px] leading-[1.6] text-[#1a1a1a]/70">{intro}</p>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 flex flex-col gap-6 rounded-[12px] border border-[#e5e5e5] bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6E3AFF]/50 hover:shadow-[0_10px_28px_rgba(110,58,255,0.12)] sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E3AFF]">
            <ExternalLink className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h3 className="mt-3 text-balance text-[26px] font-bold leading-[1.1] tracking-[-0.025em] text-[#1a1a1a]">
            {title}
          </h3>
          {note && (
            <p className="mt-3 max-w-xl text-[14px] leading-[1.55] text-[#1a1a1a]/60">{note}</p>
          )}
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-[6px] bg-[#1a1a1a] px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:bg-[#6E3AFF] sm:self-auto">
          Abrir
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </div>
  );
}

type Step = { title: string; desc: string; image?: string; imageLabel?: string };
type Track = { id: string; label: string; note?: string; steps: Step[] };

/* Helper: passo a passo com trilhas alternáveis (ex.: matrícula inicial x renovação) */
export function PanelSteps({ intro, tracks }: { intro?: string; tracks: Track[] }) {
  const [active, setActive] = useState(tracks[0]?.id);
  const current = tracks.find((t) => t.id === active) ?? tracks[0];

  return (
    <div>
      {intro && (
        <p className="max-w-2xl text-[17px] leading-[1.6] text-[#1a1a1a]/70">{intro}</p>
      )}

      {tracks.length > 1 && (
        <div className="mt-8 inline-flex flex-wrap gap-1 rounded-[8px] border border-[#e5e5e5] bg-[#fafafa] p-1">
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative rounded-[6px] px-4 py-2.5 text-[13px] font-bold transition-colors ${
                current.id === t.id ? "text-white" : "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
              }`}
            >
              {current.id === t.id && (
                <motion.span
                  layoutId="track-pill"
                  className="absolute inset-0 rounded-[6px] bg-[#1a1a1a]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {current.note && (
            <div className="mt-8 flex items-start gap-3 rounded-[8px] border border-[#e5e5e5] bg-[#fafafa] p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#6E3AFF]" />
              <p className="text-[14px] leading-[1.55] text-[#1a1a1a]/75">{current.note}</p>
            </div>
          )}

          <ol className="mt-10">
            {current.steps.map((s, i) => (
              <li key={i} className="relative flex gap-5 pb-9 last:pb-0">
                {/* Linha conectora vertical */}
                {i < current.steps.length - 1 && (
                  <span className="absolute left-[17px] top-10 h-[calc(100%-1.5rem)] w-px bg-[#e5e5e5]" />
                )}
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1a1a1a] bg-white text-[13px] font-bold text-[#1a1a1a]">
                  {i + 1}
                </span>
                <div className="flex-1 pt-1">
                  <h4 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1a1a]">
                    {s.title}
                  </h4>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-[#1a1a1a]/65">{s.desc}</p>
                  {(s.image || s.imageLabel) && (
                    <div className="mt-4 overflow-hidden rounded-[8px] border border-dashed border-[#d5d5d5] bg-[#fafafa]">
                      {s.image ? (
                        <img src={s.image} alt={s.imageLabel ?? s.title} className="w-full" />
                      ) : (
                        <div className="flex items-center gap-2.5 px-4 py-6 text-[12px] font-semibold text-[#1a1a1a]/40">
                          <ImageIcon className="h-4 w-4" />
                          {s.imageLabel ?? "Imagem ilustrativa"}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
