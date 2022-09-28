import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Displaypage from "./components/Displaypage";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <Navbar></Navbar>{" "}
      <Routes>
        <Route path="/" exect element={<Displaypage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        {/* <Route path="/resume/:id" element={<ChannelDetail />}></Route>
        <Route path='/search/:searchTerm' element={<SearchFeed />}></Route> */}
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
