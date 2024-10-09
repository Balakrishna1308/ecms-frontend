// import React from 'react';
// import './App.css';
// import SignUpForm from './components/SignUpForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>E-Commerce User Registration</h1>
//         <SignUpForm />
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import './App.css';
// import SignUpForm from './components/SignUpForm';
// import LoginForm from './components/LoginForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>E-Commerce User Registration and Login</h1>
//         <SignUpForm />
//         <LoginForm />
//       </header>
//     </div>
//   );
// }

// export default App;






// import React from 'react';
// import './App.css';
// import SignUpForm from './components/SignUpForm';
// import LoginForm from './components/LoginForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>E-Commerce User Registration and Login</h1>
//         <SignUpForm />
//         <LoginForm />
//       </header>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

function App() {
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle the sign-up form

  const handleRegisterClick = () => {
    setShowSignUp(true); // Show sign-up form
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Application</h1>
        {showSignUp ? (
          <SignUpForm />
        ) : (
          <>
            <LoginForm />
            <button onClick={handleRegisterClick}>Register</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
