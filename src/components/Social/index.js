import "./styles.css";

import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin, BsGithub, BsHeart } from 'react-icons/bs';
import { FaHeart} from 'react-icons/fa'



export default function Social() {
    return (
        <section className="media">
       
            <div className="social-media" id="social">   
                <a href="https://www.instagram.com/katherine.mariete/"><FiInstagram size="30"/></a>
                <a href="https://www.linkedin.com/in/katherine-mariete-l%C3%B3pez-duarte-a7a219a2/"><BsLinkedin size="30" /></a>
                <a href="https://github.com/katamarieth"><BsGithub size="30"/></a>
            </div>
        
            <div className='footer'>
                <p>Made with <FaHeart color="#DC143C"/> ,All rights reserved</p>
            </div>
            
        </section>    
    )
}