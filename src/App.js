import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/rgb/:red/:green/:blue">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
