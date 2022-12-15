import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const { registerUser, error: firebaseError, loading } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setError('Empty fields');
      return;
    } else if (confirmPassword !== password) {
      setError('Passwords must be equal');
      return;
    }

    registerUser(email, password, username);
  };

  useEffect(() => {
    if (firebaseError) {
      setError(firebaseError);
    }
  }, [firebaseError]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  return (
    <section className='flex flex-col items-center justify-center sectionHeight'>
      <div className='flex flex-col items-center justify-center px-16 py-8 bg-gray-100 rounded-md shadow-md max-w-[600px] w-[90%]'>
        <h1 className='py-2 text-4xl font-bold tracking-wider text-yellow-400 transition-all duration-300 border-b-4 border-black hover:tracking-widest hover:text-yellow-300'>
          Register
        </h1>
        <p className='mt-2 text-sm italic text-gray-500'>
          Register and enjoy all functions
        </p>
        <form
          className='flex flex-col items-center justify-center w-full gap-2 mt-8'
          onSubmit={handleRegister}
        >
          <input
            type='text'
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={'Username'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
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
          <input
            type='password'
            value={confirmPassword || ''}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={'Confirm Password'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />

          {!loading && (
            <input
              type='submit'
              value='Sign in'
              className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
            />
          )}

          {loading && (
            <div className='flex items-center justify-center w-full'>
              <Loading size={'30px'} />
            </div>
          )}

          {error && <p className='error'>{error}</p>}
        </form>
        <div className='flex flex-col w-full gap-2 mt-4'>
          <p className='italic text-gray-500 '>
            Already registered?{' '}
            <Link
              to='/login'
              className='pb-1 font-bold text-yellow-400 transition-all duration-150 hover:tracking-wider hover:text-yellow-300'
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
