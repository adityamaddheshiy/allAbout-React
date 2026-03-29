import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 px-18  gap-10 flex justify-center h-[90vh] items-center '>
      <LeftContent/>
      <RightContent   users={props.users}/>
    </div>
  )
}

export default Page1Content
