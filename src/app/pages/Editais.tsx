import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ClipboardList, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

type Status = "Aberto" | "Encerrado";
type Tipo = "Edital" | "Estágio" | "Bolsa" | "Pesquisa" | "Extensão";

const editais: { id: number; titulo: string; status: Status; tipo: Tipo; curso: string; campus: string; prazo: string }[] = [
  { id: 1, titulo: "Edital de Monitoria 2026/1", status: "Aberto", tipo: "Edital", curso: "Diversos", campus: "Montes Claros", prazo: "20/08/2026" },
  { id: 2, titulo: "Edital de Extensão — Projeto Comunidade", status: "Aberto", tipo: "Extensão", curso: "Direito · Pedagogia", campus: "Montes Claros", prazo: "25/08/2026" },
  { id: 3, titulo: "PIBIC 2026", status: "Encerrado", tipo: "Pesquisa", curso: "Todos", campus: "Todos", prazo: "15/07/2026" },
  { id: 4, titulo: "Estágio em Empresas Parceiras", status: "Aberto", tipo: "Estágio", curso: "Administração", campus: "Montes Claros", prazo: "30/08/2026" },
  { id: 5, titulo: "Programa de Bolsa Permanência 2026/2", status: "Aberto", tipo: "Bolsa", curso: "Todos", campus: "Todos", prazo: "10/08/2026" },
  { id: 6, titulo: "Mobilidade Acadêmica Internacional", status: "Encerrado", tipo: "Edital", curso: "Todos", campus: "Todos", prazo: "05/07/2026" },
];

const tabs: ("Todos" | Status)[] = ["Todos", "Aberto", "Encerrado"];
const tipos: ("Todos" | Tipo)[] = ["Todos", "Edital", "Estágio", "Bolsa", "Pesquisa", "Extensão"];

export function Editais() {
  const [status, setStatus] = useState<"Todos" | Status>("Todos");
  const [tipo, setTipo] = useState<"Todos" | Tipo>("Todos");

  const filtered = useMemo(
    () =>
      editais.filter(
        (e) =>
          (status === "Todos" || e.status === status) &&
          (tipo === "Todos" || e.tipo === tipo),
      ),
    [status, tipo],
  );

  return (
    <>
      <PageHeader
        eyebrow="Editais e Oportunidades"
        title="Editais, bolsas, estágios e oportunidades."
        description="Esta seção reúne oportunidades acadêmicas com prazos, filtros e agrupamentos por tema, curso e campus."
        icon={ClipboardList}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-[#1a1a1a] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
                  Status
                </div>
                <div className="mt-3 flex gap-2">
                  {tabs.map((t) => (
                    <button
                      key={t}
                      onClick={() => setStatus(t)}
                      className={`rounded-[3px] border px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
                        status === t
                          ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                          : "border-[#e5e5e5] bg-white text-[#1a1a1a]/65 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
                  Tipo
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tipos.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTipo(t)}
                      className={`rounded-[3px] border px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
                        tipo === t
                          ? "border-[#6E3AFF] bg-[#6E3AFF] text-white"
                          : "border-[#e5e5e5] bg-white text-[#1a1a1a]/65 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]">
              {filtered.length} {filtered.length === 1 ? "edital" : "editais"}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
          <div className="divide-y divide-[#e5e5e5] border-b border-[#e5e5e5]">
            {filtered.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.04}>
                <motion.article
                  whileHover={{ x: 4 }}
                  className="group grid grid-cols-12 items-start gap-6 py-8"
                >
                  <div className="col-span-12 lg:col-span-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white ${
                        e.status === "Aberto" ? "bg-[#00B894]" : "bg-[#1a1a1a]/50"
                      }`}
                    >
                      <span className="h-1 w-1 rounded-full bg-white" />
                      {e.status}
                    </span>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E3AFF]">
                      {e.tipo}
                    </div>
                    <h3 className="mt-2 text-balance text-[24px] font-bold leading-[1.1] tracking-[-0.025em] text-[#1a1a1a] lg:text-[28px]">
                      {e.titulo}
                    </h3>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/55">
                      <span>Curso · {e.curso}</span>
                      <span>Campus · {e.campus}</span>
                      <span>Prazo · {e.prazo}</span>
                    </div>
                  </div>
                  <div className="col-span-12 flex items-start justify-end lg:col-span-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 border-b border-[#1a1a1a] pb-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a] transition-colors group-hover:border-[#6E3AFF] group-hover:text-[#6E3AFF]"
                    >
                      Ver edital <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/50">
            <button className="inline-flex items-center gap-1.5 hover:text-[#1a1a1a]">
              <ChevronLeft className="h-3.5 w-3.5" /> Anterior
            </button>
            <span>Página 1 / 1</span>
            <button className="inline-flex items-center gap-1.5 hover:text-[#1a1a1a]">
              Próxima <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
