import { useState } from "react";
import db from "./db";
import SingleAccordion from "./SingleAccordion";

function App() {

    const [data, setData] = useState(db);

    return (
        <div className="container">
            <h4>زبان های برنامه نویسی سطح بالا</h4>
            <div className="accordion-container">
                {
                    data.map((accordionItem, index) => (
                        <SingleAccordion key={index} {...accordionItem} />
                    ))
                }
            </div>
        </div>
    );
}

export default App;