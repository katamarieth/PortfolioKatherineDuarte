import "./styles.css";
import logoII from "../../assets/logoII.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Header() {
    return (
        <header>
            <img src={logoII} width={100} />
                <nav>
                <div className="menu">
                <AnchorLink href='#home'className="item"spy={true} smooth={true} duration={500}>Home </AnchorLink>
                    <AnchorLink href='#sobre'className="item"spy={true} smooth={true} offset={100} duration={500}>Sobre </AnchorLink>
                    <AnchorLink href='#project'  className="item">Projetos</AnchorLink>
                    <AnchorLink href='#social' className="item">Contato</AnchorLink>
                </div>
                </nav>    

          
        </header>
    );
}