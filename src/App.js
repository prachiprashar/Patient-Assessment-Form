import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitAssessmentForm from './SubmitAssessmentForm';
import UpdateAssessmentForm from './UpdateAssessmentForm';
import 'antd/dist/reset.css'; // Ant Design's global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SubmitAssessmentForm />} />
          <Route path="/update" element={<UpdateAssessmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;