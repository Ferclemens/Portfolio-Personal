import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Landing from './LandingPage/Landing';
import About from './content/About';
import Form from './contact/Form';
import Work from './content/Work';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Contact" element={<Form/>}/>
          <Route path="*" element={<div>error 404</div>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
