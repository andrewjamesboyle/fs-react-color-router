import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import NotFound from './Components/Not Found/NotFound';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Welcome />
        </Route>
        <Route exact path="/rgb/:red/:green/:blue">
          <Header />
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
