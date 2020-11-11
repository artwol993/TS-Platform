import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const addLoad = {addLoad => {
    let body = JSON.stringify(newOffer);
    return fetch(`http://localhost:3000/loads/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: body,
    })
      .then((r) => r.json())
};