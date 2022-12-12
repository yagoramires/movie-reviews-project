// Routes
import { Routes, Route, Navigate } from 'react-router-dom';

// Hooks
import { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import Profile from './pages/Profile';
import NewReview from './pages/NewReview';

function App() {
  const [user, setUser] = useState(undefined);

  const { auth, onAuthStateChanged } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth, onAuthStateChanged]);

  if (user === undefined) return <p>Loading...</p>;

  return (
    <div className='App'>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route path='/details/:id' element={<Details />} />
        <Route
          path='/profile'
          element={!user ? <Navigate to='/' /> : <Profile />}
        />
        <Route
          path='/add-review'
          element={!user ? <Navigate to='/' /> : <NewReview />}
        />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
