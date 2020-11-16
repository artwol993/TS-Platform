import React from 'react';
import './ShowOffer.css';
import { getOffers } from '../operations'
import Offer from './Offer'

function ShowOffer() {


    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>
                <getOffers/>
                <Offer />

            </div>
        </div>


    )

}

export default ShowOffer
