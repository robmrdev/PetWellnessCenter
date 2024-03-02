import './NavBar.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
      <span>
        <div className='topBar'>
          <span>Call: (555) 867-5309 </span>
        </div>
      </span>
      <nav>
        <NavLink to="/"><img src="/logo.png" alt="" /></NavLink>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/ourteam">Meet the staff</NavLink></li>
            <li><NavLink to='/schedule'>Schedule</NavLink></li>
            {/* <li><NavLink to='/collections/kids'>Contact</NavLink></li> */}
          </ul>
          <button>
            <NavLink to='/login'>Login</NavLink>
          </button>
        </div>
      </nav>
    </header>
  )
}
