import { GraduationCap } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { SectionLayout, PanelCardGrid, PanelRedirect, PanelSteps } from "../components/layout/SectionLayout";

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
      <PanelRedirect
        intro="Consulte datas importantes, prazos acadêmicos e eventos no calendário oficial da Unimontes."
        title="Calendário Acadêmico da Unimontes"
        note="O calendário é atualizado a cada semestre diretamente no site oficial da universidade. Ao clicar, você será redirecionado para a página oficial, sempre com a versão mais recente."
        href="https://unimontes.br/calendario/"
      />
    ),
  },
  {
    id: "matricula",
    label: "Matrícula e Renovação de Matrícula",
    content: (
      <PanelSteps
        intro="Orientações, prazos e documentos necessários para a matrícula inicial e a renovação de matrícula."
        tracks={[
          {
            id: "inicial",
            label: "Matrícula Inicial (1º período)",
            note: "A primeira matrícula, do 1º período, é realizada presencialmente pela Secretaria Geral da Unimontes. Os candidatos aprovados devem seguir as instruções do edital de convocação.",
            steps: [
              {
                title: "Acompanhe o edital de convocação",
                desc: "Após o resultado do processo seletivo, fique atento ao edital de matrícula, que informa datas, locais, horários e a documentação exigida.",
              },
              {
                title: "Reúna a documentação exigida",
                desc: "Separe os documentos solicitados no edital (documento de identidade, CPF, certificado e histórico do ensino médio, comprovante de residência, fotografia, entre outros).",
              },
              {
                title: "Compareça à Secretaria Geral",
                desc: "Dirija-se presencialmente à Secretaria Geral no período indicado para entregar a documentação e efetivar a matrícula.",
              },
              {
                title: "Receba seu número de matrícula",
                desc: "Após a conferência dos documentos, a matrícula é efetivada e você recebe o número de matrícula, que dá acesso ao WebGiz e aos demais sistemas.",
              },
            ],
          },
          {
            id: "renovacao",
            label: "Renovação de Matrícula",
            note: "A renovação (rematrícula) é obrigatória a cada semestre e feita pelo próprio estudante, de forma online, pelo sistema WebGiz, dentro do prazo do calendário acadêmico.",
            steps: [
              {
                title: "Acesse o WebGiz",
                desc: "Entre no sistema WebGiz com o seu número de matrícula e senha.",
                imageLabel: "Imagem ilustrativa — tela de login do WebGiz",
              },
              {
                title: "Abra o período de renovação",
                desc: "No menu do sistema, acesse a opção de renovação de matrícula, disponível apenas durante o prazo definido no calendário acadêmico.",
                imageLabel: "Imagem ilustrativa — menu de renovação de matrícula",
              },
              {
                title: "Selecione as disciplinas",
                desc: "Escolha as disciplinas do semestre, respeitando pré-requisitos e evitando choques de horário.",
                imageLabel: "Imagem ilustrativa — seleção de disciplinas",
              },
              {
                title: "Confirme e salve o comprovante",
                desc: "Revise as disciplinas selecionadas, confirme a solicitação e salve ou imprima o comprovante de renovação de matrícula.",
                imageLabel: "Imagem ilustrativa — comprovante de renovação",
              },
            ],
          },
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
