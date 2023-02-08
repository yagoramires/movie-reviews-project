import React, { useEffect, useState } from 'react';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { MdOutlineClose, MdCheck } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import Loading from '../components/Loading';

const Profile = ({ user }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  console.log(image);

  const [error, setError] = useState('');

  const {
    updateImage,
    updateUsername,
    updateUserEmail,
    updateUserPassword,
    loadImg,
    successImg,
    errorImg,
    loadName,
    successName,
    errorName,
    loadEmail,
    successEmail,
    errorEmail,
    loadPassword,
    successPassword,
    errorPassword,
    setSuccessImg,
    setErrorImg,
    setSuccessName,
    setErrorName,
    setSuccessEmail,
    setErrorEmail,
    setSuccessPassword,
    setErrorPassword,
  } = useUpdateProfile();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setError(null);

    if (
      image === '' &&
      username === '' &&
      email === '' &&
      password === '' &&
      confirmPassword === ''
    ) {
      setError('Empty fields are empty');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords must be equal');
      return;
    }

    if (image !== '') {
      updateImage(image);
    }

    if (username !== '') {
      updateUsername(username);
    }

    if (email !== '') {
      updateUserEmail(email);
    }

    if (
      password !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      updateUserPassword(password);
    }

    setImage('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    return;
  };

  useEffect(() => {
    if (successImg) {
      setTimeout(() => setSuccessImg(null), 5000);
    }
    if (errorImg) {
      setTimeout(() => setErrorImg(null), 5000);
    }
    if (successName) {
      setTimeout(() => setSuccessName(null), 5000);
    }
    if (errorName) {
      setTimeout(() => setErrorName(null), 5000);
    }
    if (successEmail) {
      setTimeout(() => setSuccessEmail(null), 5000);
    }
    if (errorEmail) {
      setTimeout(() => setErrorEmail(null), 5000);
    }
    if (successPassword) {
      setTimeout(() => setSuccessPassword(null), 5000);
    }
    if (errorPassword) {
      setTimeout(() => setErrorPassword(null), 5000);
    }
  }, [
    successImg,
    errorImg,
    successName,
    errorName,
    successEmail,
    errorEmail,
    successPassword,
    errorPassword,
    setSuccessImg,
    setErrorImg,
    setSuccessName,
    setErrorName,
    setSuccessEmail,
    setErrorEmail,
    setSuccessPassword,
    setErrorPassword,
  ]);

  return (
    <section className='flex flex-col items-center justify-center sectionHeight bg-amber-200'>
      <div className='flex flex-col w-[90%] mx-auto justify-center items-center my-16 gap-8 '>
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt='preview'
            className='rounded-full w-[250px] h-[250px] object-cover border-4 border-zinc-800 shadow-md'
          />
        )}

        {user.photoURL && !image && (
          <img
            src={user.photoURL}
            alt='user'
            className='rounded-full w-[250px] h-[250px] object-cover border-4 border-zinc-800 shadow-md'
          />
        )}

        {!image && !user.photoURL && (
          <div className='flex justify-center items-center rounded-full w-[250px] h-[250px] object-cover border-4 border-zinc-800 shadow-md'>
            <FaUserAlt size={100} />
          </div>
        )}

        <h1 className='pb-2 text-2xl font-bold border-b-4 sm:text-3xl md:text-3xl lg:text-4xl text-zinc-800 border-zinc-800'>
          {user.displayName}
        </h1>
      </div>

      <form
        className='flex flex-col max-w-[600px] w-[90%] mx-auto gap-3 mb-8
      '
        onSubmit={handleUpdateProfile}
      >
        <div className='flex items-center w-full gap-3'>
          <input
            type='file'
            className='block w-full p-4 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            onChange={(e) => setImage(e.target.files[0])}
          />
          {loadImg && <Loading size={'25px'} />}
          {successImg && <MdCheck size={25} className='text-green-500' />}
          {errorImg && <MdOutlineClose size={25} className='text-red-500' />}
        </div>
        <div className='flex items-center w-full gap-3'>
          <input
            type='text'
            value={username || ''}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder='Username'
            className='w-full p-4 rounded-md shadow-md outline-none bg-slate-50'
          />
          {loadName && <Loading size={'25px'} />}
          {successName && <MdCheck size={25} className='text-green-500' />}
          {errorName && <MdOutlineClose size={25} className='text-red-500' />}
        </div>
        <div className='flex items-center w-full gap-3'>
          <input
            type='email'
            value={email || ''}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='E-mail'
            className='w-full p-4 rounded-md shadow-md outline-none bg-slate-50'
          />
          {loadEmail && <Loading size={'25px'} />}
          {successEmail && <MdCheck size={25} className='text-green-500' />}
          {errorEmail && <MdOutlineClose size={25} className='text-red-500' />}
        </div>
        <div className='flex items-center w-full gap-3'>
          <div className='flex flex-col w-full gap-3'>
            <input
              type='password'
              value={password || ''}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='Password'
              className='p-4 rounded-md shadow-md outline-none bg-slate-50'
              autoComplete='true'
            />
            <input
              type='password'
              value={confirmPassword || ''}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder='Confirm Password'
              className='p-4 rounded-md shadow-md outline-none bg-slate-50'
              autoComplete='true'
            />
          </div>

          {loadPassword && <Loading size={'25px'} />}
          {successPassword && <MdCheck size={25} className='text-green-500' />}
          {errorPassword && (
            <MdOutlineClose size={25} className='text-red-500' />
          )}
        </div>

        {loadImg || loadEmail || loadName || loadPassword ? (
          <div className='flex items-center justify-center w-full my-4'>
            <Loading size={'45px'} />
          </div>
        ) : (
          <input
            type='submit'
            value='Update Profile'
            className='w-full p-4 font-bold text-white transition-all duration-300 rounded-md shadow-sm cursor-pointer bg-zinc-800 hover:bg-zinc-700 hover:tracking-wider'
          />
        )}

        {error && <p className='error'>{error}</p>}
        {errorImg && <p className='error'>{errorImg}</p>}
        {errorName && <p className='error'>{errorName}</p>}
        {errorEmail && <p className='error'>{errorEmail}</p>}
        {errorPassword && <p className='error'>{errorPassword}</p>}
        {successImg && <p className='success'>{successImg}</p>}
        {successName && <p className='success'>{successName}</p>}
        {successEmail && <p className='success'>{successEmail}</p>}
        {successPassword && <p className='success'>{successPassword}</p>}
      </form>
    </section>
  );
};

export default Profile;
