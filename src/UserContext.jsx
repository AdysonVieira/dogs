import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

export const UserContext = React.createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [logged, setLogged] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Token inválido');
          };
          setLogged(true)
          await getUser(token);
          navigate('/conta');
        } catch(err) {
            setError(true);
            setLogged(false)
            logout();
        } finally {
            setLoading(false);
        };
      };
    };
    autoLogin();
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const userData = await response.json();
    setUser(userData);
  }
  
  const login = React.useCallback( async (username, password) => {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({username, password})
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Erro: Usuário ou Senha inválido`)
      }
      const userToken = await response.json();
      window.localStorage.setItem('token', userToken.token )
      await getUser(userToken.token)
      setLogged(true)
      navigate('/conta')
    } catch(err) {
      setError(err.message)
      setLogged(false)
    } finally {
      setLoading(false)
    }
  }, []);

  const logout = React.useCallback(async () => {
    setUser('');
    setError(null);
    setLoading(false);
    setLogged(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [])


  return (
    <UserContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}