import React, { useState, useEffect } from 'react';
import Offer from '../components/pages/Offer';

export const addOffer = (newOffer) => {
  const body = JSON.stringify(newOffer);
  return fetch(`http://localhost:3000/offers/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body,
  })
    .then((response) => response.json());
};

export const getOffers = () => {
  return fetch(`http://localhost:3000/offers/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((response) => response.json());
};

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers()
      .then((response) => setOffers(response))
      .catch((error) => {
        console.error("Error fetching offers:", error);
      });
  }, []);

  return (
    <div className="offers-container">
      {offers.map((offer) => (
        <Offer key={offer.id} {...offer} />
      ))}
    </div>
  );
}

export default Offers;
