import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import { Route, Routes } from 'react-router-dom';
import Third from './components/Third';
import Fourth from './components/Fourth';


function App() {
  return (
    <div className="App">
      <Second/>
      <Routes>
      <Route path ='/' element = {<First/>}/>
      <Route path ='/s' element = {<Third/>}/>
      <Route path ='/t' element = {<Fourth/>}/>

      </Routes>
    </div> 
  );
}

export default App;
