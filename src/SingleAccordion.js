import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { AiFillMinusCircle } from "react-icons/ai";

function SingleAccordion({title,description}) {
    
    const [openAccordion, setOpenAccordion] = useState(false);

    return (
        <div className="accordion-item">
            <header>
                <h5>{title}</h5>
                <button onClick={() => setOpenAccordion(!openAccordion)}>
                    {openAccordion ? <AiFillMinusCircle /> : <FaCirclePlus />}
                </button>
            </header>
            {openAccordion && <p>{description}</p>}
        </div>
    );
}

export default SingleAccordion;