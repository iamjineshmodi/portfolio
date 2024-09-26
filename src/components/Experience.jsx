import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from '../assets/python.png';
import c from '../assets/c.png';
import MySql from '../assets/sql.png';
import Reacts from '../assets/React.png';
import Javascript from '../assets/JavaScript.png';
import Django from '../assets/django.png';
import Java from '../assets/java.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500',
            size: 'w-24'
        },
        {
            id: 2,
            src: Java,
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
            src: Reacts,
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
            src: html,
            title: 'Html',
            style: 'shadow-red-500',
            size: 'w-20'
        },
        {
            id: 8,
            src: css,
            title: 'CSS',
            style: 'shadow-purple-500',
            size: 'w-20'
        },
        {
            id: 9,
            src: Javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
            size: 'w-32'
        }
        
    ];
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style, size }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className={`${size} mx-auto`} />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience