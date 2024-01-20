import React from 'react'
import ButtonGroup from './_components/ButtonGropus'
import { ButtonGroupData } from './Data/ButtonData'


const ButtonGroups = () => {
    return (
        <div className='w-full h-full overflow-y-auto overflow-x-hidden relative px-8 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>ButtonGroups Components</h1>
                <h5 className='p-2 bg-blue-500 w-fit text-white px-6 text-sm'>Tailwind CSS Buttons</h5>
            </div>
            {ButtonGroupData.map((item, index) => {
                return (
                    <div className='flex flex-col my-8' key={index}>
                        <ButtonGroup item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonGroups