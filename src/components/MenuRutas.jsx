import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/musica">Musica</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/formsimple">Form Simple</a>
          </li>
          <li>
            <a href="/collatz">Collatz</a>
          </li>
          <li>
            <a href="/tablamultiplicar">Tabla Multiplicar</a>
          </li>
          <li>
            <a href="/tablamultiplicarv2">Tabla Multiplicar V2</a>
          </li>

        </ul>
      </div>
    );
  }
}
