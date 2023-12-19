import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {  coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Hooks = () => {
  const code = `
  // useState
  // --------------------------------------------------------------------------
  const [count, setCount] = useState(0);

  // useEffect
  // --------------------------------------------------------------------------
  useEffect(() => {
    // Código...

  }, [dependencias]);
  `;
  return (
    <div className="hooks">
      <p>//--------------------------------------------------------------------------------------------------------</p>
      <h1 className="title">Hooks</h1>
      <p>Los <strong>Hooks</strong> son funciones proporcionadas por React que permiten diferentes cosas, como controlar estados, efectos, etc. Todo esto dentro de los componentes que hayamos creado.</p>
      <h3 className="subtitle">Analogía</h3>
      <p>Imagina que quieres construir una casa, pero como estamos en React deberás pensar en componentes, por lo que cada habitación que construyas será un componente parte de esta casa. Sin embargo, deberás usar algunos estantes para organizar las cosas que se encuentren en cada habitación.</p>
      <p>Aquí es donde entran los Hooks, los cuales serán usados para gestionar diferentes cosas dentro de cada habitación.</p>
      <h3 className="subtitle">Bloque de Código</h3>
      <p>Ejemplo de código mostrando algunos Hooks con los que cuenta React y su forma de uso:</p>
      <SyntaxHighlighter language='jsx' style={coldarkDark} >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Hooks;