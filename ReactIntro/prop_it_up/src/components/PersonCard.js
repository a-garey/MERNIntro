import React, { useState } from 'react';

const PersonCard = props => {
    // const { name, hair } = props;
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [hair, setHair] = useState(props.hair);

    return (
        <div>
            <h3>Name: {name}</h3>
            <h5>Age: {age}</h5>
            <h5>Hair Color: {hair}</h5>
            <button onClick= { () => setAge(age+1)}>Birthday Button for {name} </button>
        </div>
    )
}

export default PersonCard





// export default class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         const { name, age, hair } = props;

//         this.state = {
//             name: name,
//             age: age,
//             hair: hair
//         }
//     }

//     render(){
        
//         return(
//             <div>
//                 <h3>Name: {this.state.name}</h3>
//                 <h5>Age: {this.state.age}</h5>
//                 <h5>Hair Color: {this.state.hair}</h5>
//                 <button onClick= { () => this.setState( { age: this.state.age + 1})}>Birthday Button for {this.state.name} </button>
//             </div>
//         )
//     }
// }

