import "./index.css";

const Atributos = () => {
  return (
    <form>
      <span>Atributos</span>
      <ul>
        <li>
          Força <input type="number" min={8} placeholder="8" />
        </li>
        <li>
          Destreza <input type="number" min={8} placeholder="8" />
        </li>
        <li>
          Constiruição <input type="number" min={8} placeholder="8" />
        </li>
        <li>
          Inteligência <input type="number" min={8} placeholder="8" />
        </li>
        <li>
          Sabedoria <input type="number" min={8} placeholder="8" />
        </li>
        <li>
          Carisma <input type="number" min={8} placeholder="8" />
        </li>
      </ul>
    </form>
  );
};

export default Atributos;
