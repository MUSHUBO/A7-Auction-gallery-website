import React, { useEffect, useState } from 'react';
import Auction from './Auction/Auction';

const Auctions = () => {

    const [auctions, setAuctions] = useState([]);
    console.log(auctions);

    useEffect(() => {
        fetch("Auctions.json")
            .then(res => res.json())
            .then(data => setAuctions(data))
    }, [])

    return (
        <div>
            <div className='all-auction '>
                {
                    auctions.map((auction) => <Auction key={auction.id} auction={auction}></Auction>)
                }
            </div>

        </div>
    );
};

export default Auctions;