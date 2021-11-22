import { useState } from "react";
const ItemCount = ({ stock, initial, onAddHandler }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-div">
      <button
        onClick={() =>
          onAddHandler("decrement", {
            counter: counter,
            setCounter: setCounter,
            initial: initial,
            stock: stock,
          })
        }
      >
        -
      </button>
      <p>{counter}</p>

      <button
        onClick={() =>
          onAddHandler("increment", {
            counter: counter,
            setCounter: setCounter,
            initial: initial,
            stock: stock,
          })
        }
      >
        +
      </button>
      <button>Add to Cart</button>
    </div>
  );
};
export default ItemCount;