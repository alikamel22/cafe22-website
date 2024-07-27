import React from 'react'
import './faleconosco.css'
function Faleconosco() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "416a1d09-b34c-4643-817d-2044b10eaa0b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("e-mail enviado com sucesso!");
        }
      };


    return(
    <div className= "container-total-faleconosco" id= "faleconosco">
        <div className= "raqwa-servindo"></div>

        <section className = "contato">
            <form onSubmit={onSubmit} className= "container-faleconosco">

                <h2 className= "titulo">Fale Conosco</h2>

                <div className= "bloco">
                    <label>Nome*</label>
                    <input type= "text" className= "campo" name= "nome" placeholder= "Digite seu nome" required></input>
                </div>

                <div className= "bloco">
                    <label>E-mail*</label>
                    <input type= "text" className= "campo" name= "email" placeholder= "Digite seu e-mail" required></input>
                </div>

                <div className= "bloco">
                    <label>Mensagem*</label>
                    <textarea name= "mensagem" className= "campo-mensagem" placeholder= "Digite sua mensagem" required></textarea>
                </div>

                <button>Enviar</button>

            </form>
        </section>

        <div className="mosaico"></div>
    </div>
    );

}

export default Faleconosco;