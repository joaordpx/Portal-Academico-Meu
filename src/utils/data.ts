const MESES_CURTO = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
const MESES_LONGO = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

/** Partes de uma data ISO para exibição (dia e mês abreviado) */
export function partesData(iso: string) {
  const [ano, mes, dia] = iso.split("-");
  return { dia, mes: MESES_CURTO[Number(mes) - 1], ano };
}

/** "2026-08-16" → "16/08/2026" */
export function formatarData(iso: string) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

/** "2026-08-16" → "16 de agosto de 2026" */
export function formatarDataExtenso(iso: string) {
  const [ano, mes, dia] = iso.split("-");
  return `${Number(dia)} de ${MESES_LONGO[Number(mes) - 1]} de ${ano}`;
}

/** Período de um evento: "16 a 20/08/2026" ou "16/08/2026" */
export function formatarPeriodo(inicio: string, fim?: string) {
  if (!fim || fim === inicio) return formatarData(inicio);
  const [, mesI, diaI] = inicio.split("-");
  const [, mesF] = fim.split("-");
  return mesI === mesF ? `${diaI} a ${formatarData(fim)}` : `${formatarData(inicio)} a ${formatarData(fim)}`;
}

const SEMANA = [
  "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
  "Quinta-feira", "Sexta-feira", "Sábado",
];

const MESES_TITULO = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

/** "2026-08-16" → "Domingo, 16 de Agosto" */
export function formatarDataSemana(iso: string) {
  const [ano, mes, dia] = iso.split("-").map(Number);
  const d = new Date(ano, mes - 1, dia);
  return `${SEMANA[d.getDay()]}, ${dia} de ${MESES_TITULO[mes - 1]}`;
}

/** Mês abreviado com inicial maiúscula: "Ago." */
export function mesAbreviado(iso: string) {
  const mes = Number(iso.split("-")[1]);
  return MESES_TITULO[mes - 1].slice(0, 3) + ".";
}

/** Dias até a data (negativo = passado) */
export function diasAte(iso: string, hoje = new Date()) {
  return Math.ceil((new Date(iso + "T23:59:59").getTime() - hoje.getTime()) / 86_400_000);
}
