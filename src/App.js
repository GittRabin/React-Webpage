import React, { Component } from 'react';
import './App.css';
import Person from './screen/Person';


class App extends Component {

//original state
  state = {
      persons: [
        {name:'Rabin', age:20},
        {name:'Ayush', age:40},
        {name:'akjl', age:20},
      ],
      showPersons:false
  }
// clickEvent method to get dynamic name
clickEventHandler =(newName)=>{
//setting up value
  this.setState({
    persons: [
      {name:newName, age:20},
      {name:'Ayush', age:40},
      {name:'akjl', age:20},

    ]
  });

}
//To toggle
 personToggleHandler =()=>{
   const valueCheck = this.state.showPersons;
   this.setState({ showPersons: !valueCheck });

 }
//change name
nameChangeHandler =(event)=>{
  this.setState({
    persons: [
      {name:"Rabin", age:20},
      {name:event.target.value, age:40},
      {name:'akjl', age:20},
    ]
  });

}

/* React renders whenever it is necessary so it it better to put conditions in render rather than return */

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons =(
      <div>
        <Person
        name= {this.state.persons[0].name}
        age={this.state.persons[0].age}> My Hobbies: This is my hobbies </Person>

        <Person
        name= {this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.clickEventHandler.bind(this,"Rabin")}
        changed ={this.nameChangeHandler} />

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My habbits: </Person>

      </div>);
    }

    return (
      <div className="App">
        <p> This is really awesome </p>
        <button onClick={this.clickEventHandler.bind(this,"Arjun")}> Click Me </button>
        <button onClick={this.personToggleHandler}>Alternate Button </button>  {/* alternate way to bind using anynomous */}
        {persons}
      </div>
    );
  }
}

export default App;
