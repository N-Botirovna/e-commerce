import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SideTitle from '../../ui/SideTitle';

function OrderCard({ id }) {

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error));

    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className='flex border-b items-center justify-between py-6'>
                <div className='flex gap-4'>
                    <img className='w-[180px] h-auto py-3 px-12 border border-gray-300 rounded-lg' src={product.image} alt={product.title} />
                    <div>
                        <SideTitle Paragraph={product.title} />
                        <p className='text-lg text-gray-500'>Size: Medium Color: Blue Material: Plastic</p>
                        <div className='flex gap-3 mt-5'>
                            <button className='bg-white-200 border border-gray-400 rounded py-2 px-3 text-red-400'>Remove</button>
                            <button className='bg-white-200 border border-gray-400 rounded py-2 px-3 text-green-400'>Save for Later</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-semibold text-gray-600 ml-24'>{product.price}$</p>
                    <select className='border border-gray-400 rounded py-1 pr-24 mt-3'>
                        <option value="Qty: 9">Qty: 9</option>
                        <option value="Qty: 3">Qty: 3</option>
                        <option value="Qty: 1">Qty: 1</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default OrderCard
