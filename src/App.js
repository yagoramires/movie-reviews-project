// Routes
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={Home} />
      </Routes>
    </div>
  );
}

export default App;
