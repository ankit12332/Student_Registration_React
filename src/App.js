import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentProfile from './create_student/createStudent';
import NavbarMenu from './navbar/navbar';
import Home from './home/home';
import ShowStudent from './show_student/showStudent';
import ShowStudentAGgrid from './show_student/show_student_AGgrid/showStudentAGgrid';

function App() {
  return (
    <>
     <Router>
      <div className="App">
        <NavbarMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create-student" element={<StudentProfile />} />
          <Route path="/show-student" element={<ShowStudent />} />
          <Route path="/show-student-aggrid" element={<ShowStudentAGgrid />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
