import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Trainners from './pages/trainners/Trainners'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Navbar from './components/Navbar'
import Footers from './components/Footers'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='trainers' element={<Trainners/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='plans' element={<Plans/>}/>

    </Routes>
    <Footers/>
      
     
    
    </BrowserRouter>
  )
}

export default App