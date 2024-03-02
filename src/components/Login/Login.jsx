import './Login.css'

const Login = () => {
  return (
    <div className='loginBG'>
        <form action="" className='loginWrapper'>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button className='loginButton'>
            login
          </button>
        </form>
    </div>
  )
}

export default Login