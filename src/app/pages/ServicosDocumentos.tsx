import { ArrowUpRight, FileText } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { SectionLayout, PanelCardGrid } from "../components/layout/SectionLayout";

const popular = [
  { label: "WebGiz" },
  { label: "Documentos Acadêmicos" },
  { label: "Requerimentos" },
  { label: "Protocolos e Prazos" },
  { label: "Outros Sistemas" },
];

const tags = [
  "declaração de matrícula",
  "histórico escolar",
  "segunda chamada",
  "trancamento",
  "recuperar senha",
];

const sections = [
  {
    id: "webgiz",
    label: "WebGiz",
    content: (
      <div>
        <p className="max-w-2xl text-[17px] leading-[1.6] text-[#1a1a1a]/70">
          Acesse serviços acadêmicos relacionados a notas, frequência, histórico
          escolar, matrícula e recuperação de senha pelo sistema WebGiz.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-0 border-t border-[#e5e5e5] sm:grid-cols-2">
          {[
            { t: "Acesso & Recuperar senha", d: "Primeiro acesso, redefinição de senha e suporte." },
            { t: "Notas & Frequência", d: "Consulta de boletim por disciplina e período." },
            { t: "Histórico Escolar", d: "Emissão de histórico completo em PDF." },
            { t: "Matrícula", d: "Renovação semestral e ajuste de disciplinas." },
          ].map((c, i) => (
            <a
              key={c.t}
              href="#"
              className={`group flex flex-col justify-between gap-6 border-b border-[#e5e5e5] p-7 transition-colors hover:bg-[#fafafa] ${i % 2 === 0 ? "sm:border-r" : ""
                }`}
            >
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/35">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-[22px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">{c.t}</h3>
                <p className="mt-3 text-[14px] leading-[1.55] text-[#1a1a1a]/65">{c.d}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a] transition-colors group-hover:text-[#6E3AFF]">
                Abrir
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>

        <a
          href="#"
          className="mt-10 inline-flex items-center gap-2 rounded-[4px] bg-[#1a1a1a] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#6E3AFF]"
        >
          Acessar WebGiz <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    ),
  },
  {
    id: "documentos",
    label: "Documentos Acadêmicos",
    content: (
      <PanelCardGrid
        intro="Solicite e baixe os principais documentos acadêmicos diretamente pelo portal."
        cards={[
          { title: "Declaração de Matrícula", desc: "Emissão imediata em PDF para fins diversos." },
          { title: "Histórico Escolar", desc: "Histórico parcial ou final, com ementas opcionais." },
          { title: "Certificados", desc: "Certificados de cursos, eventos e atividades complementares." },
          { title: "Diploma", desc: "Solicitação após conclusão e colação de grau." },
        ]}
      />
    ),
  },
  {
    id: "requerimentos",
    label: "Requerimentos",
    content: (
      <PanelCardGrid
        intro="Abertura e acompanhamento de requerimentos administrativos e acadêmicos."
        cards={[
          { title: "Trancamento de matrícula", desc: "Trancamento total do semestre." },
          { title: "Dispensa de disciplina", desc: "Aproveitamento de estudos cursados." },
          { title: "Revisão de prova", desc: "Pedido de revisão de avaliação." },
          { title: "Segunda chamada", desc: "Avaliação substitutiva em caso de falta justificada." },
        ]}
      />
    ),
  },
  {
    id: "formularios",
    label: "Formulários",
    content: (
      <PanelCardGrid
        intro="Modelos oficiais em PDF para entrega física ou anexar em requerimentos."
        cards={[
          { title: "Formulário de Estágio", desc: "Plano e termo de compromisso." },
          { title: "Termo de Aproveitamento", desc: "Disciplinas equivalentes de outra instituição." },
          { title: "Formulário TCC", desc: "Cadastro de orientação e banca." },
          { title: "Declaração para fins de IR", desc: "Comprovante anual de pagamentos." },
        ]}
      />
    ),
  },
  {
    id: "protocolos",
    label: "Protocolos e Prazos",
    content: (
      <PanelCardGrid
        intro="Calendário de protocolos administrativos com prazos de resposta."
        cards={[
          { title: "Acompanhar protocolo", desc: "Consulte o status do seu pedido pelo número." },
          { title: "Prazos por tipo", desc: "Tabela com SLA de cada categoria de requerimento." },
          { title: "Recursos administrativos", desc: "Como recorrer de indeferimentos." },
          { title: "Atendimento presencial", desc: "Bloco D, térreo — segunda a sexta, 8h às 17h." },
        ]}
      />
    ),
  },
  {
    id: "outros",
    label: "Outros Sistemas",
    content: (
      <PanelCardGrid
        intro="Plataformas complementares utilizadas pela comunidade acadêmica."
        cards={[
          { title: "Moodle", desc: "Ambiente virtual de aprendizagem." },
          { title: "E-mail institucional", desc: "Google Workspace @unimontes.br." },
          { title: "Catálogo da Biblioteca", desc: "Consulta de acervo e reservas online." },
          { title: "Portal Periódicos Capes", desc: "Bases científicas via rede do campus." },
        ]}
      />
    ),
  },
];

const related = [
  { label: "Matrícula e Rematrícula", to: "/vida-academica" },
  { label: "Documentos Acadêmicos", to: "/servicos-documentos" },
  { label: "Ajuda e Suporte", to: "/contato" },
];

export function ServicosDocumentos() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços e Documentos"
        title="Documentos e serviços, num só lugar."
        description="Sistemas, documentos acadêmicos, requerimentos, formulários, protocolos e prazos da Unimontes."
        icon={FileText}
      />
      <SectionLayout
        popular={popular}
        tags={tags}
        searchPlaceholder="Busque por documentos, requerimentos, WebGiz, histórico, declaração ou certificado"
        sections={sections}
        related={related}
      />
    </>
  );
}
