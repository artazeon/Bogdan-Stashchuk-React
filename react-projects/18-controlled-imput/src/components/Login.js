import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleFromSubmit(event) {
    event.preventDefault()
    const userData = {
      username,
      password,
    }
    console.log(userData)
    alert(JSON.stringify(userData))
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
