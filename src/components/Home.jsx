import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="flex-col justify-center items-center  p-8  rounded-lg shadow-lg bg-white">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome</h2>

          <h3> Create an account or log in to get started.</h3>
        </div>
        <div className="flex space-x-4 justify-center mt-6">
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
