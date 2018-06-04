import React from 'react';
import Person from '../screen/Person';

const persons =(props)=> props.persons.map((person,index) =>{
  return(
    <Person
    name={person.name}
    age={person.age}
    click={props.click.bind(this,index)}
    changed={(event)=>props.changed(event, person.id)} />

)}
)

export default persons;
