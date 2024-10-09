// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//     // State for user input
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: ''
//     });

//     // State for success or error message
//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginData({
//             ...loginData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Reset message state
//         setMessage('');

//         // Make a POST request to login the user
//         axios.post('http://localhost:8080/api/users/login', loginData)
//             .then(response => {
//                 console.log(response.data);
//                 // Display success message
//                 setMessage('Login successful!');
//             })
//             .catch(error => {
//                 console.error(error);
//                 // Display error message
//                 setMessage(error.response.data || 'Error logging in. Please try again.');
//             });
//     };

//     return (
//         <div className="login-form">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={loginData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={loginData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>

//             {/* Display the success or error message */}
//             {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
//         </div>
//     );
// };

// export default LoginForm;





// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//     // State for user input
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: ''
//     });

//     // State for success or error message
//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginData({
//             ...loginData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Reset message state
//         setMessage('');

//         // Make a POST request to login the user
//         axios.post('http://localhost:8080/api/users/login', loginData)
//             .then(response => {
//                 console.log(response.data);
//                 // Display success message
//                 setMessage('Login successful!');
//             })
//             .catch(error => {
//                 console.error(error);
//                 // Display error message
//                 setMessage(error.response.data || 'Error logging in. Please try again.');
//             });
//     };

//     return (
//         <div className="login-form">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={loginData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={loginData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>

//             {/* Display the success or error message */}
//             {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
//         </div>
//     );
// };

// export default LoginForm;






import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    // State for user input
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    // State for success or error message
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset message state
        setMessage('');

        // Make a POST request to login the user
        axios.post('http://localhost:8080/api/users/login', loginData)
            .then(response => {
                console.log(response.data);
                // Display success message
                setMessage('Login successful!');
            })
            .catch(error => {
                console.error(error);
                // Display error message
                setMessage(error.response.data || 'Error logging in. Please try again.');
            });
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            {/* Display the success or error message */}
            {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
        </div>
    );
};

export default LoginForm;
