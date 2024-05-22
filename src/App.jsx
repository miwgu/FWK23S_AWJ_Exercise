import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import './App.css'
import MyNav from './components/nav/MyNav';
import XssAttack from './components/XssAttack';
import Csp from './components/Csp';

function App() {

  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<XssAttack/>} />
        <Route path='/xssattack' element={<XssAttack/>} />
        <Route path='/csp' element={<Csp/>} />
        
      </Routes>
    </>
  )
}

export default App
