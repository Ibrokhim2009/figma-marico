import React from 'react'
import logi from '../assets/logo.png'
import downArrow from '../assets/Down_arrow.png'
function Navbar() {
    return (
        <nav className='flex items-center justify-between px-[140px]'>
            <div className='flex items-center gap-3 '>
                <img src={logi} alt="" />
                <h2 className='text-[34px] text-[white] font-extrabold'>Marico</h2>
            </div>
            <div className='gap-[38px] flex text-[18px] font-medium text-[#707070]'>
                <p className='flex cursor-pointer items-baseline gap-[10px]'>Use Cases <img src={downArrow} alt="" /></p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer text-[#3C82F4]'>Pricing</p>
                <p className='cursor-pointer'>Blog</p>
            </div>
            <div className='flex  items-center gap-[18px]'>
                <a href="" className='font-[500] text-[20px] text-[#707070]'>Login</a>
                <button className='bg-[#306EF7] font-[500] text-[18px] text-[white] w-[100px] h-[45px] rounded-md'>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar