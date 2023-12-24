import React, { useState, useEffect } from 'react';
import EmperorList from './EmperorList';
import EmperorForm from './EmperorForm';

function EmperorContainer() {

    const [emperors, setEmperors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/emperors")
            .then((r) => r.json())
            .then((data) => setEmperors(data))
    }, []);

    return (
        <main>
            <EmperorList emperors={emperors} />
            <EmperorForm />
        </main>

    );
}

export default EmperorContainer;


