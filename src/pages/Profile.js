import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  console.log(image);

  return (
    <div>
      <div className='flex flex-col w-[90%] mx-auto justify-center items-center my-16 gap-8'>
        <img
          src='https://viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp'
          alt=''
          className='rounded-full w-[250px] h-[250px] object-cover'
        />

        <form
          className=' w-[90%]
          max-w-[600px]'
        >
          <input
            type='file'
            className='block w-full p-3 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            onChange={(e) => setImage(e.target.value)}
          />
        </form>

        <h1 className='text-3xl font-bold text-yellow-400 border-b-4 border-black'>
          Uzumaki Naruto
        </h1>
      </div>

      <form
        className='flex flex-col max-w-[600px] w-[90%] mx-auto gap-3 mb-16
      '
      >
        <input
          type='text'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder='Username'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder='E-mail'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder='Password'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
        <input
          type='password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder='Confirm Password'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
        <input
          type='submit'
          value='Update Profile'
          className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
        />
      </form>
    </div>
  );
};

export default Profile;
