

import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import Header from './elements/Header.jsx'



function App() {


  return (
    <div className=' font-Kanit tracking-wider'>
      <Header/>
      <Routes>
        <Route path='/' index element={ <Home />} />
      </Routes>
    </div>
  )
}

export default App