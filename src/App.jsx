import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import './App.css'
import MyNav from './components/nav/MyNav';
import XssAttack from './components/XssAttack';

function App() {

  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<XssAttack/>} />
        
      </Routes>
    </>
  )
}

export default App
