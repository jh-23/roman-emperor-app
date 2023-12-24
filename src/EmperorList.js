import React from "react";
import EmperorCard from "./EmperorCard";

function EmperorList({ emperors }) {

    return (
        <div>
            <ul className="cards">
                {emperors.map((emperor) => {
                    return <EmperorCard key={emperor.id} emperor={emperor} />
                })}
            </ul>
        </div>
    )
}

export default EmperorList;