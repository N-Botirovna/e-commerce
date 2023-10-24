import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/templates/footer/Footer'
import Header from '../../components/templates/header/Header'
import Offer from '../../components/templates/offer/Offer'
import { UilArrowLeft } from '@iconscout/react-unicons'
import OrderCard from '../../components/templates/orderCard/OrderCard'

function Orders() {
    const ids = [1,2,3]
    return (

        <>
            <div className='h-[100vh]'>
            <Header />
            <div className='container mx-auto py-4 text-3xl font-bold mb-4'>
                Orders
            </div>
            <div className='container mx-auto border border-gray-400 rounded-lg py-5 px-12 mb-12'>
                {ids.map((id)=>(
                    <OrderCard id = {id} />
                ))}
                <Link to={"/"}>
                    <button className='rounded-lg bg-blue-500 mt-4 py-4 px-14 text-2xl text-white flex items-center justify-between gap-3'>
                        <UilArrowLeft/>
                        <p>Back to Shop</p>
                    </button>
                </Link>
            </div>
            </div>
            <Offer />
            <Footer />
        </>
    )
}

export default Orders
