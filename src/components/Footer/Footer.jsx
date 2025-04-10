import React from 'react';

const Footer = () => {
    return (
        <div className='my-10 flex flex-col lg:items-center items-start justify-center lg:text-center ml-7'>
            <div className="">
                <a className="text-2xl text-[#003EA4] ">Auction<span className='text-[#FFD337] font-bold'>Gallery</span></a>
            </div>
            <div className='flex gap-2 mt-3 mb-5'>
                <p>Bid.</p>
                <p>Win.</p>
                <p>Own.</p>
            </div>
            <div>
                <ul className='lg:flex gap-8 text-xl mb-8'>
                    <li className='hover:bg-gray-200 p-1 rounded-md'><a href=""><small>Home</small> </a></li>
                    <li className='hover:bg-gray-200 p-1 rounded-md'><a href=""><small>Auctions</small> </a></li>
                    <li className='hover:bg-gray-200 p-1 rounded-md'><a href=""><small>Categories</small> </a></li>
                    <li className='hover:bg-gray-200 p-1 rounded-md'><a href=""><small>How to works</small> </a></li>
                </ul>
            </div>
            <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;