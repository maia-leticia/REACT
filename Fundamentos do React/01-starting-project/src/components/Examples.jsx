import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
    const [selectedTopic, setselectedTopic] = useState(null)

    function handleSelect(selectedButton) {
        setselectedTopic(selectedButton)
    }
    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton>
            </menu>

            {!selectedTopic &&
                <p>Select a topic!</p>
            }
            {selectedTopic &&
                (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                )
            }

        </Section>
    )
}