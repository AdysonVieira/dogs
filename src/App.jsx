import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import { UserContextProvider } from './UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import './App.css';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
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
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
