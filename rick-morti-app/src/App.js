
import './App.css';
import Characters from  './components/Characters.jsx'
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import CharacterDetail from './components/CharacterDetail';

// crear carpeta store: actions y reducer
// para implementar el parametro requiero un store 
// exact renderiza

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Nav} />
      <Switch>
        <Route path="/characters" render={(props) =>{
          return <Characters
            algo = "algo"
            match = {props.match}
            location = {props.location}
            history={props.history}
          />
        } }/>
      </Switch>
      <Route path="/character/:id" component={CharacterDetail}/>
      <Characters/>
    </div>
  );
}

export default App;
