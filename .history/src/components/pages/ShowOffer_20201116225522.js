import React, { useEffect, useState } from 'react';
import './ShowOffer.css';


function ShowOffer() {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className='showOffer-section'>
            <h2>Lista ładunków</h2>
            <div className='showOffer-container'>

                <div className='showoffer-column'>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCountry}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>

                </div>



                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.unloadingCountry}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.unloadingDate}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.shipmentWeight}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.shipmentLength}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.companyName}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.userName}</div>
                ))}
                {offers.map(el => (
                    <div className='showOffer-field' key={el.id}>{el.userMail}</div>
                ))}

            </div>
        </div>


    )

}

export default ShowOffer
