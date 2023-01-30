import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useAuth } from '../hooks/useAuth';

const ResetPassword = ({ userEmail }) => {
  const [email, setEmail] = useState(userEmail);
  const { resetPassword } = useAuth();

  const handleReset = () => {
    resetPassword(email);
    return;
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className='italic font-bold text-yellow-400 outline-none cursor-pointer'
          size='large'
        >
          Reset
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-[rgba(0,0,0,0.3)]' />
        <Dialog.Content className='bg-gray-100 rounded-md shadow-sm fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] max-h-[85vh] p-6'>
          <Dialog.Title className='flex items-center justify-center gap-2 mb-4 text-xl font-bold text-center text-yellow-400'>
            Send a reset password link to your email
            <Dialog.Close asChild>
              <button className=' text-zinc-800' aria-label='Close'>
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <fieldset className='flex flex-col gap-4'>
            <input
              className='w-full p-4 italic text-white rounded-md shadow-sm outline-none bg-zinc-800'
              id='email'
              placeholder='sample@mail.com'
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Close asChild>
              <button
                className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-amber-300 hover:tracking-wider'
                onClick={handleReset}
              >
                Send
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResetPassword;
