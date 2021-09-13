import './App.css';
import Menu from './Menu';
import List from './List';
import Save from './Save';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


const App=()=>{
  return(
    <div>
      <BrowserRouter>
        <div>
          <Menu/>
          <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/save" component={Save}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
