import { useState } from "react";
import { Link } from "react-router-dom";
import Atributos from "../../components/Atributos/index";
import Cabecalho from "../../components/Cabecalho/index";
import "./index.css";

const Ficha = () => {
  const [raca, setraca] = useState("");

  return (
    <>
      <h1>Ficha</h1>
      <Link to="/">Main</Link>
      <Link to="/sobre">Sobre</Link>

      <Cabecalho />
      <Atributos />

      <span>Habilidades</span>
      <ul>
        <li></li>
      </ul>

      <span>Perícias</span>
      <ul>
        <li></li>
      </ul>

      <span>Equipamento</span>
      <ul>
        <li></li>
      </ul>

      <span>Magias</span>
      <ul>
        <li></li>
      </ul>

      <span>Antecedentes</span>
      <ul>
        <li></li>
      </ul>

      <span>Aliados e Contatos</span>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default Ficha;
