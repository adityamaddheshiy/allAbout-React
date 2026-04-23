import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar2 = () => {

    const navigate = useNavigate();




    return (
        <div className='px-4 py-4 bg-amber-600 items-center flex justify-between '>
            <div className='flex gap-6'>
                <button onClick={() => {
                    navigate('/');
                }}
                    className='bg-green-800 rounded py-2 px-3 m-2 text-white font-semibold text-xl '>
                    Home</button>
                <button onClick={() => {
                    navigate(-1);
                }}
                    className='bg-green-800 rounded py-2 px-3 m-2 text-white font-semibold text-xl'>
                    Back</button>

                <button onClick={() => {
                    navigate(+1)
                }}
                    className='bg-green-800 rounded py-2 px-2 m-2 text-white font font-semibold text-xl'>Forward</button>
            </div>
        </div>
    )
}

export default NavBar2
