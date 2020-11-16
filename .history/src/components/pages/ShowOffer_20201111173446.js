import React from 'react';
import './ShowOffer.css';
import { Show } from '../operations'
import Offer from './Offer'

function ShowOffer() {


    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>
                <getOffers />
                <Offer />
                <ShowOffrs/>

            </div>
        </div>


    )

}

export default ShowOffer
