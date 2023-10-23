import React from 'react'
import Download from './Download'
import FooterInfo from './FooterInfo'
import FooterSideBar from './FooterSideBar'

function Footer() {
    return (
        <div className='mt-10 flex justify-between gap-4 container mx-auto mb-20'>
            <FooterSideBar/>
            <FooterInfo title = {"About"} infos = {["About us", "Find Store", "Categories", "Blogs"]}/>
            <FooterInfo title={"Partnership"} infos= {["About us", "Find Store", "Categories", "Blogs"]}/>
            <FooterInfo title={"Information"} infos={["Help center", "Monely Refund", "Shipping", "Contact us"]}/>
            <FooterInfo title={"For users"} infos={["Login", "Register", "Settings", "My Orders"]}/>
            <Download/>
        </div>
    )
}

export default Footer
