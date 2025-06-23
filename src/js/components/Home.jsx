import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState('red');
    const [lights, setLights] = useState(['red', 'yellow', 'green']);

    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const toggleColor = () => {
        const sequence = ['red', 'green', 'yellow', 'purple'];
        const currentIndex = sequence.indexOf(color);
        let nextIndex = (currentIndex + 1) % sequence.length;
        const nextColor = sequence[nextIndex];
        if (nextColor === 'purple' && !lights.includes('purple')) {
            setColor('red');
        } else {
            setColor(nextColor);
        }
    };

    const togglePurple = () => {
        if (lights.includes('purple')) {
            setLights((prev) => prev.filter((c) => c !== 'purple'));
            if (color === 'purple') setColor('red');
        } else {
            setLights((prev) => [...prev, 'purple']);
        }
    };

    return (
        <div className="app-container">
            <div className="semaforo-container">
                <div className="semaforo">
                    {lights.map((c) => (
                        <div
                            key={c}
                            className={`luz ${c} ${color === c ? 'on' : ''}`}
                            onClick={() => handleClick(c)}
                        />
                    ))}
                </div>
                <div className="controls">
                    <button class="button" onClick={toggleColor}>
                        Cambiar color
                    </button>
                    <button class="button" onClick={togglePurple}>
                        {lights.includes('purple') ? 'Quitar púrpura' : 'Añadir púrpura'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;