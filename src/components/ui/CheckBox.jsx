import React from 'react'

function CheckBox({id, brandName , hidden}) {
    return (
        <>
        <input className={hidden ||'mr-2'} type="checkbox" name="brand" id={id}  />
        <label htmlFor={id}>{brandName}</label>
        </>
    )
}

export default CheckBox
