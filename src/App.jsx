import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import './App.css'
import MyNav from './components/nav/MyNav';
import XssAttack from './components/XssAttack';
import Csp from './components/Csp';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRouth from './utils/ProtectedRouth';


function App() {

  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>

        <Route element={<ProtectedRouth />}>
          <Route path='/xssattack' element={<XssAttack/>} />
          <Route path='/csp' element={<Csp/>} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
