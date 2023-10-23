import React from 'react'
import { Logo } from '../../../image/logo/logo'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilInstagramAlt } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'
function FooterSideBar() {
    return (
        <div className='flex flex-col w-1/5'>
            <Logo />
            <p className='py-4'>Best information about the company gies here but now lorem ipsum is</p>
            <div className='flex items-center gap-2'>
                <UilFacebook />
                <UilTwitter />
                <UilLinkedin />
                <UilInstagramAlt />
                <UilYoutube />
            </div>
        </div>
    )
}

export default FooterSideBar
