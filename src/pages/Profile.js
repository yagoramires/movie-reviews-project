import React, { useEffect, useState } from 'react';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { useUploadImage } from '../hooks/useUploadImage';

const Profile = ({ user }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [imageSuccess, setImageSuccess] = useState('');
  const [imageError, setImageError] = useState('');

  const {
    updateImage,
    updateUsername,
    updateUserEmail,
    updateUserPassword,
    error: firestoreError,
  } = useUpdateProfile();

  const {
    uploadImage,
    imageRef,
    error: storageError,
    success: storageSuccess,
  } = useUploadImage();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    setLoading(true);

    if (
      username === '' &&
      email === '' &&
      password === '' &&
      confirmPassword === ''
    ) {
      setError('Empty fields');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords must be equal');
      setLoading(false);
      return;
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

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess('Profile updated successfully');
    setLoading(false);
    return;
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    setLoading(true);
    uploadImage(image);
  };

  useEffect(() => {
    if (imageRef) {
      updateImage(imageRef);
    }
  }, [imageRef, updateImage]);

  useEffect(() => {
    if (firestoreError) {
      setError(firestoreError);
    }
    if (storageSuccess) {
      setImageSuccess(storageSuccess);
    }
    if (storageError) {
      setImageError(storageError);
    }
  }, [firestoreError, storageError, storageSuccess]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), 3000);
    }
    if (imageError) {
      setTimeout(() => setError(''), 3000);
    }
    if (success) {
      setTimeout(() => setSuccess(''), 3000);
    }
    if (imageSuccess) {
      setTimeout(() => setImageSuccess(''), 3000);
    }
    if (loading === true) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [error, imageError, success, imageSuccess, loading]);

  return (
    <div>
      <div className='flex flex-col w-[90%] mx-auto justify-center items-center my-16 gap-8'>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt='preview'
            className='rounded-full w-[250px] h-[250px] object-cover'
          />
        ) : (
          <img
            src={user.photoURL}
            alt='user'
            className='rounded-full w-[250px] h-[250px] object-cover'
          />
        )}

        <h1 className='pb-2 text-3xl font-bold text-yellow-400 border-b-4 border-black'>
          {user.displayName}
        </h1>
      </div>

      <form
        className='flex flex-col max-w-[600px] w-[90%] mx-auto gap-3 mb-8
      '
        onSubmit={handleUpdateProfile}
      >
        <input
          type='text'
          value={username || ''}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder='Username'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
        <input
          type='email'
          value={email || ''}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder='E-mail'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
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

        <input
          type='submit'
          value='Update Profile'
          className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
        />

        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
      </form>
      <form
        className='flex flex-col max-w-[600px] w-[90%] mx-auto gap-3 mb-16
      '
        onSubmit={handleUpdateImage}
      >
        <input
          type='file'
          className='block w-full p-4 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          onChange={(e) => setImage(e.target.files[0])}
        />
        {loading ? (
          <p>loading ...</p>
        ) : (
          <input
            type='submit'
            value='Update Image'
            className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
          />
        )}
        {imageError && <p className='error'>{imageError}</p>}
        {imageSuccess && <p className='success'>{imageSuccess}</p>}
      </form>
    </div>
  );
};

export default Profile;
