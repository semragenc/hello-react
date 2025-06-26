import React, {useState} from 'react'

function Farm() {
    const [farm, setFarm] = useState({kind:"Animal", breed:"Leon"});
      return (
    <div>
        <h2>Farm</h2>
        {farm.kind} {farm.breed}
        <br/>
        <div>
        <button onClick={() => setFarm({...farm, kind: "Planet"})}>
            Change to kind</button>
        <button onClick={() => setFarm({...farm, breed: "Clover"})}>
            Change to breed</button>
        </div>
    </div>
  )
}

export default Farm;