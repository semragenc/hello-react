import React, {useState} from 'react'

function Form() {
    //tek bi useState kullanabiliriz çünkü çok fazla form elemanı olabilir;
    //const [form, setForm] = useState({ movie: "", food: "", gender: "0"});
    const [movie, setMovie] = useState("");
    const [food, setFood] = useState("");
    const [gender, setGender] = useState("0");
  return (
    <div>
        <div>MOVİE</div>
        <input 
        placeholder='Movie'
        //value={form.movie}
        value={movie}
        onChange={(event) => setMovie(event.target.value)}/>
        <input 
        placeholder='Food'
        value={food}
        onChange={(event) => setFood(event.target.value)}
        />
        <strong>{movie}, {food}</strong>
        <br/>
        <br/>
        <br/>
        <div>
            <div>GENDER</div>
            <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}>
                <option value= "1" >Woman</option>
                <option value= "0" >Man</option>
            </select>
            <br/>
            <strong>{gender === '0' ? 'Man' : "Woman"}</strong>
        </div>
        <br/>
    </div>
  )
}

export default Form