import React from 'react'
import Text_shape from '../assets/Text_shape.png'
import Dot from '../assets/Dot.png'
function Main1() {
    return (
        <div className='mt-[142px]'>
            <div className='flex mb-[126px] flex-col  items-center leading-[130px] text-[white] font-[500] text-[97px]'>
                <h1 >Own your audience.</h1>
                <img src={Text_shape} className='h-[97px]' alt="" />
            </div>
            <div className='flex flex-col items-center mb-[158px] justify-center  text-[white]'>
                <h1 className='font-[500] text-[40px] mb-[50px] w-[694px] leading-[50px] text-center'>
                    Turn your audience into email and
                    text message subscribers.
                </h1>
                <div className='flex gap-[26px] mb-[21px] w-[652px] '>
                    <button className='bg-[#326CF9] h-[70px] w-[100%] text-[20px] font-[500] rounded-[12px]'>
                        Get Started Now
                    </button>

                    <button className='w-[100%] text-[20px] font-[500] border-[1px] border-solid border-[#707070] rounded-[12px] h-[70px] '>
                        View A Demo
                    </button>
                </div>
                <div className='flex gap-[9px] items-start'>
                    <img src={Dot} alt="" />
                    <p className='text-[25px] font-[700]'>1000+</p>
                    <p className='text-[25px] text-[#707070]'>creators have already started</p>
                </div>
            </div>
        </div >
    )
}

export default Main1