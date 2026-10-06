import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();

  generarCollatz = (event) => {
    event.preventDefault(); //CAPTURAMOS EL NUMERO DE LA CAJA

    let numero = parseInt(this.cajaNumero.current.value);

    let aux = [];

    while (numero != 1) {
      if (numero % 2 == 0) {
        //PAR

        numero = numero / 2;
      } else {
        //IMPAR

        numero = numero * 3 + 1;
      } //ESTE NUMERO LO ALMACENAMOS EN EL ARRAY

      aux.push(numero);
    }

    this.setState({
      numeros: aux,
    });
  };

  state = {
    numeros: [],
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src="https://ztfnews.wordpress.com/wp-content/uploads/2013/07/lothar_collatz.jpg"
            alt="Conjetura de Collatz"
            style={{ maxWidth: "300px", height: "200px" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <p>
              La conjetura de Collatz es una conjetura matemática que se formula
              de la siguiente manera:
            </p>
            <p>
              Dado un número entero positivo, si es par, se divide por 2; si es
              impar, se multiplica por 3 y se suma 1. Se repite el proceso hasta
              llegar a 1.
            </p>

            <form onSubmit={this.generarCollatz}>
              <label>Introduzca número </label>
              <input type="number" ref={this.cajaNumero} />
              <button>Mostrar collatz</button>
            </form>
            <ul>
              {this.state.numeros.map((num, index) => {
                //return <li key={index}>{num}</li>;
                return (
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
