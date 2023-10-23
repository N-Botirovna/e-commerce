import React from 'react'

export default function Button({ title, type }) {
    return (
        <button type={type || "button"} className="py-3 text-lg rounded-r-lg text-white font-medium bg-blue-500 border-blue-500 w-[100px]" >
            {title}
        </button>
    )
}