import React, {use, useState} from 'react'

function Colors() {
    const [colors, setColors] = useState(["red", "green", "blue"]);
    const handleClick = () => {
        setColors([...colors, Math.random(colors)])
    };
  return (
    <div>
    <br/>
    <hr/>
    <h1>Colors</h1>
    {colors.map((color, i) => (
    <div key={i}>{color}</div>))}

    <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Colors;
//useStateArray