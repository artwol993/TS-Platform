import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css'
import{getoffers}from

function Offer({ id, companyName, loadingCountry, loadingCity, loadingDate, unloadingCountry, unloadingCity, unloadingDate, shipmentWeight, shipmentLength, userName, userMail }) {

    return (
        <li className={"list"} id={id}>

            <div className="offer_box">
                <Link to={`details/${id}`}><h3>  </h3></Link>
                <p className={"companyName"}>Nazwa firmy: {companyName} </p>
                <p className={"loadingCountry"}>Miejscowość załadunku: {loadingCountry} </p>
                <p className={"loadingCity"}>Kod pocztowy załadnku{loadingCity} </p>
                <p className={"loadingDate"}>Data załadunku: {loadingDate} </p>
                <p className={"unloadingCountry"}>Kraj rozładunku: {unloadingCountry} </p>
                <p className={"unloadingCity"}>Miejscowość dostawy:{unloadingCity} </p>
                <p className={"unloadingDate"}>Data dostawy: {unloadingDate} </p>
                <p className={"shipmentWeight"}>Waga ładunku: {shipmentWeight} kg </p>
                <p className={"shipmentLength"}>Długość ładunku: {shipmentLength} m </p>
                <p className={"userName"}>Osoba kontaktowa: {userName}  </p>
                <p className={"userMail"}>kontakt email: {userMail}  </p>
            </div>

        </li>
    )
}
export default Offer;