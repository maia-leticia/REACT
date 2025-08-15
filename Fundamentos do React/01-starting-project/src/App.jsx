import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {

  const [selectedTopic, setselectedTopic] = useState("clique em algum botão!")

  function handleSelect(selectedButton){
    setselectedTopic(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main> 
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
            {...CORE_CONCEPTS[0]}
            />
            <CoreConcept
            {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
            {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
            {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
