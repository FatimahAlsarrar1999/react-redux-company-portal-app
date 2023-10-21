import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Companise from './compnents/companies';
import Home from './compnents/Home';
import Error from './compnents/Error';
import Navbar from './compnents/Navbar';
import SingleCompany from './compnents/SingleCompany';

const App =()=> {
  return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/companies' element={<Companise/>}/>
   <Route path='/companies/:id' element={<SingleCompany/>}/> 
   <Route path='*' element={<Error/>}/>
   </Routes>
  </BrowserRouter>
  );
};

export default App;