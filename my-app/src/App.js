import logo from './logo.svg';
import './App.css';

import {Navigation} from './Components/Navigation';
import {Department} from './Components/Department/Department';
import {Home} from './Components/Home';
import {Employee} from './Components/Employee/Employee';


import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
          
      <div className="container">
      {/* <h3 className="m-3 d-flex justify-content-center">
        Title here
      </h3> */}

      <Navigation/> 
      
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/>
      </Switch>

      </div>
    </BrowserRouter> 
  );
}

export default App;
