import React from 'react'
import { headerdata } from './data/headerdata'
import HeaderComp from './_component/Header'

const Header = () => {
    return (
        <div className='w-full md:max-w-[610px] lg:max-w-[820px] xl:max-w-[100%] mx-auto h-full overflow-y-auto overflow-x-hidden relative px-8 lg:px-4 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>Header Components</h1>
                <h5 className='p-2 bg-teal-600 w-fit text-white px-6 text-sm'>Tailwind CSS Header</h5>
            </div>
            {headerdata.map((item, index) => {
                return (
                    <div className='flex flex-col my-8 mx-auto md:max-w-[610px] lg:max-w-[820px] xl:max-w-[100%]' key={index}>
                        <HeaderComp item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default Header