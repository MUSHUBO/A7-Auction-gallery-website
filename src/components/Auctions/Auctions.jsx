import React from 'react';

const Auctions = () => {
    return (
        <div className='bg-[#EBF0F5]'>
            <div className='w-10/12 mx-auto py-32'>
                <div>
                    <h1 className='text-3xl font-medium mb-5'>Active Auctions</h1>
                    <p className='mb-8'>Discover and bid on extraordinary items</p>
                </div>

                <div className='lg:flex text-center lg:gap-6 space-y-5'>
                    {/* Active Auctions Section */}
                    <div className='left-container lg:w-[70%] bg-white rounded-3xl h-[520px]'>

                        <div className="overflow-x-auto rounded-3xl border border-base-content/5 bg-base-100">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th></th>
                                        <th>Current Bid</th>
                                        <th>Time Left</th>
                                        <th>Bid Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th><img src="" alt="Camera" /></th>
                                        <td>Vintage Leica M3 Camera</td>
                                        <td>$2,850</td>
                                        <td>2 Days left</td>
                                        <td>love</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>

                    {/* Favorite Items Section */}
                    <div className='right-container lg:w-[30%] bg-white rounded-3xl h-fit'>
                        <h3 className='pt-6 pb-4 border-b font-medium text-3xl'>  Favorite Items</h3>
                        <div className='border-b p-12 space-y-5'>
                            <p className='text-2xl font-medium'>No favorites yet</p>
                            <p>Click the heart icon on any item to add it to your favorites</p>
                        </div>
                        <h3 className='py-6 text-2xl flex justify-between px-8'>Total bids Amount:<span className='font-mono'> $0000 </span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;