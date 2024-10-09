import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    // State for user input
    const [user, setUser] = useState({
        username: '',
        password: '',
        role: 'USER' // Default role
    });

    // State for success or error message
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset message state
        setMessage('');

        // Make a POST request to register the user
        axios.post('http://localhost:8080/api/users/register', user)
            .then(response => {
                console.log(response.data);
                // Display success message
                setMessage('User registered successfully!');
            })
            .catch(error => {
                console.error(error);
                // Display error message
                setMessage('Error registering user. Please try again.');
            });
    };

    return (
        <div className="signup-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>

            {/* Display the success or error message */}
            {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
        </div>
    );
};

export default SignUpForm;
