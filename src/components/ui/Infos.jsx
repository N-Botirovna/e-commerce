import React from 'react'

function Infos({title, info}) {
    
    return (
        <div className='flex  items-center py-3'>
            <p className=' text-gray-400 w-1/3'>{title}</p>
            <p className=' text-gray-600 w-1/5'>{info}</p>
        </div>
    )
}

export default Infos
