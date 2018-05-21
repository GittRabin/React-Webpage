import React from 'react';

const person = (props) => {

  //single javascript file

   return(
     <div>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old. </p>
      <p>{props.children}</p>
      <input text="text" onChange={props.changed} value={props.name} />
    </div>
   );

}

export default person;
