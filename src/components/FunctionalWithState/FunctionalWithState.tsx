import React, { useState } from 'react';
import './FunctionalWithState.css';

const FunctionalWithState = () => {
  const [email, handleEmailChange] = useState('');
  const [password, handlePasswordChange] = useState('');

  return (
    <div className="container">
      <form>
        <h2>FunctionalWithState</h2>
        <div>
          <input
            id="email"
            value={email}
            onChange={e => handleEmailChange(e.currentTarget.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => handlePasswordChange(e.currentTarget.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FunctionalWithState;
