import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/index';
import './Components/Contact/index';
import './Components/About/index';
import  Layout from './Components/Layout/index'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />}/>
           {/* <Route path="/contact" element={<Contact />}/> */}
           {/* <Route path="/about" element={<About />}/> */}
           {/* <Route /> */}
         </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
