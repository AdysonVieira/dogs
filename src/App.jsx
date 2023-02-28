import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Conta from './pages/Conta';
import { UserContextProvider } from './UserContext';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route path='conta' element={<Conta />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
