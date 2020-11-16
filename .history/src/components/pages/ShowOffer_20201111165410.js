import React from 'react';
import './ShowOffer.css';
import { getOffers } from '../operations';

function ShowOffer() {



    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>
        {getOffers}
            </div>

        </div>
    )
}

export default ShowOffer
