import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Form from './components/Form';
import Detail from './components/Detail';

import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route>
        <Nav />
      </Route>

      <Route exact path='/' component = {Landing} />

      <Route path='/about' render={()=> {return <About />}}/>
      <Route path='/form' render={()=> {return <Form />}}/>
      <Route path='/videogames/:id' component={Detail}></Route>

    </div>
  );
}

export default App;
