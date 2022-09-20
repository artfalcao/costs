import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
//PAGES
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

//LAYOUTS
import Navbar from './components/layouts/Navbar'
import Container from './components/layouts/Container'

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">

        <Routes>
          <Route exact path='/' element={<Home />} />
            
          <Route path='/empresa' element={<Company />} />
            
          <Route path='/company' element={<Company />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/newproject' element={<NewProject />} />
        </Routes>
        </Container>

    </Router>
  )
}

export default App
