import React from 'react'

const Task = props => {
    const { task, index, list, setList } = props;

    const onClick = () => {
        setList(() => 
            list.filter(task => list.indexOf(task) !== index));
    };

    return (
        <div className="container" bg-secondary>
            <h3>{task.name}</h3>
            <div classname="container2">
                <label htmlFor="checkbox">Completed</label>
                <input type="checkbox" name="" />
                <button onClick={onClick} className="btn btn-warning" onClick={onClick}>Delete</button>
            </div>
            
        </div>
    );
};

export default Task;