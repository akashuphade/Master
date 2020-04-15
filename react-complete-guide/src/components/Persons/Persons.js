import React, { Component } from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends Component {
    
    render() {
        return (
            this.props.persons.map((person, personIndex) => {
                return <Person 
                click = {()=>this.props.clicked(personIndex)}
                name = {person.name} 
                age = {person.age}
                key = {person.id}
                changed= {(event) => this.props.changed(event, person.id)} />
            })
        );
    }   
}

Person.propTypes = {
    click:PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Persons;