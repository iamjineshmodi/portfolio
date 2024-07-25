import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Hello there! I am a passionate coder with a deep interest in Mathematics and Computer Science, and I find great joy in engaging with competitive programming.
                    Over the past two years, I have actively participated in coding contests on platforms like Codeforces and CodeChef, achieving notable milestones (including a maximum rating of 6 stars on CodeChef and reaching the Green Pupil level on Codeforces). Alongside my competitive programming journey,
                </p>
                <br />
                <p className='text-xl mt-5'>
                    I have also delved into the Django framework, utilizing it effectively during various hackathons. I've had the opportunity to contribute to backend application development, resulting in my team securing top-three positions on several occasions.
                    Furthermore, I possess a strong fascination with the field of Artificial Intelligence and its potential applications. This passion drives me to continually explore and learn more about AI.
                </p>
            </div>
        </div>
    )
}

export default About