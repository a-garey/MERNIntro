import React, { useState } from 'react';

const Input = props => {
    const { list, setList } = props;
    let task = {
        name: "",
        isComplete: false
    };

    const onClick = e => {
        setList([...list, task]);
        e.target.value = "";
    };

    const onChange = e => {
        task.name = e.target.value;
    };

    return (
        <div className="container">
            <input onChange={onChange}type="text" name="task"/>
            <button className="btn btn-warning" onClick={onClick}>Add Task</button> 
            
        </div>
    );
};

export default Input;
