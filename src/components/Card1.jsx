import React from 'react'

const Card1 = ({ img, title }) => {
    return (
        <div className='w-[18%] rounded-[12px] shadow-2xl h-[50vh] border-red-500 border-solid border-[2px]'>
            <div className='w-[240px] h-[240px] mt-[-48px] ml-[10px] rounded-[120px] bg-[#1E959B] flex justify-center items-center'>
                <img src={img} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-[#1E959B] m-[10px] text-center'>{title}</h1>
                <button className='w-[180px] h-[60px] shadow-xl m-[10px] rounded-[12px] text-[white] bg-[#F05670]'>ЗАКАЗАТЬ</button>
            </div>
        </div>
    )
}

export default Card1