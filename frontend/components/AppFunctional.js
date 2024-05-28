// import React, {useState} from 'react'

// // Suggested initial states
// const initialMessage = '';
// const initialEmail = '';
// const initialSteps = 0;
// const initialIndex = 4; // the index the "B" is at

// export default function AppFunctional(props) {
//   // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
//   const [message, setMessage] = useState(initialMessage)
//   const [email, setEmail] = useState(initialEmail)
//   const [steps, setSteps] = useState(initialSteps)
//   const [index,setIndex] = useState(initialIndex)

//   function getXY(index) {
//     // It it not necessary to have a state to track the coordinates.
//     // It's enough to know what index the "B" is at, to be able to calculate them.
//     const x = (index % 3) + 1;
//     const y = Math.floor(index / 3) + 1;
//     return {x, y};
//   }

//   function getXYMessage() {
//     // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
//     // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
//     // returns the fully constructed string.
//     const {x, y} = getXY(index)
//     return `Coordinates (${x}, ${y})`;
//    }

//   function reset() {
//     // Use this helper to reset all states to their initial values.
//     setMessage(initialMessage);
//     setEmail(initialEmail);
//     setSteps(initialSteps);
//     setIndex(initialIndex);
//   }

//   function getNextIndex(direction) {
//     // This helper takes a direction ("left", "up", etc) and calculates what the next index
//     // of the "B" would be. If the move is impossible because we are at the edge of the grid,
//     // this helper should return the current index unchanged.
//     const {x, y} = getXY(index);
//     let newIndex = index;

//     switch(direction) {
//       case 'left':
//         if (x > 1) newIndex = index - 1;
//         break;
//       case 'up':
//         if (y > 1) newIndex = index - 3;
//         break;
//       case 'right':
//        if  (x < 3) newIndex = index + 1;
//        break;
//       case 'down':
//         if (y < 3) return index + 3;
//         break;
//       default:
//         break;
//     }
//     return newIndex;
//   }

//   function move(evt) {
//     // This event handler can use the helper above to obtain a new index for the "B",
//     // and change any states accordingly.
//     const direction = evt.target.id;
//     const nextIndex = getNextIndex(direction);
//     if (nextIndex !== index) {
//       setIndex(nextIndex);
//       setSteps(steps + 1)
//     }
//   }

// function onChange(evt) {
//     // You will need this to update the value of the input.
//     setEmail(evt.target.value);
//   }

//   async function onSubmit(evt) {
//     evt.preventDefault();
//     const { x, y} = getXY(index)
//     const payload = { x: getXY(index).x, y: getXY(index).y, steps, email };
  
//     try {
//       const response = await fetch('http://localhost:9000/api/result', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage('Error submitting the form');
//     }
//   }

//   return (
//     <div id="wrapper" className={props.className}>
//       <div className="info">
//         <h3 id="coordinates">{getXYMessage()}</h3>
//         <h3 id="steps">You moved {steps} times</h3>
//       </div>
//       <div id="grid">
//         {
//           [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
//             <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
//               {idx === 4 ? 'B' : null}
//             </div>
//           ))
//         }
//       </div>
//       <div className="info">
//         <h3 id="message">{message}</h3>
//       </div>
//       <div id="keypad">
//         <button id="left" onClick={this.move}>LEFT</button>
//         <button id="up" onClick={this.move}>UP</button>
//         <button id="right" onClick={this.move}>RIGHT</button>
//         <button id="down" onClick={move}>DOWN</button>
//         <button id="reset" onClick={reset}>reset</button>
//       </div>
//       <form>
//         <input id="email" type="email" placeholder="type email" value={email} onChange={onChange}/>
//         <input id="submit" type="submit"/>
//       </form>
//     </div>
//   )
// }

// ❗ OPTIONAL, not required to pass the sprint
// ❗ OPTIONAL, not required to pass the sprint
// ❗ OPTIONAL, not required to pass the sprint
// import React from 'react'

// // Suggested initial states
// const initialMessage = ''
// const initialEmail = ''
// const initialSteps = 0
// const initialIndex = 4 // the index the "B" is at

// const initialState = {
//   message: initialMessage,
//   email: initialEmail,
//   index: initialIndex,
//   steps: initialSteps,
// }

// export default class AppClass extends React.Component {
//   // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
//   // You can delete them and build your own logic from scratch.
//   constructor(props) {
//     super(props);
//     this.state = initialState;
//   }

//   getXY = (index) => {
//     // It it not necessary to have a state to track the coordinates.
//     // It's enough to know what index the "B" is at, to be able to calculate them.
//     const x = (index % 3) + 1;
//     const y = Math.floor(index / 3) + 1
//     return { x, y };
//   }

//   getXYMessage = () => {
//     // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
//     // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
//     // returns the fully constructed string.
//     const { x, y } = this.getXY(this.state.index);
//     return `Coordinates (${x}, ${y})`;
//   }

//   reset = () => {
//     // Use this helper to reset all states to their initial values.
//     this.setState(initialState);
//   }

//   getNextIndex = (direction) => {
//     // This helper takes a direction ("left", "up", etc) and calculates what the next index
//     // of the "B" would be. If the move is impossible because we are at the edge of the grid,
//     // this helper should return the current index unchanged.
//     const { x, y } = this.getXY(this.state.index);
//     let newIndex = this.state.index;

//     switch (direction) {
//       case 'left':
//         if (x > 1) newIndex = this.state.index - 1;
//         break;
//       case 'up':
//         if (y > 1) newIndex = this.state.index - 3;
//         break;
//       case 'right':
//         if (x < 3) newIndex = this.state.index + 1;
//         break;
//       case 'down':
//         if (y < 3) newIndex = this.state.index + 3;
//       break;     
//       default: 
//       break;
//     }

//     return newIndex;
//   }

//   move = (evt) => {
//     // This event handler can use the helper above to obtain a new index for the "B",
//     // and change any states accordingly.
//     const direction = evt.target.id;
//     const nextIndex = this.getNextIndex(direction);
//     if (nextIndex !== this.state.index) {
//       this.setState((prevState) => ({
//         index: nextIndex,
//         steps: prevState.steps + 1,
//       }));
//     }
//   }

//   onChange = (evt) => {
//     // You will need this to update the value of the input.
//     this.setState({ email: evt.target.value})
//   }

//   onSubmit = async (evt) => {
//     // Use a POST request to send a payload to the server.
//     evt.preventDefault();
//     const {index, steps, email } = this.state;
//     const { x, y } = this.getXY();
//     const payload = { x, y, steps, email};

//     try {
//       const response = await fetch(`http:localhost:9000/api/result`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await response.json();
//       this.setState({ message: data.message })
//     } catch(error) {
//       this.setState({ message: 'Error submitting the form'})
//     }
//   }

//   render() {
//     const { className } = this.props
//     const { index, steps, message } = this.state;
//     return (
//       <div id="wrapper" className={className}>
//         <p>(This component is not required to pass the sprint)</p>
//         <div className="info">
//           <h3 id="coordinates">C{this.getXYMessage()}</h3>
//           <h3 id="steps">You moved {steps} times</h3>
//         </div>
//         <div id="grid">
//           {
//             [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
//               <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
//                 {idx === index ? 'B' : null}
//               </div>
//             ))
//           }
//         </div>
//         <div className="info">
//           <h3 id="message">{message}</h3>
//         </div>
//         <div id="keypad">
//           <button id="left" onClick={this.move}>LEFT</button>
//           <button id="up" onClick={this.move}>UP</button>
//           <button id="right" onClick={this.move}>RIGHT</button>
//           <button id="down" onClick={this.move}>DOWN</button>
//           <button id="reset" onClick={this.reset}>reset</button>
//         </div>
//         <form onSubmit={this.onSubmit}>
//           <input id="email" type="email" placeholder="type email" value={this.state.email} onChange={this.onChange}></input>
//           <input id="submit" type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';

// Suggested initial states
const initialMessage = '';
const initialEmail = '';
const initialSteps = 0;
const initialIndex = 4; // the index the "B" is at

export default function AppFunctional(props) {
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [steps, setSteps] = useState(initialSteps);
  const [index, setIndex] = useState(initialIndex);

  function getXY(index) {
    const x = (index % 3) + 1;
    const y = Math.floor(index / 3) + 1;
    return { x, y };
  }

  function getXYMessage() {
    const { x, y } = getXY(index);
    return `Coordinates (${x}, ${y})`;
  }

  function reset() {
    setMessage(initialMessage);
    setEmail(initialEmail);
    setSteps(initialSteps);
    setIndex(initialIndex);
  }

  function getNextIndex(direction) {
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
  }

  function move(evt) {
    const direction = evt.target.id;
    const nextIndex = getNextIndex(direction);
    if (nextIndex !== index) {
      setIndex(nextIndex);
      setSteps(steps + 1);
    }
  }

  function onChange(evt) {
    setEmail(evt.target.value);
  }

  async function onSubmit(evt) {
    evt.preventDefault();
    const { x, y } = getXY(index);
    const payload = { x, y, steps, email };

    try {
      const response = await fetch('http://localhost:9000/api/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error submitting the form');
    }
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
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
        <input id="email" type="email" placeholder="type email" value={email} onChange={onChange} />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}
