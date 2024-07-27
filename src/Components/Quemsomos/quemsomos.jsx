import React from 'react';
import './quemsomos.css'
function Quemsomos() {

    return(

    <div>
        <div className="mosaico" id= "quemsomos"></div>
        <div className="quemsomos-conteudo">
            <div className="quemsomos-imagem-cafe"></div>
            <div className="quemsomos-titulo-descricao">
                <h1 className="quemsomos-titulo">Quem Somos</h1>
                <p>A Café 22 surge num contexto onde há uma grande demanda por novas formas
                    de se fazer café, com o público brasileiro cada vez mais interessado pelas
                    inúmeras experiências sensoriais que os grãos podem proporcionar.
                </p>
                <p>
                Nossa missão é entregar cafés de alta qualidade para todos os gostos.
                Oferecemos uma seleção diversificada, desde cafés tradicionais até opções
                especializadas com moagem extrafina, perfeita para o método turco.
                Cada grão é escolhido com cuidado para garantir uma experiência de sabor rica e autêntica.
                </p>
            </div>
        </div>
        <div className="mosaico"></div>
    </div>

        );
}

export default Quemsomos;