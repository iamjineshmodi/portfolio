import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import c from '../assets/c.png';
import MySql from '../assets/sql.png';
import Javascript from '../assets/JavaScript.png';
import Django from '../assets/django.png';
import typescript from '../assets/typescript.png';
import selenium from '../assets/selenium.png';

const Languages = () => {
    const techs = [
        {
            id: 1,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            title: 'Python',
            style: 'shadow-yellow-500',
            size: 'w-24'
        },
        {
            id: 2,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            title: 'Java',
            style: 'shadow-red-500',
            size: 'w-24'
        },
        {
            id: 3,
            src: Django,
            title: 'Django',
            style: 'shadow-green-500',
            size: 'w-40'
        },
        {
            id: 4,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            title: 'React.js',
            style: 'shadow-pink-500',
            size: 'w-40'
        },
        {
            id: 5,
            src: MySql,
            title: 'MySQL',
            style: 'shadow-orange-500',
            size: 'w-44'
        },
        {
            id: 6,
            src: c,
            title: 'C',
            style: 'shadow-blue-500',
            size: 'w-20'
        },
        {
            id: 7,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            title: 'Html',
            style: 'shadow-red-500',
            size: 'w-20'
        },
        {
            id: 8,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            title: 'JavaScript',
            style: 'shadow-yellow-500',
            size: 'w-32'
        },
        {
            id: 9,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            title: 'CSS',
            style: 'shadow-purple-500',
            size: 'w-20'
        },
        {
            id: 10,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-green-500',
            size: 'w-24'
        },
        {
            id: 11,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            title: 'Git',
            style: 'shadow-orange-500',
            size: 'w-24'
        },
        {
            id: 12,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            title: 'Figma',
            style: 'shadow-pink-500',
            size: 'w-24'
        },
        {
            id: 13,
            src: selenium,
            title: 'Selenium',
            style: 'shadow-gray-500',
            size: 'w-24'
        },

    ];
    return (
        <div name="languages" className='bg-gradient-to-b from-gray-800 to-black w-full py-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style, size }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className={`${size} mx-auto h-16 object-contain`} />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Languages