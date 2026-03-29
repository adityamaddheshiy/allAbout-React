import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id='right' className='  h-full flex flex-nowrap gap-10 overflow-x-auto fle p-6 w-2/3'>
      {props.users.map((elem,idx) => {
        return <RightCard img={elem.img} color={elem.color} tag={elem.tag} key={idx} id={idx} />
      })}
    </div>
  )
}

export default RightContent
