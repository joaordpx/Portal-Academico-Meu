import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { VidaAcademica } from "./pages/VidaAcademica";
import { Cursos } from "./pages/Cursos";
import { CursoDetalhe } from "./pages/CursoDetalhe";
import { ServicosDocumentos } from "./pages/ServicosDocumentos";
import { Editais } from "./pages/Editais";
import { Eventos } from "./pages/Eventos";
import { AssistenciaEstudantil } from "./pages/AssistenciaEstudantil";
import { MovimentoEstudantil } from "./pages/MovimentoEstudantil";
import { UnidadesLocalizacao } from "./pages/UnidadesLocalizacao";
import { Contato } from "./pages/Contato";
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
      { path: "assistencia-estudantil", Component: AssistenciaEstudantil },
      { path: "movimento-estudantil-lazer", Component: MovimentoEstudantil },
      { path: "unidades-localizacao", Component: UnidadesLocalizacao },
      { path: "contato", Component: Contato },
      { path: "*", Component: NotFound },
    ],
  },
]);
