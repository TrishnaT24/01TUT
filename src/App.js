import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Checklist from './checklist';
import List from './budget'; 
import {Route ,Switch ,useHistory} from 'react-router-dom';
import Missing from './Missing';
import Homepage from './Homepage';


function App() {
  return(
    <div className='App'>
      <Homepage />
      <List />
      <Missing />
      <List />


    </div>
    

  );
}

export default App;