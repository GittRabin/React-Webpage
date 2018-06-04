import React from 'react';

const Render =(props)=>{
  return(
    <div>
    <p>This is really awesome.</p>
    <button onClick={props.onClick}>Show Persons </button>
    </div>
  )


}

export default Render;
