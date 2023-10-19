import { Link } from "react-router-dom";
import "./index.css";

const Main = () => {
  return (
    <>
      <h1>MAIN</h1>

      <Link to="/ficha">Ficha</Link>
      <Link to="/sobre">Sobre</Link>
    </>
  );
};

export default Main;
