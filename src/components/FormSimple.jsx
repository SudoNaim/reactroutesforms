import React, { Component } from 'react'

export default class FormSimple extends Component {

    inputFormulario = React.createRef();

    enviarInformacion = (event) => {
        event.preventDefault();
        console.log("aa");
        let nombre = this.inputFormulario.current.value;
        console.log("Datos enviados:", nombre)
    }

  render() {
    return (
        <div>
            <h1>Formulario Simple</h1>
            <p>Este es un formulario simple</p>
            <form onSubmit={this.enviarInformacion}>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" ref={this.inputFormulario} placeholder="Ingrese texto"></input>
                <button>Enviar</button>
            </form>
        </div>
    )
  }
}
