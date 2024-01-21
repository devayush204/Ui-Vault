import React from 'react'
import Popup from './_components/Popup'
import PopupWithActions from './_components/Popup1'
import PopupContent from './_components/Popup2'
import PopupDefault from './_components/Popup4'
import PopupContentIcons from './_components/Popup3'
import PopupWithIcons from './_components/Popup5'
import PopupWithBorder from './_components/Popup6'
import Popuplist from './_components/Popup7'
import PopupDismissing from './_components/Popup8'

const Alert = () => {
    return (
        <div className='w-full md:max-w-[610px] lg:max-w-[820px] xl:max-w-[100%] mx-auto h-full overflow-y-auto overflow-x-hidden relative px-8 lg:px-4 pt-8'>
            <div className='flex flex-col space-y-3'>
                <h1 className='text-4xl font-semibold'>Alert Components</h1>
                <h5 className='p-2 bg-red-500 w-fit text-white px-6 text-sm'>Tailwind CSS Alerts</h5>
            </div>
            <div className='flex flex-col my-8 mx-auto md:max-w-[610px] lg:max-w-[820px] xl:max-w-[100%] '>
                <Popup />
                <PopupWithActions />
                <PopupContent />
                <PopupContentIcons />
                <PopupDefault />
                <PopupWithIcons />
                <PopupWithBorder />
                <Popuplist />
                <PopupDismissing />
            </div>
        </div>
    )
}

export default Alert