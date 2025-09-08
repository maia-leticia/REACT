import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput";
import { useState } from "react";

const VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}


function App() {

  const [value, setValue] = useState(VALUES)

  const inputIsValid = value.duration >=1

  function handleChangeName(identification, value){

    setValue((prevValues)=>{
      return{
        ...prevValues,
        [identification]: +value
      }
    })
  } 
  return (
    <>
      <Header/>
      <main>
        <div id="user-input"  >
          <div className="input-group">
            <UserInput title={"Initial Investment"}  OnChangeValue={handleChangeName} identification={"initialInvestment"}/>
            <UserInput title={"Annual Investment"}  OnChangeValue={handleChangeName}  identification={"annualInvestment"}/>
          </div> 
          <div className="input-group">
            <UserInput title={"Expected Return"} OnChangeValue={handleChangeName}  identification={"expectedReturn"}/>
            <UserInput title={"Duration"} OnChangeValue={handleChangeName}  identification={"duration"}/>
          </div>    
        </div>
        <div>
          { inputIsValid && <Result values={value}/>}
          { !inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
        </div>
      </main>
    </>
  )
}

export default App
