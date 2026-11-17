import { MdCloud, MdLocationOn } from "react-icons/md";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Previsao() {
    const navigate = useNavigate();

    return (
        <main className="tela">
            <div className="progresso">
                <span className="ativo"></span>
                <span></span>
                <span></span>
            </div>

            <h1 className="titulo">
                Previsão em<br />tempo real
            </h1>

            <div className="mapa">
                <div className="mapa-linhas"></div>

                <div className="cartao-clima">
                    <MdCloud className="nuvem-clima" />
                    <strong>27°</strong>
                    <small>Chuva fraca</small>
                </div>

                <MdLocationOn className="marcador-mapa" />
            </div>

            <p className="descricao">
                Receba informações sobre chuva e riscos na sua região.
            </p>

            <button className="botao" onClick={() => navigate("/riscos")}>
                Próximo
            </button>
        </main>
    );
}