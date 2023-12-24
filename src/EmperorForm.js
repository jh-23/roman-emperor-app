import React, { useState } from 'react';

function EmperorForm({ onAddNewEmperor }) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [reign, setReign] = useState("");
    const [info, setInfo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: name,
            image: image,
            reign: reign,
            info: info
        };
        fetch('http://localhost:3000/emperors', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then(newEmperor => onAddNewEmperor(newEmperor))
    }

    return (
        <div className="new-emperor-form">
            <h2>Add New Roman Emperor: </h2>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Emperor name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" placeholder="Emperor reign" value={reign} onChange={(e) => setReign(e.target.value)} />
                <input type="text" placeholder="Emperor info" value={info} onChange={(e) => setInfo(e.target.value)} />
                <button type="submit">Add Emperor</button>
            </form>
        </div>
    )
}

export default EmperorForm;