import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-5'>
          Recently graduated as a full stack developer from University of
          Toronto with 2+ years of experience in Software development and 5
          years of experience in Supply Management and Operations. Effective at
          combining creativity and problem solving to develop user-friendly
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
