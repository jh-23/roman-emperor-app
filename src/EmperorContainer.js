import React, { useState, useEffect } from 'react';
import EmperorList from './EmperorList';
import EmperorForm from './EmperorForm';

function EmperorContainer() {

    const [emperors, setEmperors] = useState([]);

    function handleAddNewEmperor(newEmperor) {
        const updatedEmperors = [...emperors, newEmperor]
        setEmperors(updatedEmperors);
    }

    useEffect(() => {
        fetch("http://localhost:3000/emperors")
            .then((r) => r.json())
            .then((data) => setEmperors(data))
    }, []);

    return (
        <main>
            <EmperorList emperors={emperors} />
            <EmperorForm onAddNewEmperor={handleAddNewEmperor} />
        </main>

    );
}

export default EmperorContainer;


