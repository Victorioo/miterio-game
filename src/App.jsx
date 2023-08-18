import { Inputs } from "./inputs";
import { useState } from "react";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (event) => {
    const selectedElement = event.target;

    if (selectedElement.tagName === "SPAN") {
      selectedElement.classList.toggle("selected");
    }
  };

  return (
    <>
      <div className="division">
        <h1>Monstruo</h1>
        <ul>
          <li>
            <span onClick={handleItemClick}>Dracula</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Frankenstein</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Hombre Lobo</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Fantasma</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Momia</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Dr Jekyll Mr Hyde</span>
            <Inputs />
          </li>
        </ul>
      </div>
      <div className="division">
        <h1>Víctima </h1>
        <ul>
          <li>
            <span onClick={handleItemClick}>Conde</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Condesa</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Ama de llaves</span>
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Mayordomo</span>
            <Inputs />{" "}
          </li>
          <li>
            <span onClick={handleItemClick}>Doncella</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Jardinero</span> <Inputs />{" "}
          </li>
        </ul>
      </div>
      <div className="division">
        <h1>Lugar </h1>
        <ul>
          <li>
            <span onClick={handleItemClick}>Vestibulo</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Alcoba</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>
              Biblioteca
            </span>{" "}
            <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Salon</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Laboratorio</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Bodega</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Panteon</span> <Inputs />
          </li>
          <li>
            <span onClick={handleItemClick}>Cocheras</span> <Inputs />
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
