import React from 'react'
import Image3 from '../assets/Image (3).png'
import image4 from '../assets/Image (4).png'
import logo from '../assets/logo.png'
import Dot from '../assets/Dot.png'

function Main6() {

    return (
        <div>
            <div className='flex justify-center pb-[180px] flex-col items-center gap-[56px]'>
                <h1 className='text-[white] text-[70px] font-[600]'>Experts Agree</h1>
                <img src={Image3} alt="" />
            </div>
            <div className="text-[65px] banner font-[600] text-[white]">
                We've helped over 1,000 creatorsre <br />
                claim control of their audience.
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={logo} className='w-[164px] mb-[0px]' alt="" />
                <p className='text-white text-[90px] font-[700]'>Get Started Now</p>
                <p className='text-[white] text-[40px] mt-[-10px]'>Setup is easy and takes under 5 minutes.</p>
                <button className='bg-[#326CF9] h-[70px] text-[white] w-[372px] text-[26px] mt-[14px] mb-[26px] font-[500] rounded-[12px]'>
                    Get Started Now
                </button>
                <div className='flex gap-[9px] items-center mb-[183px]'>
                    <img src={Dot} alt="" />
                    <p className='text-[25px] text-[white] font-[700]'>1000+</p>
                    <p className='text-[25px] text-[#707070]'>creators have already started</p>
                </div>
            </div>
        </div >
    )
}

export default Main6