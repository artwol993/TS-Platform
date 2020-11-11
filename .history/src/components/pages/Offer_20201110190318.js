import React from 'react';
import { Link } from 'react-router-dom';

function Offer({ id, companyName, loadingCountry, loadingPostCode, loadingDate, unloadingCountry, unloadingPostcode, unloadingDate, shipmentWeight, shipmentLength, userName, userMail }) {

    return (
        <li className={"list"} id={id}>
            <div className="offer_box">
                <Link to={`details/${id}`}><h3>  </h3></Link>
                <p className={"companyName"}>{companyName} </p>
                <p className={"loadingCountry"}>{loadingCountry} </p>
                <p className={"loadingPostCode"}>{loadingPostCode} </p>
                <p className={"loadingDate"}>{loadingDate} </p>
                <p className={"unloadingCountry"}>{unloadingCountry} </p>
                <p className={"unloadingPostcode"}>{unloadingPostcode} </p>
                <p className={"unloadingDate"}>{unloadingDate} </p>
                <p className={"shipmentWeight"}>{shipmentWeight} kg </p>
                <p className={"shipmentLength"}>{shipmentLength} m </p>
                <p className={"userName"}>{userName}  </p>
                <p className={"userMail"}>{userMail}  </p>
            </div>

        </li>
    )
}
export default Offer;