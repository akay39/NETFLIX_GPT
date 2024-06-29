import React from 'react'

const VideoTitle = ({title, overview}) => (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='py-6 text-lg w-4/12'>{overview}</p>
        <div className='flex '>
            <button className='bg-white  text-black text-xl rounded-lg p-2 px-8 m-1 hover:bg-opacity-80'> ▷  
      Play</button>
            <button className='bg-gray-500  text-white text-xl rounded-lg p-2 px-4 bg-opacity-50 m-1'>ⓘ More Info </button>
        </div>
    </div>
)

export default VideoTitle;
