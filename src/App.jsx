import './App.css'
import { Footer } from './global/Footer'
import { Navbar } from './global/Navbar'
import { Home } from './pages/Home/Home'
import './responsive.css'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
