import React, { useState } from 'react';

const Comments = () => {
  const [newComment, setNewComment] = useState('');
  const comments = [];

  const commentHandler = (e) => {
    e.preventDefault();

    if (newComment === '') {
      return;
    }
    const data = {};

    setNewComment('');
  };

  return (
    <div className='flex flex-col gap-8 mt-10'>
      <h2 className='pl-4 text-3xl font-bold border-l-8 border-yellow-400 '>
        User Reviews
      </h2>
      <form className='relative' onSubmit={commentHandler}>
        <input
          value={newComment || ''}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          type='text'
          placeholder='Write your comment'
          className='w-full p-5 text-lg border-2 rounded-lg outline-none bg-slate-50'
        />
        <input
          className='absolute right-0 px-10 py-5 text-lg font-bold text-white bg-yellow-400 border-2 border-yellow-400 rounded-r-lg cursor-pointer'
          type='submit'
          value='Send'
        />
      </form>
      <div>
        {comments
          ?.sort((a, b) => b.order - a.order)
          .map((comment, index) => (
            <div className='py-2 border-b-2 border-yellow-400 ' key={index}>
              <p className='mb-2 text-xl font-bold '>{comment.username}</p>
              <div className='flex items-center justify-between'>
                <p className='py-2 italic text-gray-500 '>{comment.comments}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
