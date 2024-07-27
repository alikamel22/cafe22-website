import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import Quemsomos from './Components/Quemsomos/quemsomos';
import Produtos from './Components/Produtos/produtos';
import Faleconosco from './Components/Faleconosco/faleconosco';
import Footer from './Components/Footer/footer';
function App() {

    return(<div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Quemsomos></Quemsomos>
        <Produtos></Produtos>
        <Faleconosco></Faleconosco>
        <Footer></Footer>
        </div>)
}

export default App;