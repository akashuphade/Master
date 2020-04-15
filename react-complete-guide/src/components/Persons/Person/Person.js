import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    render() {
        return (
            <Aux>
                <p onClick={ this.props.click }>My name is { this.props.name } and I am { this.props.age} years old.</p>
                {!!(this.props.children)? <p> {this.props.children} </p>: '' }
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
};

export default withClass(Person, classes.Person);