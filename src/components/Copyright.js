import React from 'react';

const Copyright = () => {
  return (
    <div
      className='
        text-center
        text-gray-500
        text-sm
        mt-12
        mb-4
        font-semibold
        tracking-widest
    '
    >
      Created by{' '}
      <a
        href='https://github.com/VISHALVKY'
        target='_blank'
        rel='noopener noreferrer'
        className='
          hover:text-blue-700
          transition
          duration-300
          ease-in-out
          text-blue-500
        '
      >
        V
      </a>
    </div>
  );
};

export default Copyright;
