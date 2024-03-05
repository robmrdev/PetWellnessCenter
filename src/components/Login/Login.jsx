import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='loginBG'>
        <form action="" className='loginWrapper'>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button className='loginButton'>
            <Link to='/user/'>login</Link>
          </button>
        </form>
    </div>
  )
}

export default Login