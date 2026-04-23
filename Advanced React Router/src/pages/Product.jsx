import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center flex-nowrap gap-5'>
                    <Link to='men'>Men</Link>
                    <Link to='women'>Women</Link>
                    <Link to='kids'>Kids</Link>
                </div>
                <h1>Product Page</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default Product
