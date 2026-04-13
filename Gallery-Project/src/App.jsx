import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function App() {

  const [index, setIndex] = useState(1)

  const [userData, setUserData] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)

    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-300 text-sm absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 font-semiblod  '>Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} />
          </div>
          <h2 className='text-bold text-lg'>{elem.author}</h2>
        </a>
      </div>

    })
  }

  return (
    <div className='h-screen p-10 bg-black overflow-auto text-white'>

      <div className='flex flex-wrap gap-5' >
        {printUserData}
      </div>

      <div className='flex justify-center gap-5 item-center p-4'>
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
          }
        }} className='bg-amber-400 text-black cursor-pointer text-sm px-4 py-2 rounded font-semibold'>Previous</button>

        <h4>Page {index} </h4>

        <button onClick={() => {
          setIndex(index + 1)

        }} className='bg-amber-400 text-black cursor-pointer text-sm px-4 py-2 rounded font-semibold'>Next</button>
      </div>

    </div>
  )
}
