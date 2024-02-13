
import './App.css';
import React from "react"
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/board/Home';
import SaveForm from './pages/board/SaveForm';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import Banner from './components/Banner';
import Detail from './pages/board/Detail';
import UpdateForm from './pages/board/updateForm';


function App() {
  return <div>
 <Router>
      <div>
      <Header />
        <Banner/>
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/SaveForm" element={<SaveForm />} /> 
          <Route path="/board/:board_id" element={<Detail/>} /> 
          <Route path="/updateForm/:board_id" element={<UpdateForm/>} /> 
          <Route path="/loginForm" element={<LoginForm />} /> 
          <Route path="/joinForm" element={<JoinForm />} />
        </Routes>
        </Container>
      </div>
    </Router>
  </div>
}

export default App;
