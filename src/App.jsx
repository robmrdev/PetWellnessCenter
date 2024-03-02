import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import { NavBar } from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import UserPage from './components/UserPage/UserPage'
import PetPage from './components/PetPage/PetPage'
import PageNotFound from './components/Errors/PageNotFound/PageNotFound'
import Schedule from './components/Schedule/Schedule'
import OurTeam from './components/OurTeam/OurTeam'

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/user/:petname?' Component={UserPage} />
            <Route path='/user/:petname?' Component={UserPage} />
            <Route path='/schedule' Component={Schedule} />
            <Route path='/ourteam' Component={OurTeam} />
            <Route path='/Register' Component={OurTeam} />
            <Route path='/*' Component={PageNotFound} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
