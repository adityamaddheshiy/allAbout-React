import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 px-18  gap-10 flex justify-center h-[90vh] items-center '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
