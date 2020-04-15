import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

  /*
  * This is property, which is available in class based Component only.
  * It helps us to render the content of the Component dynamically based on state change.
  */
  state = {
    persons: [
      {id:'1', name: 'Akash', age: 27},
      {id:'2', name: 'Sangita', age: 22},    
      {id:'3', name: 'Gitanjalee', age: 31}
    ],
    showPersons : false  
  };
    
  /*
  * This will delete the Person on click of it
  */
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  /*
  * This will update the Person name when name in the Input is updated
  */
  nameChangeHandler = (event, id) => {

    //Get Person Index having updated the input
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    //Get Person info from Index
    const person = {
      ...this.state.persons[personIndex]
    };

    //Change the person name as per input
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }


  /*
  * This will toggle the Persons div based 
  * on the toggle buttons
  */
  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({
      showPersons : !doesShowPersons
    });
  }

  static getDerivedStateFromProps() {
    console.log('[App.js] getDerivedStateFromProps hook');
    return null;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount hook');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate hook');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate hook');
  }

  render() {

    console.log('[App.js] rendering...');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}
          />
         </div> 
      );
    }

    return (
      <Aux>
        <Cockpit 
          title = {this.props.appTitle}
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </Aux>    
    );
  }
}

export default withClass(App, classes.App);
