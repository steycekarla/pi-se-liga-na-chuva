import { MdLocationPin } from "react-icons/md";
import { useEffect, useState } from "react";
import './index.css';

export default function Home({ user }) {
    const temps = [{ 'hora': 9, 'temp': 26 }, { 'hora': 10, 'temp': 26 }, { 'hora': 11, 'temp': 27 }, { 'hora': 12, 'temp': 27 }, { 'hora': 13, 'temp': 28 }]
    const fastacts = [{ 'icone': 'mdimage', 'desc': 'Reportar', 'bgcolor': 'blue' }, { 'icone': 'mdNotifications', 'desc': 'Alertas', 'bgcolor': 'orange' }, { 'icone': 'mdEmergency', 'desc': 'Emergência', 'bgcolor': 'Red' }]
    const [username, setUsername] = useState(user?.username ?? "Heitor");
    const [userlocation, setUserlocation] = useState(user?.location ?? "Recife, PE");

    useEffect(() => {
        if (user?.username) setUsername(user.username);
        if (user?.location) setUserlocation(user.location);
    }, [user?.username, user?.location]);

    return (
        <>
            {/* header */}
            <header>
                <div className="column">
                    <p className="saudacao">Bom dia,<br /><strong>{username}</strong></p>
                    <div className="loc"><MdLocationPin /><p> {userlocation}</p></div>
                </div>
                <div className="column">

                </div>
            </header>
            {/* banner 1 */}        
            {/* banner 2 */}
            {/* seção proximas horas */}
            <section>
                <div>
                    <div className="proximas-horas">
                         <p> Proximas Horas </p>
                    </div>
                    
                </div>
            </section>
            {/* seção ações rapidas */}
            {/* navbar */}
        </>
    )

}