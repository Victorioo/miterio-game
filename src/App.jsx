import { Inputs } from "./inputs";

function App() {
  return (
    <>
      <div className="division">
          <h1>Monstruo</h1>
        <ul>
          <li>Drácula
            <Inputs/>
          </li>
          <li>Frankenstein  <Inputs/></li>
          <li>El hombre lobo  <Inputs/></li>
          <li>Fantasma  <Inputs/></li>
          <li>La momia  <Inputs/></li>
          <li>Dr.Jekyll y Mr Hyde  <Inputs/></li>
        </ul>
      </div>
      <div className="division">
          <h1>Víctima </h1>
        <ul>
          <li>Conde  <Inputs/></li>
          <li>Condesa  <Inputs/></li>
          <li>Ama de llaves  <Inputs/></li>
          <li>Mayordomo  <Inputs/> </li>
          <li>Doncella <Inputs/></li>
          <li>Jardinero <Inputs/> </li>
        </ul>
      </div>
      <div className="division">
          <h1>Lugar </h1>
        <ul>
          <li>Vestibulo  <Inputs/></li>
          <li>Alcoba  <Inputs/></li>
          <li>Biblioteca  <Inputs/></li>
          <li>Salon  <Inputs/></li>
          <li>Laboratorio  <Inputs/></li>
          <li>Bodega  <Inputs/></li>
          <li>Panteon  <Inputs/></li>
          <li>Cocheras  <Inputs/></li>
        </ul>
      </div>
    </>
  );
}

export default App;
