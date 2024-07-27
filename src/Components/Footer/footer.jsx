import React from 'react';
import './footer.css';
import simbolo_insta from '../../assets/instagram_thumb.png';
import simbolo_whats from '../../assets/whatsapp_thumb.png';
import simbolo_pix from '../../assets/pix_thumb.png';

function Footer() {


    return(

    <div className= "container-footer">
        <div className= "blocos">
            <div className= "footer-block">
                <a href= "home">Home</a>
                <a href= "quemsomos">Quem Somos</a>
                <a href= "produtos">Produtos</a>
                <a href= "faleconosco">Fale Conosco</a>
            </div>

            <div className= "footer-block">
                <div>
                    <p>Siga-nos</p>
                    <a href= "https://wa.me/5511962011436">
                        <img className= "img-whats" src= {simbolo_whats}></img>
                    </a>
                    <a href="https://www.instagram.com/cafe.22oficial/">
                        <img className= "img-insta" src= {simbolo_insta}></img>
                    </a>
                </div>
            </div>

            <div className= "footer-block">
                <p>Formas de Pagamento:</p>
                <img className= "img-pix" src= {simbolo_pix}></img>
            </div>
        </div>

    </div>
        
        );


}

export default Footer;