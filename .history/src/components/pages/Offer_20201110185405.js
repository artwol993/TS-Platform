import React from 'react';
import { Link } from 'react-router-dom';

function Offer({ id, companyName, loadingCountry, loadingPostCode, loadingDate, unloadingCountry, unloadingPostcode, unloadingDate, shipmentWeight, shipmentLength, userName, userMail }) {

    return (
        <li className={"list"} id={id}>
            <div className="offer_box">
                        <Link to={`details/${id}`}><h3> {offer} </h3></Link>
                        <p className={"companyName"}>{companyName} </p>
                        <p className={"loadingCountry"}>{loadingCountry} </p>
                        <p className={"loadingPostCode"}>{loadingPostCode} </p>
                        <p className={"loadingDate"}>{loadingPostCode} </p>
                        <p className={"loadingPostCode"}>{loadingPostCode} </p>
                        <p className={"loadingPostCode"}>{loadingPostCode} </p>
                        <p className={"loadingPostCode"}>{loadingPostCode} </p>
                    </div>

        </li>
    )
}