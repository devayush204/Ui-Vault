import React from 'react'
import MediaComp from './_component/MediaComponent'
import { mediadata } from './Data/Mediadata'

const Media = () => {
    return (
        <div className='w-full md:max-w-[610px] lg:max-w-[820px] xl:max-w-[100%] mx-auto h-full overflow-y-auto overflow-x-hidden relative px-8 lg:px-4 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>Media Components</h1>
                <h5 className='p-2 bg-sky-600 w-fit text-white px-6 text-sm'>Tailwind CSS Media</h5>
            </div>
            {mediadata.map((item, index) => {
                return (
                    <div className='flex flex-col my-8 mx-auto md:max-w-[610px] lg:max-w-[820px] xl:max-w-[100%]' key={index}>
                        <MediaComp item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default Media