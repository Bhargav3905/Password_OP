import React from 'react'

const navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    <span>Password</span> 
                    <span className='text-green-500'>OP/&gt;</span>

                    </div>
            </div>
        </nav>
    )
}

export default navbar
