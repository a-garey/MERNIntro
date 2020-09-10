import React, { Component } from 'react';

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        const { name, age, hair } = props;

        this.state = {
            name: name,
            age: age,
            hair: hair
        }
    }

    render(){
        
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <h5>Age: {this.state.age}</h5>
                <h5>Hair Color: {this.state.hair}</h5>
                <button onClick= { () => this.setState( { age: this.state.age + 1})}>Birthday Button for {this.state.name} </button>
            </div>
        )
    }
}

