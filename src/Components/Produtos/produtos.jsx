import React from 'react';
import img_cafe_tradicional from '../../assets/cafe_tradicional.png';
import img_cafe_cardamomo from '../../assets/cafe_cardamomo.png';
import img_cafe_graos from '../../assets/cafe_gourmet_graos.png';
import './produtos.css'

function Produtos() {


    return(

    <div className="container-produtos" id= "produtos">
        <h1 className= "titulo">Alguns de Nossos Produtos</h1>
        <div className= "cards"> 

            <div className= "div-cafe-card">
                <img className = "img-cafe-trad" src={img_cafe_tradicional}></img>
                <h2 className = "titulo-card">Café Tradicional</h2>
                <p>Café tradicional com moagem extrafina, para aqueles que preferem
                   algo mais intenso e com sabor mais encorpado
                </p>
            </div>

            <div className= "div-cafe-card">
                <img className = "img-cafe-cardamomo" src={img_cafe_cardamomo}></img>
                <h2 className = "titulo-card">Café com Cardamomo</h2>
                <p>Café tradicional com cardamomo, uma mistura bastante típica no 
                    oriente médio que proporciona uma experiência única
                </p>
            </div>

            <div className= "div-cafe-card">
                <img className = "img-cafe-gourmet" src={img_cafe_graos}></img>
                <h2 className = "titulo-card">Café Gourmet em Grãos</h2>
                <p>Café com torra média, para aqueles que moem seus
                    próprios grãos e preferem um café mais criteriosamente selecionado
                </p>
            </div>

        </div> 

        <div className="mosaico"></div>

    </div>
    
        );


}

export default Produtos;