import React from 'react'

function CheckBox({id, brandName , hidden, checked, onchange}) {
    return (
        <>
        <input className={hidden ||'mr-2'} type="checkbox" name="brand" id={id} onChange={onchange}  checked={checked}/>
        <label htmlFor={id}>{brandName}</label>
        </>
    )
}

export default CheckBox
