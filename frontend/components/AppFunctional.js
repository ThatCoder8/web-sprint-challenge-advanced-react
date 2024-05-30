import React, { useState } from 'react';

const initialMessage = '';
const initialEmail = '';
const initialSteps = 0;
const initialIndex = 4;

const AppFunctional = ({ className }) => {
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [index, setIndex] = useState(initialIndex);
  const [steps, setSteps] = useState(initialSteps);

  const getXY = (index) => {
    const x = (index % 3) + 1;
    const y = Math.floor(index / 3) + 1;
    return { x, y };
  };

  const getXYMessage = () => {
    const { x, y } = getXY(index);
    return `Coordinates (${x}, ${y})`;
  };

  const reset = () => {
    setMessage(initialMessage);
    setEmail(initialEmail);
    setIndex(initialIndex);
    setSteps(initialSteps);
  };

  const getNextIndex = (direction) => {
    const { x, y } = getXY(index);
    let newIndex = index;

    switch (direction) {
      case 'left':
        if (x > 1) newIndex = index - 1;
        break;
      case 'up':
        if (y > 1) newIndex = index - 3;
        break;
      case 'right':
        if (x < 3) newIndex = index + 1;
        break;
      case 'down':
        if (y < 3) newIndex = index + 3;
        break;
      default:
        break;
    }

    return newIndex;
  };

  const move = (evt) => {
    const direction = evt.target.id;
    const nextIndex = getNextIndex(direction);
    if (nextIndex !== index) {
      setIndex(nextIndex);
      setSteps(prevSteps => prevSteps + 1);
      setMessage('');
    } else {
      setMessage(`You can't go ${direction}`);
    }
  };

  const onChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const { x, y } = getXY(index);
    const payload = { x, y, steps, email };

    try {
      const response = await fetch(`http://localhost:9000/api/result`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setMessage(data.message);
      setEmail(initialEmail);
    } catch (error) {
      setMessage('Error submitting the form');
      setEmail(initialEmail);
    }
  };

  return (
    <div id="wrapper" className={className}>
      <p>(This component is not required to pass the sprint)</p>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">{`You moved ${steps} time${steps === 1 ? '' : 's'}`}</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
          <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
            {idx === index ? 'B' : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" value={email} onChange={onChange}></input>
        <input id="submit" type="submit" />
      </form>
    </div>
  );
};

export default AppFunctional;


