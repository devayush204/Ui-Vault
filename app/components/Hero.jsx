import Image from 'next/image'
import React from 'react'
import heroimg from "@/public/Components.png"
import { Check } from 'lucide-react'

const Hero = () => {
    return (
        <div className='mt-20 flex flex-col gap-2 sm:flex-row items-center justify-between'>
            <div className='flex-1'>
                <h1 className='lg:text-2xl md:text-base text-xl font-medium'>Top quality
                    open-source UI Components</h1>
                <h5 className='lg:text-base md:text-sm text-sm font-light my-3'>Stunning components recreated with Tailwind CSS, but with better design and responsiveness</h5>
                <div className='flex flex-col space-y-3'>
                    <h5 className='flex items-center gap-4'><Check className='text-green-500' />  100+ UI components</h5>
                    <h5 className='flex items-center gap-4'><Check className='text-green-500' />  Responsive</h5>
                    <h5 className='flex items-center gap-4'><Check className='text-green-500' />  Great Designs</h5>
                    <h5 className='flex items-center gap-4'><Check className='text-green-500' />  Community Support</h5>
                </div>
            </div>
            <div className='flex-1'>
                <Image src={heroimg} alt='' />
            </div>
        </div>
    )
}

export default Hero