import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewLoad from './pages/NewLoad';


export const addLoad = (Load => {
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