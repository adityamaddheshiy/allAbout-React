import React, { useState } from 'react'
import './index.css'
import { Camera, X } from 'lucide-react';

const App = () => {

    const [Data, setData] = useState('')
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])


    const SubmitHandler = (e) => {
        e.preventDefault();

        const copyTask = [...task];

        copyTask.push({ Data, details })

        setTask(copyTask)



        setData(' ')
        setDetails(' ')

    }

    const deleteNote =(idx)=>{
        const copyTask =[...task]

        copyTask.splice(idx,1)
        setTask(copyTask)


    }



    return (
        <div className='h-screen  lg:flex  bg-black text-black'>
            <form onSubmit={(e) => {
                SubmitHandler(e)
            }} className='flex p-10 lg:w-1/2 gap-4 items-start flex-col ' >
                <h1 className='text-white text-3xl font-bold font-sans'>Add Notes</h1>

                {/* first input */}
                <input
                    type="text"
                    className='px-5 py-3 text-black font-bold w-full rounded-md'
                    placeholder='Enter task'
                    value={Data}
                    onChange={(e) => {
                        setData(e.target.value);
                    }}
                />



                <input type='text'
                    className=' px-5   w-full py-3 h-20 font-bold border-white rounded-md'
                    placeholder='write details'
                    value={details}
                    onChange={(e) => {
                        setDetails(e.target.value);
                    }}


                />
                <button className='bg-white text-black w-full px-5 py-3 font-bold active:bg-gray-900 rounded-md'>Add Notes</button>
            </form>

            <div className=' text-white lg:w-1/2 lg:border-l-4 p-10'>
                <h1 className='text-3xl font-bold'>Your Notes</h1>
                <div className='flex flex-wrap  items-start justify-start text-black gap-5  h-full overflow-auto mt-5'>
                    {task.map(function (elem, idx) {
                        return <div className=" flex items-start justify-between flex-col  relative e h-52 w-40 rounded-xl bg-cover py-4 px-4 bg-[url('https://i.pinimg.com/1200x/23/69/e4/2369e45bfa1c88ee77a75022f585742d.jpg')]">
                            <div>
                                <h3 className='leading-tight text-xl font-bold '>{elem.Data} </h3>
                                <p className='mt-2 leading-tight font-semibold text-xs text-gray-500'>{elem.details}</p>
                            </div>
                            <button onClick={()=>{
                                deleteNote(idx)
                            }} className='w-full  bg-red-500 text-white py-2 text-xs rounded-2xl font-bold cursor-pointer active:scale-90'>Delete </button>
                        </div>
                    })}

                </div>
            </div>
        </div>

    )
}

export default App
