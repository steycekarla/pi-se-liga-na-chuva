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


import './index.css';

export default function Home({ user }) {
    
    const temps = [{ 'hora': 9, 'temp': 26 },
                   { 'hora': 10, 'temp': 26 }, 
                   { 'hora': 11, 'temp': 27 }, 
                   { 'hora': 12, 'temp': 27 },
                   { 'hora': 13, 'temp': 28 }]

    const fastacts = [{ 'icone': 'mdimage', 'desc': 'Reportar', 'bgcolor': 'blue' }, 
                      { 'icone': 'mdNotifications', 'desc': 'Alertas', 'bgcolor': 'orange' },  
                      { 'icone': 'mdEmergency', 'desc': 'Emergência', 'bgcolor': 'Red' }]

    const [username, setUsername] = useState(user?.username ?? "Heitor");

    const [userlocation, setUserlocation] = useState(user?.location ?? "Recife, PE");

    useEffect(() => {
        if (user?.username) 
            setUsername(user.username);
        if (user?.location) 
            setUserlocation(user.location);},
         [user?.username, user?.location]);

    return (
        <>
            {/* header */}
            <header>
                <div className="column">
                    <p className="saudacao">Bom dia,<br />
                    <strong>{username}</strong> </p>
                    <div className="loc"><MdLocationPin /> 
                    <p> {userlocation}</p>
                    </div>
                </div>
                <div className="column header-icons">
                    <MdNotifications/>
                    <MdSettings/>
                </div>
            </header>

            {/* banner 1 */}     
            <section className="banner-tempo">

                <div className="temperatura">

                    <strong>27°</strong>
                <div>
                    <p> Chuva Moderada </p>

                    <small>sensação de 29°</small>

                    <small> vento 15km/h</small>
 

                </div>    
                  
                  <MdCloud className="info-tempo"/>
                  
                </div> 

                </section>    <br />  <br />
            {/* banner 2 */}
             <section className="banner-alerta">

                <div className="Alerta-icone">
                    <MdWarning/>

                    <strong> Risco na sua Região</strong>

                    <strong> Medio </strong>

                    <p> Evite o deslocamento e fique atento aos alertas</p>

                
                </div>

                </section>   <br />
            {/* seção proximas horas */}
            <section>
             
                    <div className="proximas-horas">

                         <p> Proximas Horas </p>
                         
                    </div>
                    
                    <div className="horas">
                        {temps.map((item,index)=> (
                            <div className="hora"
                            key={index}>

                                <p>{item.hora}</p>
                                <MdCloud/>
                                <strong>{item.temp}°</strong>
                                </div>
                        ))}
                    </div>
            </section>
            {/* seção ações rapidas */}
            <section>
                <div className="Açoes">

                    <p> Ações rápidas </p>
                
                </div>
              <div className="acoes">

              </div>
            </section>
            {/* navbar */}
        </>
    )

}