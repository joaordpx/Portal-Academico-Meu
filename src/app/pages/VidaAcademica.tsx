import { GraduationCap } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { SectionLayout, PanelCardGrid } from "../components/layout/SectionLayout";

const popular = [
  { label: "Calendário Acadêmico" },
  { label: "Matrícula e Rematrícula" },
  { label: "Biblioteca" },
  { label: "Recursos Tecnológicos" },
  { label: "Tutoriais" },
];

const tags = [
  "calendário acadêmico",
  "matrícula",
  "WebGiz",
  "declaração",
  "estágio",
  "segunda chamada",
];

const sections = [
  {
    id: "calouro",
    label: "Sou Calouro",
    content: (
      <PanelCardGrid
        intro="Encontre as principais orientações para iniciar sua vida acadêmica na UNIMONTES — primeiros acessos, sistemas e dúvidas frequentes do calouro."
        cards={[
          { title: "Manual do Calouro", desc: "Roteiro completo para os primeiros passos na universidade." },
          { title: "Acesso aos Sistemas", desc: "WebGiz, Moodle, e-mail institucional e biblioteca digital." },
          { title: "Mapa do Campus", desc: "Localize blocos, salas, laboratórios e setores administrativos." },
          { title: "Dúvidas Frequentes", desc: "Respostas para as principais dúvidas dos novos estudantes." },
        ]}
      />
    ),
  },
  {
    id: "calendario",
    label: "Calendário Acadêmico",
    content: (
      <PanelCardGrid
        intro="Datas oficiais do semestre — provas, recessos, prazos de matrícula e eventos institucionais."
        cards={[
          { title: "Calendário 2026/1", desc: "Período letivo atual com todas as datas oficiais." },
          { title: "Calendário 2026/2", desc: "Próximo semestre — matrícula, início das aulas e provas." },
          { title: "Recessos e feriados", desc: "Lista completa de pausas previstas no calendário." },
          { title: "Calendário pós-graduação", desc: "Datas específicas dos programas de stricto sensu." },
        ]}
      />
    ),
  },
  {
    id: "matricula",
    label: "Matrícula e Rematrícula",
    content: (
      <PanelCardGrid
        intro="Tudo sobre matrícula em disciplinas, renovação semestral e ajuste de horários."
        cards={[
          { title: "Matrícula inicial", desc: "Calouros aprovados — procedimentos e documentos." },
          { title: "Rematrícula", desc: "Renovação obrigatória a cada semestre via WebGiz." },
          { title: "Ajuste de matrícula", desc: "Trocas e inclusões durante a primeira semana de aulas." },
          { title: "Trancamento", desc: "Como solicitar trancamento total ou parcial." },
        ]}
      />
    ),
  },
  {
    id: "biblioteca",
    label: "Biblioteca",
    content: (
      <PanelCardGrid
        intro="Biblioteca Central — acervo físico, periódicos, teses, dissertações e bases digitais."
        cards={[
          { title: "Catálogo online", desc: "Consulte o acervo, faça reservas e acompanhe empréstimos." },
          { title: "Bases de dados", desc: "Acesso a Capes, Scopus, Scielo e demais bases científicas." },
          { title: "Horários", desc: "Segunda a sexta · 7h às 22h. Sábados · 8h às 12h." },
          { title: "Normalização", desc: "Suporte para formatação ABNT de trabalhos acadêmicos." },
        ]}
      />
    ),
  },
  {
    id: "extracurriculares",
    label: "Atividades Extracurriculares",
    content: (
      <PanelCardGrid
        intro="Projetos de pesquisa, extensão, monitoria, ligas acadêmicas e empresas juniores."
        cards={[
          { title: "Iniciação Científica", desc: "PIBIC, PIBITI e bolsas de pesquisa por edital." },
          { title: "Monitoria", desc: "Auxílio acadêmico em disciplinas com remuneração." },
          { title: "Extensão", desc: "Projetos com a comunidade — atendimento, cultura, saúde." },
          { title: "Empresas Juniores", desc: "Vivência empresarial supervisionada pelos professores." },
        ]}
      />
    ),
  },
  {
    id: "tecnologicos",
    label: "Recursos Tecnológicos",
    content: (
      <PanelCardGrid
        intro="Sistemas, plataformas e infraestrutura tecnológica disponíveis ao estudante."
        cards={[
          { title: "WebGiz", desc: "Sistema acadêmico — notas, frequência, histórico, matrícula." },
          { title: "Moodle", desc: "Plataforma de aprendizagem para disciplinas EAD e híbridas." },
          { title: "E-mail institucional", desc: "Conta @unimontes.br com Google Workspace." },
          { title: "Wi-Fi do campus", desc: "Rede UNIMONTES disponível em todos os blocos." },
        ]}
      />
    ),
  },
  {
    id: "normas",
    label: "Normas Acadêmicas",
    content: (
      <PanelCardGrid
        intro="Resoluções, regimentos e normas que regem a vida acadêmica na universidade."
        cards={[
          { title: "Regimento Geral", desc: "Documento institucional principal da Unimontes." },
          { title: "Resoluções CEPEx", desc: "Normas de ensino, pesquisa e extensão." },
          { title: "Código Disciplinar", desc: "Direitos, deveres e procedimentos disciplinares." },
          { title: "Aproveitamento de estudos", desc: "Dispensa de disciplinas já cursadas." },
        ]}
      />
    ),
  },
  {
    id: "tutoriais",
    label: "Tutoriais",
    content: (
      <PanelCardGrid
        intro="Passo a passo para os principais serviços e sistemas do portal."
        cards={[
          { title: "Como fazer matrícula no WebGiz", desc: "Vídeo + roteiro escrito para rematrícula." },
          { title: "Solicitar declaração de matrícula", desc: "Emissão online em poucos cliques." },
          { title: "Acessar bases de dados", desc: "Como entrar nas bases pela rede do campus ou via VPN." },
          { title: "Recuperar senha do portal", desc: "Procedimento de redefinição de senha do WebGiz." },
        ]}
      />
    ),
  },
];

const related = [
  { label: "Calendário Acadêmico", to: "/vida-academica" },
  { label: "Matrícula e Rematrícula", to: "/servicos-documentos" },
  { label: "Ajuda e Suporte", to: "/contato" },
];

export function VidaAcademica() {
  return (
    <>
      <PageHeader
        eyebrow="Vida Acadêmica"
        title="Acompanhe sua jornada acadêmica."
        description="Encontre calendários, normas, recursos tecnológicos e serviços essenciais para o seu dia a dia na universidade."
        icon={GraduationCap}
      />
      <SectionLayout
        popular={popular}
        tags={tags}
        searchPlaceholder="Busque por matrícula, calendário, biblioteca, normas, tutoriais ou suporte"
        sections={sections}
        related={related}
      />
    </>
  );
}
