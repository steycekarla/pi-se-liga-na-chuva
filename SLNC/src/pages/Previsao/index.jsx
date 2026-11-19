import { useState } from "react";
import { MdCloud, MdLocationOn, MdMyLocation, MdWarning } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./index.css";

const etapas = [
    {
        id: "previsao",
        titulo: <>Previsão em<br />tempo real</>,
        descricao: "Receba informações sobre chuva e riscos na sua região.",
        visual: (
            <div className="mapa">
                <div className="mapa-linhas"></div>
                <div className="cartao-clima">
                    <MdCloud className="nuvem-clima" />
                    <strong>27°</strong>
                    <small>Chuva fraca</small>
                </div>
                <MdLocationOn className="marcador-mapa" />
            </div>
        ),
    },
    {
        id: "riscos",
        titulo: <>Fique atento aos<br />riscos</>,
        descricao: "Veja áreas de risco e receba alertas importantes.",
        visual: (
            <div className="mapa">
                <div className="mapa-linhas"></div>
                <div className="alerta-mapa">
                    <MdWarning />
                    <span>Alerta de chuva</span>
                    <small>Área de risco</small>
                </div>
                <div className="alerta-central">
                    <MdWarning />
                </div>
            </div>
        ),
    },
    {
        id: "localizacao",
        titulo: <>Onde você<br />está localizado?</>,
        descricao: "Permita o acesso à localização para receber informações sobre o tempo na sua região.",
        visual: (
            <div className="location-art">
                <div className="location-circle">
                    <MdLocationOn />
                </div>
                <MdMyLocation className="location-target" />
            </div>
        ),
    },
];

export default function Previsao({ initialSlide = 0 }) {
    const [slideAtual, setSlideAtual] = useState(
        () => Math.min(Math.max(initialSlide, 0), etapas.length - 1)
    );
    const navigate = useNavigate();

    function proximaEtapa() {
        setSlideAtual((atual) => Math.min(atual + 1, etapas.length - 1));
    }

    function etapaAnterior() {
        setSlideAtual((atual) => Math.max(atual - 1, 0));
    }

    return (
        <main className="tela">
            <div className="progresso" aria-label="Etapas do carrossel">
                {etapas.map((etapa, index) => (
                    <button
                        key={etapa.id}
                        type="button"
                        className={index === slideAtual ? "ativo" : index < slideAtual ? "concluido" : ""}
                        aria-label={`Ir para etapa ${index + 1}`}
                        aria-current={index === slideAtual ? "step" : undefined}
                        onClick={() => setSlideAtual(index)}
                    />
                ))}
            </div>

            {etapas.map((etapa, index) => index === slideAtual && (
                <section className={`carrossel-slide slide-${etapa.id}`} key={etapa.id}>
                    <h1 className="titulo">{etapa.titulo}</h1>
                    {etapa.visual}
                    <p className="descricao">{etapa.descricao}</p>

                    <div className="carrossel-acoes">
                        {slideAtual > 0 && (
                            <button className="botao botao-voltar" onClick={etapaAnterior}>
                                Voltar
                            </button>
                        )}

                        {slideAtual < etapas.length - 1 ? (
                            <button className="botao" onClick={proximaEtapa}>
                                Próximo
                            </button>
                        ) : (
                            <>
                                <button
                                    className="botao"
                                    onClick={() => navigate("/configuracaolocal")}
                                >
                                    Usar minha localização
                                </button>
                                <button
                                    className="botao-ignorar"
                                    onClick={() => navigate("/login")}
                                >
                                    Agora não
                                </button>
                            </>
                        )}
                    </div>
                </section>
            ))}
        </main>
    );
}
