import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Home, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { Reveal } from "../components/shared/Reveal";

const TABS = [
  { id: "sobre", label: "Sobre o Curso" },
  { id: "matriz", label: "Matriz e PPC" },
  { id: "estagio", label: "Estágio e TCC" },
  { id: "documentos", label: "Documentos" },
  { id: "coordenacao", label: "Coordenação" },
  { id: "atletica", label: "Atlética" },
];

export function CursoDetalhe() {
  const { slug } = useParams();
  const [tab, setTab] = useState("sobre");
  const nome = slugToName(slug ?? "direito");

  return (
    <>
      {/* Breadcrumb + header card */}
      <section className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/50">
            <Link to="/" className="flex items-center gap-1.5 hover:text-[#6E3AFF]"><Home className="h-3 w-3" /> Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/cursos" className="hover:text-[#6E3AFF]">Cursos</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1a1a1a]">{nome}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#6E3AFF]">
                <span className="h-px w-10 bg-[#6E3AFF]" />
                Graduação Bacharelado
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-balance text-[44px] font-bold leading-[0.95] tracking-[-0.04em] text-[#1a1a1a] lg:text-[88px]"
              >
                {nome}
              </motion.h1>
              <div className="mt-8 grid grid-cols-3 gap-0 border-t border-[#e5e5e5]">
                {[
                  ["Tipo", "Integral"],
                  ["Duração", "5 anos"],
                  ["Vagas", "100/ano"],
                ].map(([k, v], i) => (
                  <div key={k} className={`py-5 ${i < 2 ? "border-r border-[#e5e5e5]" : ""}`}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/50">{k}</div>
                    <div className="mt-1.5 text-[24px] font-bold tracking-[-0.025em] text-[#1a1a1a]">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[4px] border border-[#e5e5e5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt={`Curso de ${nome}`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-[125px] z-30 border-b border-[#e5e5e5] bg-white lg:top-[125px]">
        <div className="mx-auto flex max-w-[1400px] gap-7 overflow-x-auto px-6 lg:px-12">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative whitespace-nowrap py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors ${tab === t.id ? "text-[#1a1a1a]" : "text-[#1a1a1a]/45 hover:text-[#1a1a1a]"
                }`}
            >
              {t.label}
              {tab === t.id && (
                <motion.span
                  layoutId="course-tab"
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#6E3AFF]"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Panel content */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {tab === "sobre" && <Sobre nome={nome} />}
              {tab !== "sobre" && <Placeholder label={TABS.find((t) => t.id === tab)?.label ?? ""} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function Sobre({ nome }: { nome: string }) {
  const dados = [
    ["Duração", "5 anos (10 períodos)"],
    ["Centro de Ensino", "CCSA — Centro de Ciências Sociais Aplicadas"],
    ["Campus", "Montes Claros"],
    ["Tipo", "Bacharelado"],
    ["Modalidade", "Presencial"],
    ["Turno", "Noturno"],
    ["Vagas", "100 vagas anuais"],
  ];
  const perfil = [
    "Interpretar normas jurídicas com rigor técnico e sensibilidade social.",
    "Atuar na defesa de direitos e na promoção da cidadania.",
    "Compreender a função social do Direito em contextos contemporâneos.",
    "Desenvolver raciocínio lógico-jurídico e capacidade argumentativa.",
    "Realizar pesquisa científica aplicada às ciências jurídicas.",
    "Exercer liderança e trabalhar em equipes multidisciplinares.",
  ];
  const mercado = [
    { k: "Advocacia", v: "Atuação privada em escritórios ou autônoma em diversas áreas." },
    { k: "Magistratura", v: "Carreira pública após aprovação em concurso para juiz." },
    { k: "Ministério Público", v: "Promotoria e procuradoria nas esferas estadual e federal." },
    { k: "Defensoria Pública", v: "Assistência jurídica gratuita à população." },
    { k: "Carreiras Policiais", v: "Delegado, polícia federal, civil e legislativa." },
    { k: "Consultoria Jurídica", v: "Assessoria estratégica para empresas e órgãos públicos." },
    { k: "Conciliação e Arbitragem", v: "Mediação de conflitos e câmaras arbitrais." },
    { k: "Docência e Pesquisa", v: "Carreira acadêmica e produção científica." },
  ];
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6E3AFF]">
          Descrição do curso
        </div>
        <h2 className="mt-5 text-balance text-[32px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1a1a1a] lg:text-[44px]">
          Forme-se em <em className="font-light italic">{nome}</em> na Unimontes.
        </h2>
        <div className="mt-6 space-y-5 text-[16px] leading-[1.65] text-[#1a1a1a]/70">
          <p>
            O curso forma profissionais críticos e humanistas, capazes de
            interpretar a realidade social e atuar com responsabilidade ética
            nos diversos campos do {nome.toLowerCase()}.
          </p>
          <p>
            Áreas cobertas pela formação: Constitucional, Civil, Penal,
            Administrativo, Tributário, Empresarial, do Trabalho, Processual e
            Direitos Humanos — combinando teoria, prática e atividades de
            extensão com a comunidade.
          </p>
          <p>
            A infraestrutura inclui salas amplas, biblioteca especializada,
            núcleo de prática jurídica e atendimento gratuito à população
            através do Escritório Modelo.
          </p>
        </div>

        <div className="mt-14">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6E3AFF]">
            Perfil do egresso
          </div>
          <ul className="mt-5 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
            {perfil.map((p) => (
              <li key={p} className="flex items-start gap-4 py-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6E3AFF]" strokeWidth={2} />
                <span className="text-[15px] leading-[1.55] text-[#1a1a1a]/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6E3AFF]">
            Mercado de trabalho
          </div>
          <div className="mt-5 grid grid-cols-1 gap-0 border-t border-[#e5e5e5] sm:grid-cols-2">
            {mercado.map((m, i) => (
              <Reveal key={m.k} delay={(i % 4) * 0.04}>
                <div className={`border-b border-[#e5e5e5] p-6 ${i % 2 === 0 ? "sm:border-r" : ""}`}>
                  <div className="text-[16px] font-bold tracking-[-0.015em] text-[#1a1a1a]">{m.k}</div>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#1a1a1a]/65">{m.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <aside className="lg:col-span-5">
        <div className="rounded-[4px] border border-[#1a1a1a] bg-[#1a1a1a] p-8 text-white lg:sticky lg:top-[210px]">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFB800]">
            Dados do curso
          </div>
          <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {dados.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">{k}</dt>
                <dd className="text-right text-[14px] font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="border-t border-[#e5e5e5] py-20 text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
        Em construção
      </div>
      <h3 className="mt-4 text-balance text-[32px] font-bold tracking-[-0.025em] text-[#1a1a1a]">
        Conteúdo de <em className="font-light italic">{label}</em>
      </h3>
      <p className="mx-auto mt-3 max-w-md text-[15px] text-[#1a1a1a]/60">
        Esta seção será publicada em breve com matriz curricular, ementas,
        documentos e contatos da coordenação.
      </p>
    </div>
  );
}

function slugToName(slug: string) {
  return slug
    .split("-")
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join(" ");
}
