import React from 'react'

const GitHubStats = () => {
    return (
        <div name="githubstats" className='w-full bg-gradient-to-b from-black to-gray-800 text-white py-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>GitHub Stats</p>
                    <p className='py-6'>Here's a snapshot of my coding journey from GitHub</p>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                    <div className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <img 
                            src="https://github-readme-stats-henna-chi-56.vercel.app/api?username=iamjineshmodi&hide=stars,contribs&show_icons=true&theme=radical&include_all_commits=True&hide_rank=true" 
                            alt="GitHub Stats"
                            className='rounded-lg max-w-full h-auto'
                        />
                    </div>
                    
                    <div className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <img 
                            src="https://github-readme-stats-henna-chi-56.vercel.app/api/top-langs/?username=iamjineshmodi&langs_count=6&layout=compact" 
                            alt="Top Languages" 
                            className='rounded-lg max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GitHubStats