import React from 'react';
import './ShowOffer.css';
import { ShowOffer } from '../operations'
import Offer from './Offer'

function ShowOffer({ShowOffer}) {


    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>

                <Offer />
                <ShowOffer/>

            </div>
        </div>


    )

}

export default ShowOffer
