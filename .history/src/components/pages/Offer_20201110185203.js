import React from 'react';
import { Link } from 'react-router-dom';

function Offer({ id, companyName, loadingCountry, loadingPostCode, loadinDate, unloadingCountry, unloadingPostcode, unloadingDate, shipmentWeight, shipmentLength, userName, userMail }) {

    return (
        <li className={"list"} id={id}>
            <div className="offer_box">
                        <Link to={`details/${id}`}><h3> {offer} </h3></Link>
                        <p className={"companyName"}>{companyName} zł</p>
                    </div>

        </li>
    )
}