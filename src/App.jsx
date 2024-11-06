import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { useContext } from 'react';
import Profile from './components/Profile';
import Home from './components/Home';

const PrivateRoute = ({ element, ...rest }) => {
  const { authState } = useContext(AuthContext);
  return authState.token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
