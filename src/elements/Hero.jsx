import React from 'react'
import { Cloud } from '../icons'

export default function Hero() {
    return (
        <div className='w-screen h-full bg-gradient-to-r from-c7 to-c10 relative flex justify-center items-center text-white '>
            <div className='flex flex-col h-[80vh] w-full'>
                <div className='flex h-full w-full relative text-c1 text-opacity-40'>
                    
                    <div className=' absolute animate-bounce animate-delay-[3s] animate-infinite animate-duration-[15s] bottom-1/3 left-3/4'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[2s] animate-infinite animate-duration-[15s] bottom-1/3 right-2/4'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[4s] animate-infinite animate-duration-[15s] top-1/3 left-2/4'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[50ms] animate-infinite animate-duration-[15s] bottom-2/3 left-3/4'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[700ms] animate-infinite animate-duration-[15s] bottom-1/4 right-2/3'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[1500ms] animate-infinite animate-duration-[15s] top-1/3 right-3/4'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[6s] animate-infinite animate-duration-[15s] top-3/4 left-2/3'>
                        <Cloud/>
                    </div>
                    <div className=' absolute animate-bounce animate-delay-[70ms] animate-infinite animate-duration-[15s] top-1/4 left-1/3'>
                        <Cloud/>
                    </div>
                </div>
            </div>
            <div className=' text-3xl font-semibold absolute bg-gradient-to-r from-c1 to-c5 bg-clip-text text-transparent animate-fade-right animate-once animate-duration-[3000ms] animate-delay-1000 animate-ease-in'>Meet Your Dream Web Developer</div>
        </div>
    )
}
