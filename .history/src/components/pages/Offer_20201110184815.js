import React from 'react';
import { Link } from 'react-router-dom';

function Offer({ id, companyName, loadingCountry, loadingPostCode, loadinDate, unloadingCountry, unloadingPostcode, unloadingDate, shipmentWeight, shipmentLength, userName, userMail }) {

    return (
        <li className={"list"} id={id}>
   <div className="offer_box">
                <div>
                    <img alt={"green dog face"} className={"offer_img"} src={dog1}></img>
                </div>
                <div className={"offer_single"}>
                    <div className={"offer_header"}>
                        <Link to={`details/${id}`}><h3> {offer} </h3></Link>
                        <p className={"price"}>{price} zł</p>
                    </div>
                    <div className={"offer_info"}>
                        <div className={"who_and_when"}>
                            <p className={"person"}> {person}</p>
                            <p>{date}</p>
                        </div>
        </li>
    )
}