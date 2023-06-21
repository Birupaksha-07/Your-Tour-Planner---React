
import './App.css';
import Home from './Components/Home';
import Packages from './Pages/Packages';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Logout from './Pages/Logout';

import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/package' element={<Packages/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
