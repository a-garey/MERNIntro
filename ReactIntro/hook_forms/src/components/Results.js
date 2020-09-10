import React from 'react'

const Results = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    return (
        <div class="data">
            <h2>Your Form Data</h2>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
        </div>
    )
}

export default Results;
