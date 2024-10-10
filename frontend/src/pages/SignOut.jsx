import React, { useState } from 'react';
import { Button, Toast } from 'flowbite-react';
import { MdLoop } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import img6 from '../assets/bg.png';

const SignOut = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/user/sign-out', {
        method: 'POST',
        credentials: 'include', // Ensures cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error('Signout failed');
      }

      // Clear user data from local storage
      localStorage.removeItem('user');
      
      // Redirect to home page or sign-in page
      navigate('/sign-in');
    } catch (error) {
      console.error('Signout failed', error);
      setError('Failed to sign out. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex mt-32 justify-center">
      <div className=" w-3/12 my-3 relative ">
        <Toast>
          <div className="flex items-start">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
              <MdLoop className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                Oh no! You're leaving...
              </span>
              <div className="mb-2 text-sm font-normal">Are you sure?</div>
              <div className="flex gap-2">
                <div className="w-auto bg-gray-700 text-white">
                  <Button size="xs" onClick={() => navigate('/')}>Naah, Just Kidding</Button>
                </div>
                <div className="w-auto">
                  <Button color="light" size="xs" onClick={handleSignOut}>
                    Yes, Sign Me Out
                  </Button>
                </div>
              </div>
            </div>
            <Toast.Toggle />
          </div>
        </Toast>

        {error && (
          <div className="mt-4 text-red-500 text-center">{error}</div>
        )}

        <img
          src={img6}
          alt="Background Image"
          className="fixed inset-0 w-screen"
          style={{ zIndex: -2, opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default SignOut;
