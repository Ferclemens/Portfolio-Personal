import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Landing from './LandingPage/Landing';
import Form from './contact/Form';
import Work from './content/Work';
import ProblemasTecnicos from './problems/ProblemasTecnicos';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Stats" element={<ProblemasTecnicos/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Contact" element={<Form/>}/>
          <Route path="*" element={<ProblemasTecnicos/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
