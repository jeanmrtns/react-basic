import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Comentario from "./components/Comentarios";

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "Jean",
        email: "jeanmrtns4@gmail.com",
        data: new Date(2020, 11, 7),
        mensagem: "Olá, mundo!",
      },
      {
        nome: "Maria",
        email: "maria@mail.com",
        data: new Date(2020, 11, 6),
        mensagem: "Hello, darkness",
      },
    ],
  };

  adicionarComentario = () => {
    console.log("oi");

    const novoComentario = {
      nome: "Hey",
      email: "hey@mail.com",
      data: new Date(),
      mensagem: "Hello",
    };

    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario ]
    });
    
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data.toString()}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <button className="addComentario" onClick={this.adicionarComentario}>
          Adicionar comentário
        </button>
      </div>
    );
  }
}

export default App;
