import {useState, useEffect} from "react";

export const App = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({})
  const STUDENTS_API_URL = 'http://localhost:8000/api/students';

  useEffect( () => {
      fetch(STUDENTS_API_URL).then(res => res.json()).then(data => setStudent(data[0]));
  }, []);
  console.log(students);
  return (
      <div>
        <h1>asjfl;sdf</h1>
        <h2>{student.email}</h2>
      </div>
  )
}


