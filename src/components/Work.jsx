import React from 'react';

const Work = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Intern",
            company: "Twilio",
            period: "Jun 2025 – Jul 2025",
            location: "Remote",
            achievements: [
                "Integrated Salesforce CRM with Twilio Unified Profiles via a scalable React.js data pipeline, enriching 10,000+ customer records and accelerating profile generation for enterprise clients",
                "Architected a multi-region AWS deployment (us-east-1, eu-west-1), enabling secure, real-time CRM data synchronization across 50+ collections",
                "Reduced customer data onboarding time by 40% through a robust S3-to-UP pipeline, enabling real-time insights and boosting Unified Profiles adoption"
            ]
        },
        {
            id: 2,
            title: "Summer Intern",
            company: "CogniX Technologies",
            period: "May 2024 – Jul 2024",
            location: "Remote",
            achievements: [
                "Delivered end-to-end yoga platform with pose correction and personalized guidance, implementing full-stack solution using Django and React.js that increased user engagement by 40%",
                "Built 3 core product features (instructor dashboard, profile management, live chat) enabling seamless instructor-student connections, resulting in 85% retention rate"
            ]
        },
        {
            id: 3,
            title: "Undergraduate Research Assistant",
            company: "Birla Institute of Technology and Sciences",
            period: "Jan 2025 - Present",
            location: "On-site",
            achievements: [
                "Conducted comprehensive literature review of 25+ research papers on Proof of Ownership (POW) protocols for secure cloud deduplication, analyzing state-of-the-art approaches to prevent unauthorized data access while maintaining storage efficiency",
                "Implemented and visualized key POW authentication schemes through detailed sequence diagrams and protocol specifications, demonstrating technical understanding of cryptographic verification mechanisms in distributed storage systems"
            ]
        }
    ];

    return (
        <div name='work' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Work Experience
                    </p>
                    <p className='py-6'>Check out some of my professional experience</p>
                </div>

                <div className='space-y-8'>
                    {experiences.map(({ id, title, company, period, location, achievements }) => (
                        <div key={id} className='bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                                <div>
                                    <h3 className='text-2xl font-bold text-white mb-1'>{title}</h3>
                                    <h4 className='text-xl text-blue-400 font-semibold'>{company}</h4>
                                </div>
                                <div className='text-right mt-2 md:mt-0'>
                                    <p className='text-gray-300 font-medium'>{period}</p>
                                    <p className='text-gray-400 text-sm'>{location}</p>
                                </div>
                            </div>
                            
                            <div className='space-y-3'>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className='flex items-start'>
                                        <div className='w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                                        <p className='text-gray-300 leading-relaxed'>{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <br />
        <br />
        <br />
        <br />
        </div>
    );
};

export default Work;