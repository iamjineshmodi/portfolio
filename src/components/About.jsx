import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    I'm a Computer Science student at BITS Pilani with a passion for building impactful software solutions. As a competitive programmer with a Codeforces Pupil rating, I thrive on solving complex algorithmic challenges and translating that problem-solving mindset into real-world applications.
                </p>
                <br />
                <p className='text-xl'>
                    My journey spans from optimizing deep learning models for face-swapping applications to architecting scalable data pipelines at Twilio that accelerated customer onboarding by 40%. I've contributed to production systems that serve thousands of users and built full-stack applications that meaningfully improve user experiences.
                </p>
                <br />
                <p className='text-xl'>
                    Whether it's developing automated monitoring systems, creating comprehensive music management platforms, or diving deep into machine learning architectures, I'm driven by the opportunity to craft elegant solutions to challenging problems. I particularly enjoy the intersection of backend development, AI applications, and system optimization.
                </p>
                <br />
                <p className='text-xl'>
                    Currently exploring the frontiers of artificial intelligence while continuously honing my skills in competitive programming and full-stack development. Always eager to collaborate on projects that push technological boundaries and create genuine value.
                </p>
            </div>
        </div>
    )
}

export default About