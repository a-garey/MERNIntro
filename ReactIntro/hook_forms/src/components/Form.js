import React, { useState } from 'react'

const Form = props => {

    const {input, setInput} = props;
    const [inputError, setInputError] = useState("");

    const onChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        if(e.target.value.firstName < 1) {
            setInputError("First name is required!");
        } else if(e.target.value.firstName < 3) {
            setInputError("First name must be 3 characters or longer!");
        }
        if(e.target.value.lastName < 1) {
            setInputError("Last name is required!");
        } else if(e.target.value.lastName < 3) {
            setInputError("Last name must be 3 characters or longer!");
        }
        if(e.target.value.email < 5) {
            setInputError("Email address must be at least 5 charachters");
        }
        if(e.target.value.password < 8 || e.target.value.confirmPassword != e.target.value.password) {
            setInputError("Invalid credentials");
        }
    };

    return (
        <form>
            <div class="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName"></input>
            </div>

            <div class="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"></input>
            </div>

            <div class="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email"></input>
            </div>

            <div class="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="password" name="password"></input>
            </div>

            <div class="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="password" name="confirmPassword"></input>
            </div>
        </form>
    );
};

export default Form
