import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Not_found'
import Storia from './pages/Storia'
import Scuola from './pages/Scuola'
import Eventi from './pages/Eventi'
import Consiglio from './pages/Consigliodirettivo'
import DiventaBandista from './pages/Diventaunbandista'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chi-siamo' element={<About/>} />
          <Route path='/storia' element={<Storia/>} />
          <Route path='/scuola' element={<Scuola/>} />
          <Route path='/eventi' element={<Eventi/>} />
          <Route path='/consiglio-direttivo' element={<Consiglio/>} />
          <Route path='/diventa-un-bandista' element={<DiventaBandista/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <Footer/>
      </div>

    </>
  )
}

export default App
