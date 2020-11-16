import React from 'react';
import './ShowOffer.css';
import { getOffers } from '../operations'


function ShowOffer() {

    const getOffers = {
        loadingCountry: `${loadingCountry}`,
        loadingCity: `${loadingCity}`,
        loadingDate: `${loadingDate}`,
        unloadingCountry: `${unloadingCountry}`,
        unloadingCity: `${unloadingCity}`,
        unloadingDate: `${unloadingDate}`,
        shipmentWeight: `${shipmentWeight}`,
        shipmentLength: `${shipmentLength}`,
        companyName: `${companyName}`,
        userName: `${userName}`,
        userMail: `${userMail}`,

        show(load, onNewLoad)
        .then(data => {
            setLoadingCountry("");
            setLoadingCity("");
            setLoadingDate("");
            setUnloadingCountry("");
            setUnloadingCity("");
            setUnloadingDate("");
            setShipmentWeight("");
            setShipmentLength("");
            setCompanyName("");
            setUserName("");
            setUserMail("");
            setSuccess(true);
        })
    }

    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>

            </div>

        </div>
    )
}

export default ShowOffer
