import React from 'react';
import { GoHeart } from "react-icons/go";

const Auction = ({ auction, handleFavorite }) => {
    // console.log(handleFavorite);

    return (
        <div>
            <div className="overflow-x-auto border border-base-content/5 bg-base-100">
                <table className="table">
                    <tbody>
                        <tr>
                            <th className=''>
                                <img src={auction.image} alt="Camera" className='w-20 h-20 object-cover rounded-lg flex-shrink-0' />
                            </th>
                            <td> {auction.title} </td>
                            <div className='flex items-center justify-end gap-14 pr-10'>
                                <td> {auction.currentBidPrice} </td>
                                <td> {auction.timeLeft} </td>
                                <button onClick={() => handleFavorite(auction)}><GoHeart size={25} /></button>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Auction;