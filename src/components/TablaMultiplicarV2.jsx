import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {
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
  
  
      state = {
          resultados: [],
          numero: 0,
      };
      
  
  
    render() {
      return (
        <div>
          <h2>Tabla de multiplicar</h2>
          <a>Introduce el número para visualizar la tabla</a>
          <form onSubmit={this.generarTablas}>
              <label>Número: </label>
              <input type="number" ref={this.numeroIntroducido} defaultValue={0}></input>
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
