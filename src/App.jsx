import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import { UserContextProvider } from './UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import './App.css';
import Photo from './pages/Photo/Photo';
import Profile from './pages/Profile/Profile';
import NotFound from './components/Helper/NotFound';

function App() {
  
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
