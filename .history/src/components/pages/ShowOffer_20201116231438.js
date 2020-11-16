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
                    <p>Kraj załadunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}> Miej{el.loadingCountry}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Miejscowowść załadunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Data załadunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.loadingDate}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Kraj rozładunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.unloadingCountry}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Miejscowowść rozładunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.unloadingCity}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Data rozładunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.unloadingDate}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Waga ładunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.shipmentWeight}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Długość ładunku:</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.shipmentLength}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Nazwa firrmy</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.companyName}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Osba kontaktowa</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.userName}</div>
                    ))}
                </div>
                <div className='showoffer-column'>
                    <p>Kontakt</p>
                    {offers.map(el => (
                        <div className='showOffer-field' key={el.id}>{el.userMail}</div>
                    ))}
                </div>

            </div>
        </div>


    )

}

export default ShowOffer
