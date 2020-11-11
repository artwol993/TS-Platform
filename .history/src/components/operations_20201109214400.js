import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewLoad from './pages/NewLoad';


export const addLoad = (newLoad) => {
    let body = JSON.stringify(NewLoad);
    return fetch(`http://localhost:3001/loads/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: body,
    })
        .then((r) => r.json())
};

export const updateOffers = (id, newOffer, successCallback) => {
    fetch(`http://localhost:3001/offers/${id}`, {
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