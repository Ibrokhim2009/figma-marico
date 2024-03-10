import React from 'react'
import Image2 from '../assets/Image (2).png'
function Main5() {
    const content2 = [
        'Embed content or create something new to share.',
        'Share content over email, text message or your homepage.'
    ]
    return (
        <div>
            <div className='w-[57%] flex flex-col justify-center m-auto items-center text-[white]'>
                <h5 className='text-[20px] text-[#3D82F2] font-[600]'>STEP 3</h5>
                <p className='font-[600] text-[67px] leading-[80px] '>Send Emails & Text Messages</p>
                <h1 className='text-[30px] mb-[189px] text-graycol text-center'>
                    No more going through a social platform. Reach and engage
                    your audience directly over email and text massage.
                </h1>
            </div>





            <div className='flex items-center justify-end'>

                <div className='w-[94vw] text-[white] flex justify-end'>
                    <div className='flex flex-col  w-[55%]'>
                        <h1 className='text-[30px] font-[500] mb-[77px]'>
                            Create & Share                    </h1>
                        <p className='text-[67px] font-[600]'>Reach Your</p>
                        <p className='text-[67px] font-[600] mb-[30px]'>Audience <span className='text-mblue'>Directly.</span></p>
                        <div className='flex flex-col gap-[8px] mb-[66px]'>
                            {content2.map((item, index) => (
                                <div className='flex gap-1 items-center'>
                                    <p className='text-[white] bg-[#2D2D2D] w-[30px] h-[30px] rounded-full flex items-center justify-center'>{index + 1}</p>
                                    <span className='text-[20px] '>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-[26px] mb-[21px] w-[438px] '>
                            <button className='bg-[#326CF9] w-[100%] h-[70px]  text-[20px] font-[500] rounded-[12px]'>
                                Get Started Now
                            </button>

                            <button className=' text-[20px] w-[100%] font-[500] border-[1px] border-solid border-[#707070] rounded-[12px] h-[70px] '>
                                View A Demo
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col mb-[89px]'>
                        <img src={Image2} alt="" />
                        <div className='w-[40%] h-[100px] relative top-[-70px] left-[45%] bg-[#8B8B8B]'>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Main5