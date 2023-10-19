import "./index.css";

const Cabecalho = () => {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Nome" />
        <select name="racas" id="racas">
          <option value="humano" placeholder="Humano">
            Hunano
          </option>
          <option value="elfo">Elfo</option>
          <option value="anao">Anão</option>
          <option value="halfling">Halfling</option>
          <option value="tiefling">Tiefling</option>
        </select>
        <select name="classes" id="classes">
          <option value="warlock">Warlock</option>
          <option value="guerreiro">Guerreiro</option>
          <option value="mago">Mago</option>
          <option value="ladino">Ladino</option>
          <option value="paladino">Paladino</option>
        </select>
        <span>Nível</span>
        <br />
        <span>Pontos de Vida</span>
        <br />
      </form>
    </>
  );
};

export default Cabecalho;
