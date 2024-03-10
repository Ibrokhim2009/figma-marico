import React from 'react'
import mobile from '../assets/Mobile.png'
function Main4() {
    return (
        <div className='flex flex-col gap-[176px]'>
            <div className='w-[870px] flex flex-col justify-center m-auto items-center text-[white]'>
                <h5 className='text-[20px] text-[#3D82F2] font-[600]'>STEP 2</h5>
                <p className='font-[600] text-[67px] leading-[80px] '>Share Your Homepage</p>
                <h1 className='text-[27px] text-graycol text-center'>
                    Share your Wavium homepage link with your followers, and
                    we'll handle the rest.
                </h1>
            </div>

            <div className='flex  justify-center m-auto w-[85%]  gap-[20px]'>
                <div className='bg-[#0D0D0D] pl-[45px] pt-[33px] w-[100%]'>
                    <p className='text-[#0FC65C] text-[28px]'>One Link</p>
                    <div className='flex flex-col'>
                        <h1 className='flex text-graycol font-[600] text-[70px] flex-col'>
                            ALL You Create.
                        </h1>
                        <span className='mt-[-25px] mb-[14px] text-[white] font-[600] text-[70px] flex-col'>One Link</span>
                    </div>
                    <img src={mobile} className='flex items-center w-[100%] ml-[15%]' alt="" />
                </div>
                <div className='pt-[33px] bg-[#0D0D0D] pl-[30px] w-[100%]  z-50'>
                    <p className='text-[#0FC65C] text-[28px]'>Collect Subscribers</p>
                    <h1 className='flex text-graycol mt-[96px] font-[700] text-[70px] flex-col'>
                        Emails.
                    </h1>
                    <h1 className='flex mt-[-20px] text-white font-[700] text-[70px] flex-col'>
                        Phone #s.
                    </h1>
                    <h1 className='flex mt-[-20p] text-white font-[700] text-[70px] flex-col'>
                        All Yours.
                    </h1>
                </div>
            </div>
            <button className='bg-[#326CF9] w-[312px] text-[white] mt-[-120px] mb-[189px] m-auto h-[70px]  text-[20px] font-[500] rounded-[12px]'>
                Get Started Now
            </button>
        </div>
    )
}

export default Main4