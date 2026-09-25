import '.index.css';

export default function Header(){
    return(
             <header>
            <div id='appLogo'>
              <img src="/favicon.svg" alt="Logo" />  
              <p> SLNC </p>  
              <button className="logout">Logout</button>     
            </div>
           </header>
    )
        
    
    }