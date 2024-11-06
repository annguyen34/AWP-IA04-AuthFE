import { useContext, useEffect, useState } from 'react';
import { loginUser } from '../api/user';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
    // If the user is already logged in, redirect to the profile page
    if (localStorage.getItem('token')) {
      Navigate('/profile');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(username, password);
      if (!res.user) {
        alert('Invalid credentials');
        return;
      }
      login(res.access_token, res.user);
      Navigate('/profile');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className=" p-8 rounded-lg shadow-xl justify-center bg-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-center ">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 mb-4 items-center ">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700  "
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mb-6 items-center">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
