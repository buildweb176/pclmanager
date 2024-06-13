import { useState } from "react";
import "./App.css";
import LoginAuth from "./auth/LoginAuth";
import {Routes,Route} from 'react-router-dom'
import StudentLogin from "./auth/StudentLogin";
import TeacherLogin from "./auth/TeacherLogin";

function App() {
  return(
    <> 
    <Routes>
      <Route path="/" element={<LoginAuth/>}></Route>
      
  
    </Routes>
  

    </>
  );
}

export default App;
