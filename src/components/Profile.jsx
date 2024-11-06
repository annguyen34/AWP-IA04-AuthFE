import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getUserProfile } from '../api/user';

const Profile = () => {
  const { authState, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile(authState.token);
      } catch (err) {
        logout();
      }
    };
    fetchProfile();
  }, [authState.token, logout]);

  if (!authState.user) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-400">
        <div className="flex-col justify-center items-center  p-16  rounded-lg shadow-lg bg-white">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome</h2>

            <h3> Username: {authState.user.username}</h3>
            <h3> Email: {authState.user.email}</h3>
          </div>
          <div className="flex space-x-4 justify-center mt-6">
            <button
              onClick={() => logout()}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
