import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Offer from '../components/pages/Offer'
import ShowOffer from './s'

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

export const updateOffers = (id, newOffer, successCallback) => {
    fetch(`http://localhost:3000/offers/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(newOffer),
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch((err) => console.log(err));
};

export const getOffers = (condition = '') => {
    return fetch(`http://localhost:3000/offers?${condition}`)
        .then((resp) => resp.json())
}

function SingleOffer() {
    const { id } = useParams()

    const [singleOffer, setSingleOffer] = useState([]);
    useEffect(() => {
        fetchSingleOffer();
    }, []);

    const fetchSingleOffer = () => {
        getOffers(`id=${id}`)
            .then((getOffers) => setSingleOffer(getOffers));
    }

    return (
        <div>
            {singleOffer.map((offer) => (
                <ShowOffer key={offer.id} {...offer} />
            ))}
        </div>
    )
}

function Offers() {
    const [offers, setOffer] = useState([]);

    useEffect(() => {
        fetchAllOffers();
    }, []);

    const fetchAllOffers = () => {
        availableOffers()
            .then((availableOffers) => setOffer(availableOffers));
    };

    return (
        <div className={"offers_container"}>
            {offers.map((offer) => (
                <Offer key={offer.id} {...offer} />
            ))}
        </div>
    );
}

async function availableOffers() {
    let offers = await getOffers()
}

export { SingleOffer, Offers };