# Explanation useState
Según mi entendimiento, **useState** es un Hook de React para agregar estado a los componentes. En este hook existen 2 partes escenciales, un array que contiene la variable de estado y su función setter correspondiente. La segunda parte importante de este hook es el valor inicial de la variable de estado, el cual debes ubicarlo dentro de los parentesis de **useState**, el valor incial puede ser un número, string, array, objeto, etc.

En el siguiente ejemplo lo utilizo para crear un contador simple, que mostrará las veces que se ha hecho click en un botón.

## Example
<pre>
```javascript
import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => { setCounter(counter + 1) }}>
        {`Contador: ${counter}`}
      </button>
    </div>
  );
}

export default UseState;
```
</pre>