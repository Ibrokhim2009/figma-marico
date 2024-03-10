import React from 'react'
import Happy_emoji from '../assets/Happy_emoji.png'
import Party_emoji from '../assets/Party_emoji.png'
import Smile_emoji from '../assets/Smile_emoji.png'
function Main2() {
  const emajies = [
    { img: Smile_emoji, des: 'Reduced Anxiety', title: 'Never worry about losing your audience.' },
    { img: Happy_emoji, des: 'Lower Workload', title: "Just share one link. We'll handle the rest." },
    { img: Party_emoji, des: 'More Time', title: 'Spend less time on marketing tools' },
  ]
  return (
    <div >
      <h1 className='flex mb-[64px]'>
        Why Creators Love Marico
      </h1>
      <div className='flex mb-[142px] items-center justify-center gap-[90px] text-[white]'>
        {emajies?.map((item, index) => (
          <div className='flex items-center flex-col gap-[5px]' key={index + 1} >
            <div className='flex items-center gap-2 text-[30px] font-[600]'>
              <img className='w-[33px]' src={item.img} alt="" />
              <p>{item.des}</p>
            </div>
            <p className='text-[20px] text-graycol'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='w-[870px] flex flex-col justify-center m-auto items-center text-[white]'>
        <h5 className='text-[20px] text-[#3D82F2] font-[600]'>STEP 1</h5>
        <p className='font-[600] text-[67px] leading-[80px] '>Connect Your Content</p>
        <h1 className='text-[27px] text-graycol text-center mb-[30px]'>
          Bring all of your content together and get a Homepage that
          automatically updates whenever you create anywhere online.
        </h1>
        <button className='w-[300px] mb-[172px] text-[20px] text-graycol font-[500] border-[1px] border-solid border-[#707070] rounded-[12px] h-[70px] '>
          View Avaliable Sources
        </button>
      </div>
    </div>
  )
}

export default Main2