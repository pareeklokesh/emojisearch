import logo from './logo.svg';
import './App.css';
import Emojisearch from './component/Emojisearch';
import Header from './component/Header';
import Faq from './component/Faq';
import Quotegenerator from './component/Quotegenerator';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from './component/User';
import Todolist from './component/Todolist';
import Form from './component/Form';
import Cal from './component/Cal';


function App() {
  return (
    <Router>
      <Header />
    <Routes>
      <Route exact path="/" element={<Emojisearch />}></Route>
      <Route exact path='/faq' element={<Faq />}></Route>
      <Route exact path='/quotegenerator' element={<Quotegenerator />}></Route>
      <Route exact path='/user' element={<User/>}></Route>
      <Route exact path='/todolist' element={<Todolist />}></Route>
      <Route exact path='/form' element={<Form />}></Route>
      <Route exact path='/cal' element={<Cal />}></Route>
      
    </Routes>
    </Router>
  );
}

export default App;
