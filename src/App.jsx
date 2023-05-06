import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import { UserContextProvider } from './UserContext';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Photo from './pages/Photo/Photo';
import Profile from './pages/Profile/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/Helper/NotFound';
import './App.css';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/reducers/user';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(autoLogin())
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='conta/*'
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
                />
              <Route path='foto/:id' element={<Photo />} />
              <Route path='profile/:user' element={<Profile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
