import React from "react";
import UserForm from "./userform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/userForm.css";
import DownloadContract from "./download-contract";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserForm />} />
        <Route path="/download-contract" element={<DownloadContract />} />
      </Routes>
    </Router>
  );
};

export default App;
