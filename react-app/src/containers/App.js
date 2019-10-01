import React, { useState } from 'react';
import '../styles/style.css';
import TextField from '../components/form-wrapper/TextFields.js';
import Button from '../components/form-wrapper/Button.js';
import '../styles/FormFileds.css';

function App() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <TextField
        id="user-name"
        type="text"
        placeholder="Enter email id"
        onChange={(value) => setUserName(value)}
        value={userName}
      />
      <TextField
        id="password"
        type="password"
        placeholder="Enter password"
        onChange={(value) => setPassword(value)}
        value={password}
      />
      <Button
        id="login"
        name="login"
        text="Login"
        color="#3f8041"
      />
      <Button
        id="register"
        name="register"
        text="Register"
        color="#3b81c7"
      />
    </div>
  );
}

export default App;