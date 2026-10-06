import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    numeroIntroducido = React.createRef();

    generarTablas = (event) => {
        event.preventDefault();
        console.log("hola")
        let numero = parseInt(this.numeroIntroducido.current.value);
        let resultadosArray = [];

        for (let index = 1; index <= 10; index++) {
            resultadosArray.push(numero*index);
            console.log(numero*index)           
        }

        this.setState({
            resultados: resultadosArray,
            numero,
        })

    }

    generarNumeros = () =>{
        let aux = [];
        for (let index = 0; index < 10; index++) {
            let aletorio = parseInt(Math.remdom()*50) +1;
            aux.push(aletorio);
        }

    }


    state = {
        resultados: [],
        numero: 0,
    };
    


  render() {
    return (
      <div>
        <h2>Tabla de multiplicar</h2>
        <a>Introduce el número para visualizar la tabla</a>
        <button onClick={this.generarNumeros}>
            Generar números aleatorios
        </button>
        <form onSubmit={this.generarTablas}>
            <label>Número: </label>
            <select ref={this.numeroIntroducido}>
                {
                    this.state.numero.map((numero, index) => {
                        return(
                            <option>{numero}</option>
                        )
                    })
                }
            </select>
            <button>Mostrar tabla</button>
        </form>
        <table>
          <tbody>
            {this.state.resultados.map((num, index)=> {
                return (
                  <tr key={index}>
                    <td>{this.state.numero} X {index + 1}</td>
                    <td>{num}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
