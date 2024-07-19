// import logo from './logo.svg';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
 import Login from './Login';
import Signup from './Signup';
import Travel from './Travel';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <Signup/>
    <Login/> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/travel' element={<Travel/>}/>
      </Routes>
    </BrowserRouter>

        
    </div>
  );
}

export default App;
