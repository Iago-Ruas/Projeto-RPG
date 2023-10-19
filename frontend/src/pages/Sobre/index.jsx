import "./index.css";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <h1>Sobre</h1>

      <Link to="/">Main</Link>
      <Link to="/ficha">Ficha</Link>
    </>
  );
};

export default Sobre;
