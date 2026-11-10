
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import "./index.css";

export default function ConfiguracaoLocal({ onNext, onBack }) {
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");

  function continuar() {
    if (!cidade.trim() || !bairro.trim()) {
      alert("Informe sua cidade e seu bairro.");
      return;
    }

    onNext();
  }

  return (
    <section className="intro-screen config-screen">
      <p className="eyebrow">SE LIGA NA CHUVA</p>

      <h1>Informe sua<br />localização</h1>

      <div className="config-icon">
        <MdLocationOn />
      </div>

      <p className="intro-description">
        Preencha os dados para acompanhar as condições
        climáticas da sua região.
      </p>

      <div className="location-form">
        <label htmlFor="cidade">Cidade</label>
        <input
          id="cidade"
          type="text"
          placeholder="Ex.: Recife"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          id="bairro"
          type="text"
          placeholder="Ex.: Boa Viagem"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <label htmlFor="cep">CEP (opcional)</label>
        <input
          id="cep"
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </div>

      <button className="primary-button" onClick={continuar}>
        Continuar
      </button>

      <button className="secondary-button" onClick={onBack}>
        Voltar
      </button>
    </section>
  );
}
