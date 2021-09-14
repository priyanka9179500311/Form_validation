import './App.css';
import Menu from './Menu';
import List from './List';
import Save from './Save';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react';


class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Menu/>
            <Switch>
              <Route  exact path="/"  component={List}/>
              <Route path="/save" component={Save}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );    
  }

}



export default App;
