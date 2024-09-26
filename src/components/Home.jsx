import React from 'react'
import HeroImage from "../assets/jinesh.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-6xl text-white max-w-xl '>
                        I'm a
                        <br />
                        <TypeAnimation
                            sequence={[
                                ' Competitive Programmer',
                                1000,
                                ' Web Developer',
                                1000,
                                ' AI Enthusiast',
                                1000,
                                // ' Math Wizard',
                                // 1000,
                                // ' Software Engineer',
                                // 1000,
                                ' Tech Blogger',
                                1000,
                                ' Open Source Contributor',
                                1000,
                                ' Problem Solver',
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a 2026 graduate with deep interest for programming and math.
                        I love to work on web and AI projects.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500}>
                            <button className='group md:text-xl  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500'>
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300 ml-2'>
                                    <HiArrowRight size={20} />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='md:w-1/3'>
                    <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
                </div>
            </div>
        </div>
    )
}

export default Home