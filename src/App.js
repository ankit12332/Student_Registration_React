import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentProfile from './create_student/createStudent';
import NavbarMenu from './navbar/navbar';
import Home from './home/home';

function App() {
  return (
    <>
     <Router>
      <div className="App">
        <NavbarMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create-student" element={<StudentProfile />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
