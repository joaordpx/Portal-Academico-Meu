export interface Comunicado {
    id: number;
    tag: string;
    tagColor: string;
    title: string;
    desc: string;
    publico: string;
    campus: string;
    data: string;
}

export interface Oportunidade {
    id: number;
    title: string;
    tipo: string;
    prazo: string;
    publico: string;
    campus: string;
}

export interface Noticia {
    id: number;
    cat: string;
    catColor: string;
    bg: string;
    img: string;
    title: string;
    desc: string;
    date: string;
}