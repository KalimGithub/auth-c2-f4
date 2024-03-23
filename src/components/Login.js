import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <h1>Authentication</h1>
      <form>
        <input type="text" id="username" placeholder="Enter Username" />
        <input type="password" id="password" placeholder="Enter Password" />
        <button id="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login