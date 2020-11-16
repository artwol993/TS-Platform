import React, { useEffect, useState } from 'react';
import './ShowOffer.css';


function ShowOffer() {
const[offers, setOffers] = useState([])
useEffect(() => {
fetch('http://localhost:3000/offers')
    .then(res => res.json())
.then(data => set)
},[])
    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>


            </div>
        </div>


    )

}

export default ShowOffer
