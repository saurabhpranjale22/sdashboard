
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashbord from './Components/Dashbord';
import KuchBhi from './Components/KuchBhi';
import Price1 from './Components/Dashboard/Price1';
import Price2 from './Components/Dashboard/Price2';
import Price3 from './Components/Dashboard/Price3';
import Price4 from './Components/Dashboard/Price4';



function App () {

  return (
    <BrowserRouter>
    <>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/reg' element={<Registration />} />
  <Route path='/dashboard/' element={<Dashbord />} >
<Route path='price1' element={<Price1 />} />
<Route path='price2' element={<Price2 />} />
<Route path='price3' element={<Price3 />} />
<Route path='price4' element={<Price4 />} />
  </Route>
  <Route path='*' element={<KuchBhi />} />
</Routes>
   
   
   
    </>
    </BrowserRouter>
  )
}

export default App;