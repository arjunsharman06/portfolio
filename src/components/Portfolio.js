import React, { useState } from 'react';
import quizWizzard from '../assets/portfolio/quizWizzard.jpg';
import weatherDashboard from '../assets/portfolio/weatherDashboard.jpg';
import photoPort from '../assets/portfolio/photoPort.jpg';
// import musicBox from '../assets/portfolio/musicBox.jpg';
import workSchedular from '../assets/portfolio/workSchedular.jpg';
import socialNetwork from '../assets/portfolio/socialNetwork.jpg';
import textEditor from '../assets/portfolio/textEditor.jpg';
// import bookSerach from '../assets/portfolio/bookSerach.jpg';
import ReactTooltip from 'react-tooltip';

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [dataText, setText] = useState('');

  const onModal = (text) => {};

  const portfolios = [
    {
      id: 1,
      src: quizWizzard,
      demo: 'https://arjunsharman06.github.io/quiz-wizard/',
      git: 'https://github.com/arjunsharman06/quiz-wizard',
      text: `It's a quiz game consisting of JavaScript MCQ questions. The game consists of 10 MCQ question and for each answer 10 seconds will be deducted from the total time.After the completion of the game, the score will be displayed, and the player needs to enter his/her initials to save the score.`,
    },
    {
      id: 2,
      src: weatherDashboard,
      demo: 'https://arjunsharman06.github.io/weather-dashboard/',
      git: 'https://github.com/arjunsharman06/weather-dashboard',
      text: 'The application shows the current and the 5 days weather forecast of any city.In the current weather condition, this application will display the temperature, the humidity, the wind speed, and the UV index of the city.',
    },
    {
      id: 3,
      src: photoPort,
      demo: 'https://arjunsharman06.github.io/photo-port/',
      git: 'https://github.com/arjunsharman06/photo-port',
      text: 'This a single page application build on latest React technology primarily provide user a simple yet sleek platform for showing off their photography skills using React state, props, Hooks, and reusable UI components',
    },
    {
      id: 4,
      src: textEditor,
      demo: 'https://frozen-sands-72166.herokuapp.com/',
      git: 'https://github.com/arjunsharman06/pwa-text-editor',
      text: `The app is the Text Editor which runs in the browser . The app is single-page application that meets the PWA criteria. Additionally, it also feature a number of data persistence techniques that serve as redundancies in case one of the options is not supported by the browser. The application also function's offline.`,
    },
    {
      id: 5,
      src: workSchedular,
      demo: 'https://arjunsharman06.github.io/work-day-scheduler/',
      git: 'https://github.com/arjunsharman06/work-day-scheduler',
      text: 'The user can set the schedule for each hour of the day across different time range.The colour coding is provided for different schedule with respect to current time. The colour coding is as follow grey: past, red: present, green : future.',
    },
    {
      id: 6,
      src: socialNetwork,
      demo: 'https://frozen-sands-72166.herokuapp.com/',
      git: 'https://github.com/arjunsharman06/social-network-api',
      text: `Created API's for social network site which perform CRUD operations for various Models i.e. User, Friends , Thoughts , Replies.`,
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen mt-20'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, demo, git, text }) => (
            <div
              key={id}
              className='shadow-md shadow-gray-600 rounded-lg hover:ring-4 hover: ring-red-400 hover:ring-inset'
              onClick={() => {
                setText(text);
                setModal(!modal);
              }}
            >
              <ReactTooltip id={src} />
              <div
                className='cursor-pointer'
                data-tip={'Click to view detail'}
                data-place='top'
                data-for={src}
              >
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105 '
                />
              </div>

              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  href='{}'
                >
                  <ReactTooltip id={src} />
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

          {modal && (
            <div
              className='relative z-10'
              aria-labelledby='modal-title'
              role='dialog'
              aria-modal='true'
              id='defaultModal'
            >
              <div className='fixed inset-0 bg-gray-50 bg-opacity-5 transition-opacity'></div>

              <div className='fixed inset-0 z-10 overflow-y-auto'>
                <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                  <div className='relative transform overflow-hidden rounded-lg bg-gradient-to-b from-black to-gray-800  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg  ring-red-400 ring-4'>
                    <div className='bg-gradient-to-b from-black to-gray-800  text-white pt-0 pb-5 sm:p-6 sm:pb-4'>
                      <div className='sm:flex sm:items-start'>
                        <div className='mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left '>
                          <button
                            type='button'
                            className='text-white-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  flex justify-end align-middle dark:hover:bg-gray-600 dark:hover:text-white'
                            data-modal-toggle='defaultModal'
                            onClick={() => {
                              setModal(!modal);
                            }}
                          >
                            <svg
                              aria-hidden='true'
                              className='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'
                              ></path>
                            </svg>
                            <span className='sr-only'>Close modal</span>
                          </button>
                          <div className='m-3 md:m-2'>
                            <p className='text-white-500 text-base'>
                              {dataText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
