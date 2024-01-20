import React from 'react'
import Popup from './_components/Popup'
import PopupWithActions from './_components/Popup1'
import PopupContent from './_components/Popup2'
import PopupDefault from './_components/Popup4'
import PopupContentIcons from './_components/Popup3'

const Alert = () => {
    return (
        <div className='w-full h-full overflow-y-auto overflow-x-hidden relative px-8 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>Alert Components</h1>
                <h5 className='p-2 bg-red-500 w-fit text-white px-6 text-sm'>Tailwind CSS Alerts</h5>
            </div>
            <div className='flex flex-col my-8'>
                <Popup />
                <PopupWithActions />
                <PopupContent />
                <PopupContentIcons />
                <PopupDefault />
            </div>
        </div>
    )
}

export default Alert