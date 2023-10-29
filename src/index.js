import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Fac from './Layout/Fac';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Layout/Home';
import Aboute from './Layout/Aboute';
//import Calculator from './Calculator';
import UseEffectDemo from './UseEffectDemo';
import  Student from './Layout/Students';
import StudentDetail  from  './Layout/StudentDetail';
import Form from './Form';
import Textform from './TextForm';
import StudentAdd from './Layout/StudentAdd';
import Display from './Display';
// import StudentEdit from './Layout/StudentEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="container">
      {/* <Textform heading="Enter the text to analyze" /> */}
      {/* <Header />
      <Content />
      <Display /> */}
      {/* <Textform /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path='/Aboute' element={< Aboute />} />
            <Route path='Fac' element={<Fac />} />
            <Route path="/Students" element={<Student />} />
            <Route path="/StudentAdd" element={<StudentAdd />}/>
            <Route path="/StudentDetail/:id" element={<StudentDetail />} />
            <Route path="/StudentEdit/:id" element={<StudentAdd/>} />
      {/* ========<Route path="/StudentEdit/:id" element={<StudentEdit />} /> ================ */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <UseEffectDemo /> */}
        {/* <BrowserRouter>
          <Routes>
            <Route path="/Student" element={<Student />} />
            <Route path="/StudentDetail/:id" element={<StudentDetail />} />
          </Routes>
        </BrowserRouter> */}
      {/* <Form /> */}
    </div>
  </>
);