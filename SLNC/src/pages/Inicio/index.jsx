
import {
    MdCloud,
    MdFlashOn
} from "react-icons/md";

import "./index.css";

export default function Inicio() {
    return (
        <main className="inicio">

            {/* NUVEM SUPERIOR */}
            <div className="nuvem nuvem-topo">
                <MdCloud className="icone-nuvem" />
                <MdFlashOn className="icone-raio" />
            </div>

            {/* LOGO */}
            <div className="logo">
                <h1>SE LIGA</h1>
                <p>Na chuva</p>
            </div>

            {/* NUVEM INFERIOR */}
            <div className="nuvem nuvem-baixo">
                <MdCloud className="icone-nuvem" />
                <MdFlashOn className="icone-raio" />
            </div>

            {/* MENSAGEM */}
            <div className="mensagem">
                <h2>Bem vindo!</h2>

                <p>
                    Monitore o tempo na sua
                    região.
                </p>
            </div>

            {/* BOTÃO */}
            <button
                className="botao-entrar"
                onClick={() => window.location.href = "/home"}
            >
                Entrar
            </button>

        </main>
    );
}
