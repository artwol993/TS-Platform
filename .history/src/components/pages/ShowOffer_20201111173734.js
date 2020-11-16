import React from 'react';
import './ShowOffer.css';
import { getOffers } from '../operations'
import Offer from './Offer'

function ShowOffer({getOffers}) {


    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>

                <Offer />


            </div>
        </div>


    )

}

export default ShowOffer