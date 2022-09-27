import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import NotFound from './Components/Not Found/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/rgb/:red/:green/:blue">
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
