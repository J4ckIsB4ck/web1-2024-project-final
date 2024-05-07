import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import Quiz from './components/Quiz';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/quiz/:quiztype" element={<Quiz />}/>
    </Routes>
  );
}

export default App;
