import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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





export { Offers };