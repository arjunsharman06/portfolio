import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: 'home',
      link: '/home',
    },
    {
      id: 2,
      name: 'about',
      link: '/about',
    },
    {
      id: 3,
      name: 'portfolio',
      link: '/portfolio',
    },
    {
      id: 4,
      name: 'experience',
      link: '/experience',
    },
    {
      id: 5,
      name: 'contact',
      link: '/contact',
    },
    {
      id: 6,
      name: 'resume',
      link: 'https://drive.google.com/file/d/1rTN3V-2dHuzEkYWc7vhAtmHzCb6wpe1O/view?usp=share_link',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl signature ml-2'>Arjun Sharman</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link, name }) => (
          <li
            data-tip={name}
            data-for={name}
            data-place='bottom'
            id={name}
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200'
          >
            <ReactTooltip id={name} />
            {name !== 'resume' ? (
              <Link to={link} duration={500}>
                {' '}
                {name}
              </Link>
            ) : (
              <a rel='noopener noreferrer' href={link} target='_blank'>
                {name}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              {name !== 'resume' ? (
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {' '}
                  {name}
                </Link>
              ) : (
                <a rel='noopener noreferrer' href={link}>
                  {name}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
