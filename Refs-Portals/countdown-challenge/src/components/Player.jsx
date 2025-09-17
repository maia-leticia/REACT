import { useState, useRef } from "react";

export default function Player() {
  const currentName = useRef()
  const [name, setName] = useState(null)
  // const [submitName, setSubmitName] = useState(false)

  // function handleChangeName(event){
  //   setSubmitName(false)
  //   setName(event.target.value)
  // }

  function handleSubmitName(){
    // setSubmitName(true)
    setName(currentName.current.value)
  }


  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input 
        ref={currentName}
        type="text" 
        // onChange={handleChangeName} 
        // value={name} 
        />
        <button onClick={handleSubmitName}>Set Name</button>
      </p>
    </section>
  );
}
