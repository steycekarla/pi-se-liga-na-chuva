import {
    MdLocationPin,
    MdNotifications,
    MdSettings,
    MdCloud,
    MdWarning,
    MdImage,
    MdEmergency
} from "react-icons/md";

import { useEffect, useState } from "react";
import "./index.css";

export default function Home({ user }) {

    const temps = [
        { hora: 9, temp: 26 },
        { hora: 10, temp: 26 },
        { hora: 11, temp: 27 },
        { hora: 12, temp: 27 },
        { hora: 13, temp: 28 }
    ];

    const fastacts = [
        {
            icone: "mdimage",
            desc: "Reportar",
            bgcolor: "blue"
        },
        {
            icone: "mdNotifications",
            desc: "Alertas",
            bgcolor: "orange"
        },
        {
            icone: "mdEmergency",
            desc: "Emergência",
            bgcolor: "red"
        }
    ];

    const [username, setUsername] = useState(
        user?.username ?? "Heitor"
    );

    const [userlocation, setUserlocation] = useState(
        user?.location ?? "Recife, PE"
    );

    useEffect(() => {
        if (user?.username) setUsername(user.username);
        if (user?.location) setUserlocation(user.location);
    }, [user?.username, user?.location]);

    return (
        <>

            {/* HEADER */}

            <header>

                <div className="column">

                    <p className="saudacao">
                        Bom dia,<br />
                        <strong>{username}</strong>
                    </p>

                    <div className="loc">
                        <MdLocationPin />
                        <p>{userlocation}</p>
                    </div>

                </div>

                <div className="column header-icons">
                    <MdNotifications />
                    <MdSettings />
                </div>

            </header>


            {/* BANNER 1 */}

            <section className="banner-tempo">

                <div className="temperatura">

                    <strong>27°</strong>

                    <div>

                        <p>Chuva Moderada</p>

                        <small>
                            Sensação 29°
                        </small>

                        <small>
                            Vento 14km/h
                        </small>

                    </div>

                </div>

                <MdCloud className="cloud" />

                <div className="info-tempo">

                    <span>
                        Umidade 82%
                    </span>

                    <span>
                        Pressão 1012hPa
                    </span>

                </div>

            </section>


            {/* BANNER 2 */}

            <section className="banner-alerta">

                <div className="alerta-icone">
                    <MdWarning />
                </div>

                <div>

                    <small>
                        RISCO NA SUA REGIÃO
                    </small>

                    <strong>
                        Médio
                    </strong>

                    <p>
                        Evite deslocamentos e fique atento
                        aos alertas da Defesa Civil.
                    </p>

                </div>

            </section>


            {/* SEÇÃO PRÓXIMAS HORAS */}

            <section>

                <div className="proximas-horas">

                    <p>
                        Próximas horas
                    </p>

                </div>

                <div className="horas">

                    {temps.map((item, index) => (

                        <div
                            className="hora"
                            key={index}
                        >

                            <p>
                                {item.hora}h
                            </p>

                            <MdCloud />

                            <strong>
                                {item.temp}°
                            </strong>

                        </div>

                    ))}

                </div>

            </section>


            {/* SEÇÃO AÇÕES RÁPIDAS */}

            <section>

                <div className="acoes-titulo">

                    <p>
                        Ações rápidas
                    </p>

                </div>

                <div className="acoes">

                    <div className="acao blue">

                        <MdImage />

                        <p>
                            Reportar
                        </p>

                    </div>


                    <div className="acao orange">

                        <MdNotifications />

                        <p>
                            Alertas
                        </p>

                    </div>


                    <div className="acao red" onClick={() => window.location.href = "/inicio"}>

                        <MdEmergency />

                        <p>
                            Emergência
1                        </p>

                    </div>

                </div>

            </section>


            {/* NAVBAR */}

            <nav className="navbar">

                <div className="nav-item active">
                    <span>⌂</span>
                    <p>Início</p>
                </div>

                <div className="nav-item">
                    <span>◉</span>
                    <p>Previsão</p>
                </div>

                <div className="nav-item">
                    <span>▣</span>
                    <p>Mapa</p>
                </div>

                <div className="nav-item">
                    <span>♢</span>
                    <p>Alertas</p>
                </div>

                <div className="nav-item">
                    <span>●</span>
                    <p>Perfil</p>
                </div>

            </nav>

        </>
    );
}