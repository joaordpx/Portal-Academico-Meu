import { Link } from "react-router";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUpRight,
  Phone,
  Clock,
  MessageCircle,
  Shield,
} from "lucide-react";

const sitemap = [
  {
    title: "Estude na Unimontes",
    links: ["Como ingressar", "Cursos Ofertados", "Editais de Ingresso", "Cursos gratuitos"],
  },
  {
    title: "Sou Calouro",
    links: ["Manual do Calouro", "Primeiros Passos", "Acesso aos Sistemas", "Mapa do Campus"],
  },
  {
    title: "Vida Acadêmica",
    links: [
      "Calendário Acadêmico",
      "Matrícula e Rematrícula",
      "Biblioteca",
      "Atividades Extracurriculares",
      "Recursos Tecnológicos",
      "Normas Acadêmicas",
      "Tutoriais",
    ],
  },
  {
    title: "Cursos",
    links: ["Centros de Ensino", "Catálogo de cursos", "Coordenações"],
  },
  {
    title: "Serviços e Documentos",
    links: ["Documentos acadêmicos", "Requerimentos", "Formulários", "Protocolos e Prazos", "Sistemas Acadêmicos"],
  },
  {
    title: "Editais e Oportunidades",
    links: ["Editais", "Estágios", "Bolsas e Monitorias", "Eventos e Cursos", "Pesquisa e Extensão"],
  },
  {
    title: "Assistência Estudantil",
    links: ["Auxílios", "Saúde e Bem-estar", "Acessibilidade e Inclusão", "Direitos do Estudante"],
  },
  {
    title: "Movimento Estudantil e Lazer",
    links: ["DCE", "Centros Acadêmicos", "Atléticas", "Eventos", "Esporte e Lazer", "Reserva de Espaços"],
  },
  {
    title: "Unidades e Localização",
    links: ["Campus Montes Claros", "Demais Unidades"],
  },
  {
    title: "Ajuda e Suporte",
    links: ["Como usar o portal", "Perguntas Frequentes (FAQ)", "Problemas de Acesso", "Glossário de Siglas", "Fale com a UNIMONTES"],
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a]">
      {/* ─── OUVIDORIA ─── */}
      <section className="border-t border-[#e5e5e5] bg-[#fafafa]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 py-10 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/40">
              Ouvidoria
            </div>
            <div className="mt-2 text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1a1a1a]">
              Ouvidoria-Geral do Estado de Minas Gerais
            </div>
          </div>

          <div className="lg:col-span-5">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-[13px] sm:grid-cols-2">
              {[
                { icon: Clock, k: "Atendimento", v: "Seg–sex · 9h às 17h" },
                { icon: MessageCircle, k: "WhatsApp", v: "(31) 3915-0500" },
                { icon: Phone, k: "Disque-Ouvidoria", v: "162" },
                { icon: Shield, k: "Disque-Saúde", v: "136" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.k} className="flex items-baseline gap-3">
                    <Icon className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-[#1a1a1a]/40" strokeWidth={1.75} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/45">
                      {c.k}
                    </span>
                    <span className="text-[#1a1a1a]">{c.v}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <a
              href="#"
              className="group inline-flex items-center gap-2 border-b border-[#1a1a1a] pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a] hover:border-[#6E3AFF] hover:text-[#6E3AFF]"
            >
              Acessar site da Ouvidoria
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAPA DO SITE (sem título, é o próprio rodapé) ─── */}
      <div className="mx-auto max-w-[1400px] px-6 pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-16 sm:grid-cols-2 lg:grid-cols-5">
          {sitemap.map((col) => (
            <div key={col.title}>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] leading-[1.5] text-[#1a1a1a]/65 transition-colors hover:text-[#6E3AFF]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── RODAPÉ INFERIOR ─── */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 border-t border-[#e5e5e5] py-10 text-[13px] text-[#1a1a1a]/60 lg:grid-cols-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/40">Endereço</div>
            <div className="mt-2">Av. Prof. Rui Braga, s/n<br />Vila Mauricéia · Montes Claros/MG</div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/40">Contato</div>
            <div className="mt-2">(38) 3229-8000<br />secretaria@unimontes.br</div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/40">Atendimento</div>
            <div className="mt-2">Segunda a sexta<br />8h às 18h</div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a]/40">Redes</div>
            <div className="mt-3 flex gap-2">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#e5e5e5] text-[#1a1a1a] transition-colors hover:border-[#6E3AFF] hover:bg-[#6E3AFF] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#e5e5e5] py-8 text-[11px] uppercase tracking-[0.16em] text-[#1a1a1a]/40 sm:flex-row sm:items-center">
          <div className="font-bold text-[#1a1a1a]">UNIMONTES · Portal Acadêmico</div>
          <div>© 2026 — Universidade Estadual de Montes Claros</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#6E3AFF]">Privacidade</a>
            <a href="#" className="hover:text-[#6E3AFF]">Termos</a>
            <a href="#" className="hover:text-[#6E3AFF]">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
