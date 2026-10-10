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
                <MdCloud />
                <MdFlashOn />
            </div>

            {/* LOGO */}
            <div className="logo">
                <h1>SE LIGA</h1>
                <p>Na chuva</p>
            </div>

            {/* NUVEM LATERAL */}
            <div className="nuvem nuvem-baixo">
                <MdCloud />
                <MdFlashOn />
            </div>

            {/* TEXTO */}
            <div className="mensagem">
                <h2>Bem vindo!</h2>

                <p>
                    Monitore o tempo na sua
                    região.
                </p>
            </div>

            {/* BOTÃO */}
            <button className="botao-entrar" onClick={() => window.location.href = "/home"}>
                Entrar
            </button>

        </main>
    );
}