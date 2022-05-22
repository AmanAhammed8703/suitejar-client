import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import TablePage from './Pages/TablePage/TablePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/result' element={<TablePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
