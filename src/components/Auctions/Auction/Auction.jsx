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
                            <td>
                                <img src={auction.image} alt="" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                            </td>
                            <td>{auction.title}</td>

                            <td colSpan={3}>
                                <div className="flex items-center justify-end gap-14 pr-10">
                                    <span>{auction.currentBidPrice}</span>
                                    <span>{auction.timeLeft}</span>
                                    <button onClick={() => handleFavorite(auction)}>
                                        <GoHeart size={25} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Auction;