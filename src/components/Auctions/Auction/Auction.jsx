import React from 'react';
import { GoHeart } from "react-icons/go";

const Auction = ({ auction }) => {
    console.log(auction);

    return (
        <div>
            <div className="overflow-x-auto rounded-3xl border border-base-content/5 bg-base-100">
                <table className="table">
                    <tbody>
                        <tr>
                            <th className='w-24 h-24'><img src={auction.image} alt="Camera" className='w-full h-full object-cover rounded-lg' /></th>
                            <td> {auction.title} </td>
                            <div  className='flex items-center justify-end gap-14 pr-10'>
                                <td> {auction.currentBidPrice} </td>
                                <td> {auction.timeLeft} </td>
                                <td><GoHeart size={25} /></td>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Auction;