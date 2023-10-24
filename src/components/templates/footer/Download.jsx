import React from 'react'
import AppStore from '../../../image/logo/AppStore'
import Google from '../../../image/logo/Google'
import SideTitle from '../../ui/SideTitle'

function Download() {
    return (
       <div className='flex flex-col gap-2'>
            <SideTitle Paragraph={"Get App"}/>
            <AppStore/>
            <Google/>
       </div> 
    )
}

export default Download
