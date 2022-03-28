import "./styles.css";
import kata from '../../assets/kata.jpg'


export default function About() {
    return (
        <div className="wrapper">

            <main id="about">
                <section className="module parallax parallax-1" id="home">
                    <h1> Katherine Mariete</h1>   
                </section>  
            
                <section className="module content">
                <h2>sobre mim:</h2>
                    <div className="container" id="sobre">
                    <img id="foto" src={kata}/>
                      
                        
                        <p>Oi Galera!!!!, .<br/>
                         Este é um resumo corto da minha vida, sou a Katherine Duarte uma Colombiana que mora no Brasil faz 9 anos,
                         por muito tempo fui apaixonada pela contabilidade, mas depois que foi apresentada
                         à area do desenvolvimento decidi que era isso que eu queria seguir.<br/> 
                         aprendi que para virar um dev devo estar 100% determinada para seguir esta trilha por que demanda muito estudo, dedicação e saber lidar com as frustrações kkkkkk
                        (ex: aquele erro que só depois de 2 horas entendo e erá a virgula que faltava !!!!).
                        </p>
                        
                        
                    </div> 
                </section>  
            
            </main>
        </div>    
    )
    
} 