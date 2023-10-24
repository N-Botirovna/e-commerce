import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideTitle from '../../ui/SideTitle';
import { UilCheck } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentAltChartLines } from '@iconscout/react-unicons'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'
import RatingStars from '../../ui/RatingStars';
import Infos from '../../ui/Infos';

function SinglePage() {
    const { id } = useParams();
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
        <div className='container my-10 mx-auto px-8 pt-6 pb-12 border border-gray-400 rounded-lg flex justify-between items-start'>
            <div className='w-1/3 '>
                <img className='h-auto w-full border px-24 py-4 border-gray-200 rounded mb-7' src={product.image} alt={product.title} />
                <div className='flex justify-between'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <img
                            key={index}
                            className='h-[70px] w-auto border py-2 px-4 border-gray-200 rounded'
                            src={product.image}
                            alt={product.title}
                        />
                    ))}
                </div>
            </div>
            <div className='w-2/3 pl-8 '>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex text-green-500 text-xl'>
                            <UilCheck /> <span>In stock!</span>
                        </div>
                        <SideTitle Paragraph={product.title} />
                    </div>
                    <div className='flex text-blue-500 text-xl gap-4 items-center'>
                        <UilHeart />
                        <h4>Save for later</h4>
                    </div>
                </div>
                <ul className='flex items-center gap-12 pt-6'> 
                    <li className='flex items-center gap-3'>
                        <RatingStars rating={product.rating.rate}/>
                        <p className='text-yellow-700 text-xl'>{product.rating.rate}</p> 
                    </li>
                    <li className='flex items-center gap-3 text-gray-500 text-xl'>
                        <UilCommentAltChartLines/>
                        <p>32 reviews</p>
                    </li>
                    <li className='flex items-center gap-3 text-gray-500 text-xl'>
                        <UilShoppingCartAlt/>
                        <p>154 sold</p>
                    </li>
                </ul>
                <ul className='flex items-center justify-between bg-yellow-100 rounded-lg py-3 mt-4 mb-6'>
                    <li className='border-r border-gray-300 pl-6 w-1/3'>
                        <p className='text-red-400 text-2xl '>{product.price}$</p>
                        <p className='text-gray-500 '>50-100pcs</p>
                    </li>
                    <li className='border-r border-gray-300 pl-6 w-1/3'>
                        <p className='text-gray-600 text-2xl'>{Math.round(product.price * 0.92)}$</p>
                        <p className='text-gray-500'>50-100pcs</p>
                    </li>
                    <li className=' pl-6 w-1/3'>
                        <p className='text-gray-600 text-2xl'>{Math.round(product.price* 0.83)}$</p>
                        <p className='text-gray-500'>50-100pcs</p>
                    </li>

                </ul>

                <Infos title={"Price:"} info={"Negotiable"}/>
                <hr />
                <Infos title={"Type:"} info={product.category}/>
                <Infos title={"Material:"} info={"Plastic Material"}/>
                <Infos title={"Design:"} info={"Modern Nice"}/>
                <hr/>
                <Infos title={"Customization:"} info={"Customized logo and  design custom packages"}/>
                <Infos title={"Protection:"} info={"Refund Policy"}/>
                <Infos title={"Warranty:"} info={"2 years"}/>
            </div>
        </div>
    );
}

export default SinglePage;
