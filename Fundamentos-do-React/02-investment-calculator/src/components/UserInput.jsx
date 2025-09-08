import { useState } from "react";
export default function UserInput({title, OnChangeValue, identification}){

const [inputValue, setInputValue] = useState("")

function handleChange(e){
    const newValue = e.target.value
    setInputValue(newValue)
    OnChangeValue(identification, newValue)
}

    return(
        <div>
            <label>{title}</label>
            <input type="number" value={inputValue} onChange={handleChange} />
        </div>
    )
}