import react from "react";
import '../styles/Comentarios.css'

const Comentario = (props) => {
  const nome = props.nome;
  const email = props.email;
  const data = props.data.toString();
  const msg = props.children;

  return (
    <div className="comentario">
      <h2> {nome} </h2>
      <h6> {email} </h6>
      <p> {msg} </p>
      <p className="data"> {data}</p>
    </div>
  );
};

export default Comentario;
