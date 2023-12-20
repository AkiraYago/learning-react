import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UseState = () => {
  const code = `
  import useState from "react";

  const MyRoom = () => {
    const [color, setColor] = useState("white");

    return (
      <div onLeaveRoom={() => setColor("black")}>
        Pared
      </div>
    );
  }

  export default MyRoom;
  `;
  return (
    <div className="concept-container">
      <h1>//---------------------------------------------------------------------</h1>
      <h1 className="title">UseState</h1>
      <p>El Hook <code>useState</code> es aquello que nos sirve para controlar el estado de un componente. Esto lo hacemos a través de un destructuring array el cual tendrá la variable de estado y su <code>setter.</code></p>

      <h3 className="subtitle">Analogía</h3>
      <p>Imagina que quieres cambiar de color las paredes de una de las habitaciones de la casa que hablamos en los Hooks. Nuestra variable de estado se llamaria <code>color</code> y por consecuencia su setter se llamaría <code>setColor</code>. Cuando quieras cambiar el color de las paredes cuando suceda cierto evento como por ejemplo cuando salgas de la habitación puedes llamar <code>setColor(colorElegido)</code> para cambiarlo al color que deseas.</p>

      <h3 className="subtitle">Bloque de Código</h3>
      <p>Ejemplo de código mostrando como se usa <code>useState</code></p>

      <SyntaxHighlighter language='jsx' style={coldarkDark} >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default UseState;