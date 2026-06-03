import { Megaphone } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { SectionLayout, PanelCardGrid } from "../components/SectionLayout";

const popular = [
  { label: "DCE" },
  { label: "Centros Acadêmicos" },
  { label: "Esporte e Lazer" },
  { label: "Reserva de Espaços" },
];

const tags = [
  "DCE",
  "centro acadêmico",
  "esporte",
  "reserva de quadra",
  "centro esportivo",
];

const sections = [
  {
    id: "dce",
    label: "DCE",
    content: (
      <PanelCardGrid
        intro="Diretório Central dos Estudantes — representação política e canais oficiais de participação."
        cards={[
          { title: "Sobre o DCE", desc: "Estrutura, gestões anteriores e papel na universidade." },
          { title: "Contatos e canais oficiais", desc: "WhatsApp, e-mail e atendimento presencial." },
          { title: "Formas de participação", desc: "Como entrar em comissões e grupos de trabalho." },
          { title: "Redes sociais do DCE", desc: "Instagram, Facebook e canal de comunicação." },
        ]}
      />
    ),
  },
  {
    id: "centros",
    label: "Centros Acadêmicos",
    content: (
      <PanelCardGrid
        intro="Cada curso possui um Centro Acadêmico que representa os estudantes localmente."
        cards={[
          { title: "CA de Direito", desc: "Eventos, semana acadêmica e mobilização discente." },
          { title: "CA de Pedagogia", desc: "Atividades formativas e culturais." },
          { title: "CA de Sistemas de Informação", desc: "Hackathons, palestras técnicas e mentorias." },
          { title: "Lista completa", desc: "Todos os centros acadêmicos da Unimontes." },
        ]}
      />
    ),
  },
  {
    id: "esporte",
    label: "Esporte e Lazer",
    content: (
      <PanelCardGrid
        intro="Centro esportivo, atléticas e atividades recreativas no campus."
        cards={[
          { title: "Centro Esportivo", desc: "Quadras, academia, piscina e pista de atletismo." },
          { title: "Atléticas", desc: "Times universitários — futebol, vôlei, basquete, handebol." },
          { title: "JIUs", desc: "Jogos Internos da Unimontes — calendário e inscrições." },
          { title: "Eventos esportivos", desc: "Calendário de competições intercursos." },
        ]}
      />
    ),
  },
  {
    id: "reservas",
    label: "Reserva de Espaços",
    content: (
      <PanelCardGrid
        intro="Reserve auditórios, salas, quadras e espaços de convivência para atividades estudantis."
        cards={[
          { title: "Auditórios", desc: "Reserva online com até 7 dias de antecedência." },
          { title: "Salas de reunião", desc: "Espaços para grupos de estudo e CAs." },
          { title: "Quadras esportivas", desc: "Reserva por horário no centro esportivo." },
          { title: "Praça de Convivência", desc: "Solicitação para eventos abertos ao público." },
        ]}
      />
    ),
  },
];

const related = [
  { label: "Centros Acadêmicos", to: "/movimento-estudantil-lazer" },
  { label: "Esporte e Lazer", to: "/movimento-estudantil-lazer" },
  { label: "Assistência Estudantil", to: "/assistencia-estudantil" },
  { label: "Ajuda e Suporte", to: "/contato" },
];

export function MovimentoEstudantil() {
  return (
    <>
      <PageHeader
        eyebrow="Movimento Estudantil e Lazer"
        title="Representação, esporte e vida em comunidade."
        description="DCE, Centros Acadêmicos, atléticas, esporte, lazer e reserva de espaços."
        icon={Megaphone}
      />
      <SectionLayout
        popular={popular}
        tags={tags}
        searchPlaceholder="Busque por DCE, Centros Acadêmicos, esporte, lazer ou reserva de espaços"
        sections={sections}
        related={related}
      />
    </>
  );
}
