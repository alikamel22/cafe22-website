import React from 'react';
import './navbar.css';
function Navbar () {
    return(

    <header className="header">
        <nav className="navbar">
            <a href= "#hero">Home</a>
            <a href= "#quemsomos">Quem Somos</a>
            <a href= "#produtos">Produtos</a>
            <a href= "#faleconosco">Fale Conosco</a>
        </nav>
    </header>

    );
}

export default Navbar;