import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
//PAGES
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

//LAYOUTS
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'


function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/projects' element={<Projects />} />
            
          <Route path='/company' element={<Company />} />

          <Route path='/newproject' element={<NewProject />} />

          <Route path='/contact' element={<Contact />} />
        </Routes>
        </Container>

        <Footer />

    </Router>
  )
}

export default App
