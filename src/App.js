import React, { Component } from 'react';
import './App.css';
import Person from './screen/Person';
import Persons from './container/Persons';
import Render from "./container/Render";


class App extends Component {

//original state
  state = {
      persons: [
        {id:1,name:'Rabin', age:20},
        {id:2,name:'Ayush', age:40},
        {id:3,name:'akjl', age:20},
      ],
      showPersons:false
  }
// clickEvent method to get dynamic name
/** clickEventHandler =(newName)=>{
//setting up value
  this.setState({
    persons: [
      {name:newName, age:20},
      {name:'Ayush', age:40},
      {name:'akjl', age:20},

    ]
  });

}
*/
//To toggle
 personToggleHandler =()=> {
   const valueCheck = this.state.showPersons;
   this.setState({ showPersons: !valueCheck });

 }

//change name
nameChangeHandler =(event, id)=>{
  //Try to find index of changing array object
  const personIndex = this.state.persons.findIndex(p=>{return p.id === id});


  //creating copy of persons array named as person and acessing value of personIndex
    const person = {...this.state.persons[personIndex]};
  //Converting matching id name into target name
    person.name = event.target.value;
  //creating new copy of array
    const persons = [...this.state.persons];
  //assaining changed value to array element index
    persons[personIndex] = person;
//updating state using setState function
  this.setState({ persons: persons});

}

deletePersonHandler =(indexPerson)=>{
  //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
        persons.splice(indexPerson,1);
  this.setState({persons:persons});
}

/* React renders whenever it is necessary so it it better to put conditions in render rather than return */

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons =(
      <div>
      <Persons
        persons ={this.state.persons}
        click ={this.deletePersonHandler}
        changed ={this.nameChangeHandler}  />
    {/*
       *  {this.state.persons.map((person,index) =>{
       *    return(
              <Person
              key={index}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this,index)}
              changed={(event)=>this.nameChangeHandler(event, person.id)} />
            )

          })}
          */}

      </div>);
    }

    return (
      <div className="App">
       <Render
        onClick={this.personToggleHandler}/>
        {/* <p> This is really awesome </p> */}
        {/*<button onClick={this.clickEventHandler.bind(this,"Arjun")}> Click Me </button> */}
        {/* <button onClick={this.personToggleHandler}>Show Persons </button>  */}
        {/* alternate way to bind using anynomous */}

        {persons}
      </div>
    );
  }
}

export default App;
