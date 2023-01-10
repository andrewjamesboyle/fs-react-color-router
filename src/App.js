import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import NotFound from './Components/Not Found/NotFound';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/rgb/:red/:green/:blue" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
