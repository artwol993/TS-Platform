import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const addLoad = {addLoad => {
    let body = JSON.stringify(newLoad);
    return fetch(`http://localhost:3001/loads/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: body,
    })
      .then((r) => r.json())
};