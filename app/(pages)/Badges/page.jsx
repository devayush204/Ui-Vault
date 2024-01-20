import React from 'react'
import Badge1 from './_components/Badge1'
import Badge2 from './_components/Badge2'
import Badge3 from './_components/Badge3'
import Badge4 from './_components/Badge4'
import Badge5 from './_components/Badge5'
import Badge6 from './_components/Badge6'
import Badge7 from './_components/Badge7'
import Badge8 from './_components/Badge8'
import Badge9 from './_components/Badge9'
import Badge10 from './_components/Badge10'
import Badge11 from './_components/Badge11'

const Badges = () => {
    return (
        <div className='w-full h-full overflow-y-auto overflow-x-hidden relative px-8 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>Badge Components</h1>
                <h5 className='p-2 bg-green-500 w-fit text-white px-6 text-sm'>Tailwind CSS Badge</h5>
            </div>
            <div className='flex flex-col my-8'>
                <Badge1 />
                <Badge2 />
                <Badge3 />
                <Badge4 />
                <Badge5 />
                <Badge6 />
                <Badge7 />
                <Badge8 />
                <Badge9 />
                <Badge10 />
                <Badge11 />
            </div>
        </div>
    )
}

export default Badges