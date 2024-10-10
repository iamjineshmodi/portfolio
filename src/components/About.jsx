import React from 'react'
// hi bye bye bye

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Hello there! I am a passionate coder with a deep interest in Mathematics and Computer Science, and I find great joy in engaging in solving problems of Comptetitive Programming.
                    Over the past two years, I have actively participated in coding contests on platforms like Codeforces (Pupil), CodeChef, and LeetCode.
                </p>
                <br />
                <p className='text-xl mt-5'>
                    I have also delved into the Django framework, utilizing it effectively during various hackathons and in my previous internship. I've had the opportunity to contribute to backend application development, resulting in my code currently being used in production at my previous workplace.
                    Furthermore, I possess a strong fascination with the field of Artificial Intelligence and its potential applications. This passion drives me to continually explore and learn more about AI.
                </p>
            </div>
        </div>
    )
}

export default About