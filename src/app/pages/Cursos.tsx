import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/shared/Reveal";

const courses = [
  { slug: "direito", nome: "Direito", grau: "Bacharelado", campus: "Montes Claros", centro: "CCSA", turno: "Noturno", area: "Sociais Aplicadas" },
  { slug: "pedagogia", nome: "Pedagogia", grau: "Licenciatura", campus: "Montes Claros", centro: "CCH", turno: "Noturno", area: "Educação" },
  { slug: "sistemas-de-informacao", nome: "Sistemas de Informação", grau: "Bacharelado", campus: "Montes Claros", centro: "CCET", turno: "Noturno", area: "Exatas" },
  { slug: "enfermagem", nome: "Enfermagem", grau: "Bacharelado", campus: "Montes Claros", centro: "CCBS", turno: "Integral", area: "Saúde" },
  { slug: "administracao", nome: "Administração", grau: "Bacharelado", campus: "Montes Claros", centro: "CCSA", turno: "Noturno", area: "Sociais Aplicadas" },
  { slug: "ciencias-contabeis", nome: "Ciências Contábeis", grau: "Bacharelado", campus: "Montes Claros", centro: "CCSA", turno: "Noturno", area: "Sociais Aplicadas" },
  { slug: "engenharia-civil", nome: "Engenharia Civil", grau: "Bacharelado", campus: "Montes Claros", centro: "CCET", turno: "Integral", area: "Exatas" },
  { slug: "medicina", nome: "Medicina", grau: "Bacharelado", campus: "Montes Claros", centro: "CCBS", turno: "Integral", area: "Saúde" },
  { slug: "historia", nome: "História", grau: "Licenciatura", campus: "Montes Claros", centro: "CCH", turno: "Noturno", area: "Humanas" },
];

const filters = {
  centro: ["Todos", "CCET", "CCSA", "CCBS", "CCH"],
  turno: ["Todos", "Integral", "Noturno"],
  grau: ["Todos", "Bacharelado", "Licenciatura"],
};

export function Cursos() {
  const [centro, setCentro] = useState("Todos");
  const [turno, setTurno] = useState("Todos");
  const [grau, setGrau] = useState("Todos");

  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          (centro === "Todos" || c.centro === centro) &&
          (turno === "Todos" || c.turno === turno) &&
          (grau === "Todos" || c.grau === grau),
      ),
    [centro, turno, grau],
  );

  return (
    <>
      <PageHeader
        eyebrow="Cursos"
        title="Explore os cursos da Unimontes."
        description="Cursos de graduação presencial organizados por centros de ensino, áreas e turnos."
        icon={BookOpen}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-20">
          {/* Filters */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-40">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
                Filtros
              </div>

              {[
                { label: "Centro de Ensino", value: centro, set: setCentro, opts: filters.centro },
                { label: "Turno", value: turno, set: setTurno, opts: filters.turno },
                { label: "Grau", value: grau, set: setGrau, opts: filters.grau },
              ].map((f) => (
                <div key={f.label} className="mt-8 border-t border-[#e5e5e5] pt-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]">
                    {f.label}
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    {f.opts.map((o) => (
                      <button
                        key={o}
                        onClick={() => f.set(o)}
                        className={`text-left text-[13px] transition-colors ${f.value === o ? "font-bold text-[#6E3AFF]" : "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                          }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  setCentro("Todos");
                  setTurno("Todos");
                  setGrau("Todos");
                }}
                className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a]/55 hover:text-[#1a1a1a]"
              >
                Limpar filtros
              </button>
            </div>
          </aside>

          {/* Listing */}
          <div className="lg:col-span-9">
            <div className="flex items-end justify-between border-b border-[#1a1a1a] pb-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/50">
                Exibindo
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]">
                {filtered.length} {filtered.length === 1 ? "curso" : "cursos"}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
              {filtered.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 4) * 0.04}>
                  <motion.div whileHover={{ y: -2 }} className="h-full">
                    <Link
                      to={`/cursos/${c.slug}`}
                      className={`group flex h-full flex-col justify-between gap-6 border-b border-[#e5e5e5] p-7 transition-colors hover:bg-[#fafafa] ${i % 2 === 0 ? "sm:border-r" : ""
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E3AFF]">
                            {c.grau}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/35">
                            {c.turno}
                          </span>
                        </div>
                        <h3 className="mt-4 text-balance text-[28px] font-bold leading-[1.05] tracking-[-0.025em] text-[#1a1a1a]">
                          {c.nome}
                        </h3>
                        <dl className="mt-5 space-y-1.5 text-[12px]">
                          {[
                            ["Campus", c.campus],
                            ["Centro", c.centro],
                            ["Área", c.area],
                          ].map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-3">
                              <dt className="font-bold uppercase tracking-[0.14em] text-[#1a1a1a]/40">
                                {k}
                              </dt>
                              <dd className="text-right font-semibold text-[#1a1a1a]/80">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a] transition-colors group-hover:text-[#6E3AFF]">
                        Ver informações do curso
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-[#e5e5e5] pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/50">
              <button className="inline-flex items-center gap-1.5 hover:text-[#1a1a1a]">
                <ChevronLeft className="h-3.5 w-3.5" /> Anterior
              </button>
              <span>Página 1 / 1</span>
              <button className="inline-flex items-center gap-1.5 hover:text-[#1a1a1a]">
                Próxima <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
