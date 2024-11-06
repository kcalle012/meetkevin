import './App.scss';
import { Routes, Route } from 'react-router-dom';
import './Components/Home/index';
import './Components/Contact/index';
import './Components/About';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
