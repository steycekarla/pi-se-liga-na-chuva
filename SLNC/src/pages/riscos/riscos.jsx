import { MdWarning } from "react-icons/md";

export default function Riscos({ proxima }) {
    return (
        <main className="tela">
            <div className="progresso">
                <span className="concluido"></span>
                <span className="ativo"></span>
                <span></span>
            </div>

            <h1 className="titulo">
                Fique atento aos<br />riscos
            </h1>

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

            <p className="descricao">
                Veja áreas de risco e receba alertas importantes.
            </p>

            <button className="botao" onClick={proxima}>
                Próximo
            </button>
        </main>
    );
}