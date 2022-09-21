import React from 'react';
import quizWizzard from '../assets/portfolio/quizWizzard.jpg';
import weatherDashboard from '../assets/portfolio/weatherDashboard.jpg';
import photoPort from '../assets/portfolio/photoPort.jpg';
import musicBox from '../assets/portfolio/musicBox.jpg';
import workSchedular from '../assets/portfolio/workSchedular.jpg';
import socialNetwork from '../assets/portfolio/socialNetwork.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: quizWizzard,
      demo: 'https://arjunsharman06.github.io/quiz-wizard/',
      git: 'https://github.com/arjunsharman06/quiz-wizard',
    },
    {
      id: 2,
      src: weatherDashboard,
      demo: 'https://arjunsharman06.github.io/weather-dashboard/',
      git: 'https://github.com/arjunsharman06/weather-dashboard',
    },
    {
      id: 3,
      src: photoPort,
      demo: 'https://arjunsharman06.github.io/photo-port/',
      git: 'https://github.com/arjunsharman06/photo-port',
    },
    {
      id: 4,
      src: musicBox,
      demo: 'https://beca-d.github.io/music-box/',
      git: 'https://github.com/arjunsharman06/music-box',
    },
    {
      id: 5,
      src: workSchedular,
      demo: 'https://arjunsharman06.github.io/work-day-scheduler/',
      git: 'https://github.com/arjunsharman06/work-day-scheduler',
    },
    {
      id: 6,
      src: socialNetwork,
      demo: 'https://user-images.githubusercontent.com/14013884/188538283-3d07f136-89db-42e2-98be-d604c3b20e03.mp4',
      git: 'https://github.com/arjunsharman06/social-network-api',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, demo, git }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  href='{}'
                >
                  <a href={demo} target='_blank' rel='noreferrer'>
                    Demo
                  </a>
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a href={git} target='_blank' rel='noreferrer'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
