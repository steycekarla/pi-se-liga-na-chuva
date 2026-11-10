
import { useState } from "react";
import { MdLocationOn, MdMyLocation } from "react-icons/md";
import "./index.css";

export default function Localizacao({ onNext, onBack }) {
  const [status, setStatus] = useState("");

  function localizar() {
    if (!navigator.geolocation) {
      setStatus("Seu navegador não oferece suporte à localização.");
      return;
    }

    setStatus("Solicitando sua localização...");

    navigator.geolocation.getCurrentPosition(
      () => {
        setStatus("Localização identificada!");
        onNext();
      },
      () => {
        setStatus("Não foi possível identificar. Você pode continuar e informar sua região manualmente.");
      }
    );
  }

  return (
    <section className="intro-screen location-screen">
      <div className="progress">
        <i className="selected"></i>
        <i className="selected"></i>
        <i className="selected"></i>
      </div>

      <p className="eyebrow">SE LIGA NA CHUVA</p>

      <h1>Onde você<br />está localizado?</h1>

      <div className="location-art">
        <div className="location-circle">
          <MdLocationOn />
        </div>
        <MdMyLocation className="location-target" />
      </div>

      <p className="intro-description">
        Permita o acesso à localização para receber
        informações sobre as condições do tempo na sua região.
      </p>

      <button className="primary-button" onClick={localizar}>
        Usar minha localização
      </button>

      {status && <p className="location-status">{status}</p>}

      <button className="secondary-button" onClick={onNext}>
        Informar localização depois
      </button>

      <button className="text-button" onClick={onBack}>
        Voltar
      </button>
    </section>
  );
}
