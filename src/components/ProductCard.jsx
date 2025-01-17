import React from 'react';

const ProductCard = (props) => {
    return (
        <div relative className="flex justify-evenly items-center min-h-[150px] max-h-[150px] min-w-[300px] max-w-[300px] p-4 bg-white rounded-lg shadow-lg">
            <div className="relative min-w-[80px]">
                <img className="w-20 h-20 object-cover rounded-lg" src={props.image} alt={props.title} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className="font-bold">{props.title}</h1>
                <p className="text-sm">{props.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;