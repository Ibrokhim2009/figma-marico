import React from 'react'
import Screen from '../assets/Screen.png'
function Main3() {
  const content = [
    'Bring all of your content together into one homepage.',
    'Your page automatically updates whenever you create.'
  ]
  return (
    <div className='flex items-center justify-end'>

      <div className='w-[94vw] text-[white] flex justify-end'>
        <div className='flex flex-col  w-[55%]'>
          <h1 className='text-[30px] font-[500] mb-[77px]'>
            Your Homepage
          </h1>
          <p className='text-[67px] font-[600]'>Your Content.</p>
          <p className='text-[67px] font-[600] mb-[30px]'>All in <span className='text-mblue'>One Spot</span></p>
          <div className='flex flex-col gap-[8px] mb-[66px]'>
            {content.map((item, index) => (
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
        <img src={Screen} className='w-[50vw] mb-[71px]' alt="" />
      </div>
    </div>
  )
}

export default Main3