import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const {
    signInUser,
    message: firebaseMessage,
    error: firebaseError,
    loading,
  } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Empty fields');
      return;
    }

    signInUser(email, password);
  };

  useEffect(() => {
    if (firebaseError) {
      setError(firebaseError);
    }
    if (firebaseMessage) {
      setMessage(firebaseMessage);
    }
  }, [firebaseMessage, firebaseError]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }, [message, error]);

  return (
    <section className='flex flex-col items-center justify-center sectionHeight'>
      <div className='flex flex-col items-center justify-center px-16 py-8 bg-gray-100 rounded-md shadow-md max-w-[600px] w-[80%]'>
        <h1 className='py-2 text-4xl font-bold tracking-wider text-yellow-400 transition-all duration-300 border-b-4 border-black hover:tracking-widest hover:text-yellow-300'>
          Login
        </h1>
        <p className='mt-2 text-sm italic text-gray-500'>
          Log in to comment and add movie reviews
        </p>
        <form
          className='flex flex-col items-center justify-center w-full gap-2 mt-8'
          onSubmit={handleLogin}
        >
          <input
            type='email'
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'E-mail'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='password'
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={'Password'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          {!loading && (
            <input
              type='submit'
              value='Log in'
              className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
            />
          )}

          {loading && <p>loading...</p>}

          {error && <p className='error'>{error}</p>}
          {message && <p className='message'>{message}</p>}
        </form>
        <div className='flex flex-col w-full gap-2 mt-4'>
          <p className='italic text-gray-500 '>
            Forgot your password?{' '}
            <span
              className='pb-1 font-bold text-yellow-400 transition-all duration-150 cursor-pointer hover:tracking-wider hover:text-yellow-300'
              onClick={() => {}}
            >
              Reset
            </span>
          </p>
          <p className='italic text-gray-500 '>
            New here?{' '}
            <Link
              to='/register'
              className='pb-1 font-bold text-yellow-400 transition-all duration-150 hover:tracking-wider hover:text-yellow-300'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
