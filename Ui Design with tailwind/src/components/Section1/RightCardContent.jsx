import React from 'react'

const RightCardContent = (props,id) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
          <h2 className='bg-white text-2xl rounded-full h-12 w-12 flex justify-center items-center font-semibold'>{props.id+1}</h2>
          <div>
            <p className='text-lg leading-normal text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, adipisci illo. Deleniti rerum inventore eaque.</p>
            <div className=' justify-between flex'>
              <button style={{backgroundColor:props.color}} className=' text-white font-medium px-7 py-3 rounded-full  '>{props.tag} </button>
              <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-3 rounded-full  '>
                <i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
  )
}

export default RightCardContent
