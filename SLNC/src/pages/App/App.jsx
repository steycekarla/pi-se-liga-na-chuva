
import { useState } from "react";

import Previsao from "../previsao/previsao";
import Riscos from "../riscos/riscos";
import Localizacao from "../localizacao/localizacao";
import ConfiguracaoLocal from "../configuracaolocal/configuracaolocal";
import Login from "../login/login";
import Cadastro from "../cadastro/cadastro";

import "./App.css";

export default function App() {
  const [tela, setTela] = useState("previsao");

  const ordem = [
    "previsao",
    "riscos",
    "localizacao",
    "configuracao",
    "login",
    "cadastro"
  ];

  function avancar() {
    const atual = ordem.indexOf(tela);

    if (atual < ordem.length - 1) {
      setTela(ordem[atual + 1]);
    }
  }

  function voltar() {
    const atual = ordem.indexOf(tela);

    if (atual > 0) {
      setTela(ordem[atual - 1]);
    }
  }

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
