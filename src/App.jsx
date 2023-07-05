import './App.css'
import Access from './components/Access'
import Comentario from './components/Comentario'
import Footer from './components/Footer'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'

function App() {

  return (
    <main className='container-fluid' style={{background:'var(--dark-blue)',color:'var(--white)'}}>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Comentario/>
      <Access/>
      <Footer/>
      
    </main>
  )
}

export default App
