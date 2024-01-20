import React from 'react'
import { DetailListData } from './Data/DetailListdata'
import DetailComp from './_components/DetailListcomp'


const DetailsLists = () => {
    return (
        <div className='w-full h-full overflow-y-auto overflow-x-hidden relative px-8 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>DetailsLists Components</h1>
                <h5 className='p-2 bg-orange-500-500 w-fit text-white px-6 text-sm'>Tailwind CSS DetailsLists</h5>
            </div>
            {DetailListData.map((item, index) => {
                return (
                    <div className='flex flex-col my-8' key={index}>
                        <DetailComp item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default DetailsLists