import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Checklist from './Checklist';
import List from './Budget';
import Missing from './Missing';
import Homepage from './Homepage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div className='App'>
      
      <Router>
        <Routes>
          <Route path="/checklist" element={<Checklist />} />

          <Route path="/budget" element={<List />} />
          <Route path="/missing" element={<Missing />} />
        </Routes>
      </Router>
    </div>



  );
}

export default App;