import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-full lg:h-screen overflow-hidden mb-14'>
            <div className=''>
                <img className='w-full h-full bg-cover bg-center' src="https://i.ibb.co.com/8nLMp66G/Banner-min.jpg" alt="" />
            </div>
            <div className='absolute inset-0 text-white flex flex-col items-start justify-center lg:ml-32 ml-7 lg:gap-8 gap-4 '>
                <h1 className='lg:text-5xl text-3xl font-semibold'>Bid on Unique Items from <br/> Around the World</h1>
                <p className='font-light text-xl'>Discover rare collectibles, luxury goods, and vintage treasures <br/> in our curated auctions</p>
                <button className='btn rounded-3xl'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;