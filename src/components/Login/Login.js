import React from 'react';

const login = props => {
    return (
      <div>
          <h1>Login</h1>
          <form>
              <div>
                <input type="email" id="emailInput" required></input>
                <label for="emailInput">Email Address</label>
              </div>
              <div>
                <input type="password" id="passwordInput" required></input>
                <label for="emailInput">Password</label>
              </div>
              <button type="button">Go</button>
          </form>
      </div>  
    );
}

export default login;