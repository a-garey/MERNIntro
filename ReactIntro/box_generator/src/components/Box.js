import React, { useState} from 'react';

const Box = props => {
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox( box );
    };

    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <textarea>
                    rows="50"
                    cols="50"
                    onChange = { (e) => setBox(e.target.value)}
                    value = { box }
                </textarea>
                <input type="submit" value="Make Box"></input>
            </form>   
        </div>
    );
};

export default Box
