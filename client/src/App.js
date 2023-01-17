import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

import { Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      
      <Route exact path='/' component = {Landing} />
      <Route exact path='/about' render={()=> {return <About />}}/> 
      <Route exact path='/videogames' component={Home}></Route> 
      <Route exact path='/videogames/:id' component={Detail}></Route>
      <Route exact path='/create' component={Form}></Route>
      
    </div>
  );
}

export default App;
