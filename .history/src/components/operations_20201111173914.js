import React, { useState } from 'react';
import Offer from '../components/pages/Offer'


export const addOffer = (newOffer) => {
    let body = JSON.stringify(newOffer);
    return fetch(`http://localhost:3000/offers/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: body,
    })
        .then((r) => r.json())
};



export const getOffers = (ShowOffer) => {
    let body = JSON.stringify(ShowOffer);
    return fetch(`http://localhost:3000/offers/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
        body: body,
    })
        .then((resp) => resp.json())
};



function Offers() {
    const offers = useState([]);



    return (
        <div className={"offers-container"}>
            {offers.map((offer) => (
                <Offer key={offer.id} {...offer} />
            ))}
        </div>
    );
}


export default Offers
