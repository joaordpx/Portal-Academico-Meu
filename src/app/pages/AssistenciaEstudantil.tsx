import { HeartHandshake } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { SectionLayout, PanelCardGrid } from "../components/SectionLayout";

const popular = [
  { label: "Auxílios e Permanência" },
  { label: "Restaurante Universitário" },
  { label: "Saúde e Bem-estar" },
  { label: "Acessibilidade e Inclusão" },
  { label: "Direitos do Estudante" },
];

const tags = [
  "PEAES",
  "restaurante universitário",
  "apoio psicológico",
  "NUSI",
  "moradia estudantil",
];

const sections = [
  {
    id: "auxilios",
    label: "Auxílios e Permanência",
    content: (
      <PanelCardGrid
        intro="Programas, auxílios e serviços que apoiam a permanência do estudante no ensino superior."
        cards={[
          { title: "Auxílios", desc: "Alimentação, transporte, moradia e auxílio emergencial." },
          { title: "Permanência", desc: "Acompanhamento socioeducacional para estudantes em vulnerabilidade." },
          { title: "PEAES", desc: "Programa Estadual de Assistência Estudantil — inscrições por edital." },
          { title: "Moradia Estudantil", desc: "Vagas em alojamento institucional ou auxílio-moradia." },
        ]}
      />
    ),
  },
  {
    id: "ru",
    label: "Restaurante Universitário",
    content: (
      <PanelCardGrid
        intro="Refeições subsidiadas para estudantes regularmente matriculados."
        cards={[
          { title: "Cardápio da semana", desc: "Café, almoço e jantar consultáveis pelo app." },
          { title: "Horários", desc: "Café 7h–9h · Almoço 11h–14h · Jantar 17h–19h30." },
          { title: "Valores subsidiados", desc: "Refeições a partir de R$ 2,00 para alunos cadastrados." },
          { title: "Saldo & recarga", desc: "Consulte saldo e recarregue créditos online." },
        ]}
      />
    ),
  },
  {
    id: "saude",
    label: "Saúde e Bem-estar",
    content: (
      <PanelCardGrid
        intro="Serviços de saúde física e mental disponíveis à comunidade acadêmica."
        cards={[
          { title: "Apoio psicológico", desc: "Atendimento individual gratuito por agendamento." },
          { title: "Posto de saúde", desc: "Triagem, primeiros socorros e orientações." },
          { title: "Saúde da mulher", desc: "Atendimento especializado em parceria com cursos da saúde." },
          { title: "Atividade física", desc: "Programas de prevenção e qualidade de vida." },
        ]}
      />
    ),
  },
  {
    id: "acessibilidade",
    label: "Acessibilidade e Inclusão",
    content: (
      <PanelCardGrid
        intro="NUSI — Núcleo de Suporte à Inclusão acompanha estudantes com necessidades específicas."
        cards={[
          { title: "Atendimento NUSI", desc: "Apoio acadêmico, pedagógico e psicossocial." },
          { title: "Acessibilidade arquitetônica", desc: "Mapeamento e adequações em blocos e laboratórios." },
          { title: "Tecnologia assistiva", desc: "Empréstimo de equipamentos e softwares." },
          { title: "Diversidade & direitos", desc: "Coletivos, comissões e canais de acolhimento." },
        ]}
      />
    ),
  },
  {
    id: "direitos",
    label: "Direitos do Estudante",
    content: (
      <PanelCardGrid
        intro="Informações sobre direitos, regimentos e canais de denúncia."
        cards={[
          { title: "Carta de Direitos", desc: "Documento institucional com direitos e deveres." },
          { title: "Ouvidoria", desc: "Canal para denúncias, sugestões e reclamações." },
          { title: "Defensoria Pública", desc: "Convênios de orientação jurídica gratuita." },
          { title: "Comissão de Ética", desc: "Apuração de condutas no ambiente acadêmico." },
        ]}
      />
    ),
  },
];

const related = [
  { label: "Editais e Oportunidades", to: "/editais-oportunidades" },
  { label: "Documentos e Requerimentos", to: "/servicos-documentos" },
  { label: "Ajuda e Suporte", to: "/contato" },
  { label: "Unidades e Localização", to: "/unidades-localizacao" },
];

export function AssistenciaEstudantil() {
  return (
    <>
      <PageHeader
        eyebrow="Assistência Estudantil"
        title="Apoio para você permanecer e prosperar."
        description="Auxílios, permanência, saúde, acessibilidade, inclusão, restaurante universitário e direitos do estudante."
        icon={HeartHandshake}
      />
      <SectionLayout
        popular={popular}
        tags={tags}
        searchPlaceholder="Busque por auxílios, restaurante universitário, saúde, acessibilidade ou atendimento"
        sections={sections}
        related={related}
      />
    </>
  );
}
