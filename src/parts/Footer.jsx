import React from 'react'
import Logo from '../assets/Logo.png'
import downArrow from '../assets/Down_arrow.png'
function Footer() {
    return (
        <div className='px-[100px] flex items-center justify-between pb-[96px]'>
            <div className='flex flex-col gap-[2px]'>
                <div className='flex gap-[20px]'>
                    <img className='w-[50px] h-[53px]' src={Logo} alt="" />
                    <p className='text-[40px] font-[800] text-[white]'>Marico</p>
                </div>
                <p className='text-[25px] text-graycol'>info@marico.co</p>
            </div>

            <div className='gap-[38px] flex text-[20px] font-medium text-[#707070]'>
                <p className='flex cursor-pointer items-baseline gap-[10px]'>Use Cases <img src={downArrow} alt="" /></p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer text-[#3C82F4]'>Pricing</p>
                <p className='cursor-pointer'>Blog</p>
            </div>
        </div>
    )
}

export default Footer