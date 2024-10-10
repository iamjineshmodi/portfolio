import React from 'react'
import terminalTypingTest from '../assets/terminal_wpm.png';
import pollingWebApplication from '../assets/PollingWebPage.png'
import BitsBidsHomePage from '../assets/BitsBidsHomePage.png'
import HarmonixHomePage from '../assets/HarmonixHomePage.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: terminalTypingTest,
            demo: 'https://github.com/iamjineshmodi/TerminalTypeTest',
            code: 'https://github.com/iamjineshmodi/TerminalTypeTest',
            title: 'Terminal-based Typing Test Application',
        },
        {
            id: 2,
            src: HarmonixHomePage,
            demo: 'https://github.com/iamjineshmodi/Harmonix-Music-Management',
            code: 'https://github.com/iamjineshmodi/Harmonix-Music-Management',
            title: 'Harmonix-Music Management',
        },
        {
            id: 3,
            src: BitsBidsHomePage,
            demo: 'https://github.com/iamjineshmodi/Frontend---Bitsbids',
            code: 'https://github.com/iamjineshmodi/Backend---Bitsbids',
            title: 'Bitsbids - Live Bidding WebApp ',
        },
        {
            id: 4,
            src: pollingWebApplication,
            demo: 'https://github.com/iamjineshmodi/Polling_WebApp',
            code: 'https://github.com/iamjineshmodi/Polling_WebApp',
            title: 'Polling WebApplication',
        },
    ];
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white
        md:h-screen
        '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, code, title }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-40 w-80' />
                                <div className='flex justify-center items-center h-20
                                bg-gradient-to-br
                                from-gray-800
                                to-gray-800
                                '>
                                    <p className='text-xl mt-4 text-center'>{title}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <a href={demo} target='_blank' className='w-1/2 px-10 p-4 duration-200 hover:scale-110 
                                    hover:bg-gradient-to-r from-gray-800 to-blue-500 text-center
                                    shadow-sm shadow-white' >
                                        Demo
                                    </a>

                                    <a href={code} target='_blank' className='w-1/2 px-10 p-4 duration-200 hover:scale-110 
                                    hover:bg-gradient-to-r to-gray-800 from-red-500 text-center
                                    shadow-sm shadow-white'>
                                        Code
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio