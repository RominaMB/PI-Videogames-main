import './App.css';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Page404 from './components/Page404/Page404';

import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

//switch examina examina todas sus rutas secundarias 
//y muestra la primera cuya ruta coincide con la URL actual.

function App() {
  return (
    <div className='App'>
      <Switch> 
      <Route exact path='/' component = {Landing} />
      <Route exact path='/about' render={()=> {return <About />}}/> 
      <Route exact path='/videogames' component={Home}></Route> 
      <Route exact path='/videogames/:id' component={Detail}></Route>
      <Route exact path='/create' component={Form}></Route>
      <Route path={'*'} component={Page404}/>
      </Switch> 
    </div>
  );
}

export default App;
