
import { useState } from "react";

import Previsao from "./pages/previsao/previsao";
import Riscos from "./pages/riscos/riscos";
import Localizacao from "./pages/localizacao/localizacao";
import ConfiguracaoLocal from "./pages/configuracaolocal/configuracaolocal";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";

function App() {
  const [tela, setTela] = useState("previsao");

  const avancar = () => {
    const ordem = [
      "previsao",
      "riscos",
      "localizacao",
      "configuracao",
      "login",
      "cadastro"
    ];

    const atual = ordem.indexOf(tela);

    if (atual < ordem.length - 1) {
      setTela(ordem[atual + 1]);
    }
  };

  const voltar = () => {
    const ordem = [
      "previsao",
      "riscos",
      "localizacao",
      "configuracao",
      "login",
      "cadastro"
    ];

    const atual = ordem.indexOf(tela);

    if (atual > 0) {
      setTela(ordem[atual - 1]);
    }
  };

  switch (tela) {
    case "previsao":
      return <Previsao onNext={avancar} />;

    case "riscos":
      return <Riscos onNext={avancar} onBack={voltar} />;

    case "localizacao":
      return <Localizacao onNext={avancar} onBack={voltar} />;

    case "configuracao":
      return <ConfiguracaoLocal onNext={avancar} onBack={voltar} />;

    case "login":
      return <Login onNext={avancar} onBack={voltar} />;

    case "cadastro":
      return <Cadastro onBack={voltar} />;

    default:
      return <Previsao onNext={avancar} />;
  }
}

export default App;
