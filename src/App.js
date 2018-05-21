import React, { Component } from 'react';
import './App.css';
import Person from './screen/Person';


class App extends Component {

  state = {
      persons: [
        {name:'Rabin', age:20},
        {name:'Ayush', age:40},
        {name:'akjl', age:20},
      ]
  }

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

nameChangeHandler =(event)=>{
  this.setState({
    persons: [
      {name:"Rabin", age:20},
      {name:event.target.value, age:40},
      {name:'akjl', age:20},

    ]
  });

}

  render() {
    return (
      <div className="App">
        <p> This is really awesome </p>
        <button onClick={this.clickEventHandler.bind(this,"Arjun")}> Click Me </button>
        <button onClick={()=>{this.clickEventHandler('Arjun!!')}}>Alternate Button </button>  {/* alternate way to bind using anynomous */}

          <Person
          name= {this.state.persons[0].name}
           age={this.state.persons[0].age}> My Hobbies: This is my hobbies </Person>

          <Person
          name= {this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.clickEventHandler.bind(this,"Rabin")}
          changed={this.nameChangeHandler}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My habbits: </Person>
      </div>
    );
  }
}

export default App;
