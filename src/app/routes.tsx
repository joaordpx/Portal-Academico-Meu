import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { VidaAcademica } from "./pages/VidaAcademica";
import { Cursos } from "./pages/Cursos";
import { CursoDetalhe } from "./pages/CursoDetalhe";
import { ServicosDocumentos } from "./pages/ServicosDocumentos";
import { Editais } from "./pages/Editais";
import { Eventos } from "./pages/Eventos";
import { EventoDetalhe } from "./pages/EventoDetalhe";
import { AssistenciaEstudantil } from "./pages/AssistenciaEstudantil";
import { MovimentoEstudantil } from "./pages/MovimentoEstudantil";
import { UnidadesLocalizacao } from "./pages/UnidadesLocalizacao";
import { AjudaSuporte } from "./pages/AjudaSuporte";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "vida-academica", Component: VidaAcademica },
      { path: "cursos", Component: Cursos },
      { path: "cursos/:slug", Component: CursoDetalhe },
      { path: "servicos-documentos", Component: ServicosDocumentos },
      { path: "editais-oportunidades", Component: Editais },
      { path: "eventos", Component: Eventos },
      { path: "eventos/:slug", Component: EventoDetalhe },
      { path: "assistencia-estudantil", Component: AssistenciaEstudantil },
      { path: "movimento-estudantil-lazer", Component: MovimentoEstudantil },
      { path: "unidades-localizacao", Component: UnidadesLocalizacao },
      { path: "ajuda-suporte", Component: AjudaSuporte },
      // Rota antiga mantida: os links existentes para /contato continuam válidos
      { path: "contato", Component: AjudaSuporte },
      { path: "*", Component: NotFound },
    ],
  },
]);
