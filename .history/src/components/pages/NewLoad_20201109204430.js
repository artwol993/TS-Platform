import React, { useState } from 'react';
import './NewLoad.css';


function NewLoad({ onNewLoad }) {

    const [companyName, setCompanyName] = useState("");
    const [loadingCountry, setLoadingCountry] = useState("");
    const [loadingPostcode, setLoadingPostcode] = useState("");
    const [loadingDate, setLoadingDate] = useState("");
    const [unloadingCountry, setUnloadingCountry] = useState("");
    const [unloadingPostcode, setUnloadingPostcode] = useState("");
    const [unloadingDate, setUnloadingDate] = useState("");
    const [shipmentWeight, setShipmentWeight] = useState("");
    const [shipmentLength, setShipmentLength] = useState("");
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleNewLoad = (e) => {
        e.preventDefault();
        const _errors = [];

        if (companyName.length < 2) {
            _errors.push("Nazwa firmy powinna zaiwerać przynajmniej 2 znaki");
        }

        if (isNaN(shipmentWeight)) {
            _errors.push("Waga ładunku powinna być liczbą")
        }

        if (isNaN(shipmentLength)) {
            _errors.push("Długość ładunku powinna być liczbą")
        }

        if (userName.length < 2) {
            _errors.push("Nazwa osoby kontaktowej jest za krótkie");
        }

        if (userMail.length < 2 || userMail.indexOf("@") === -1) {
            _errors.push("Email powinien zawierać '@'")
        }

        setErrors(_errors);
        setSuccess(false);
        if (_errors.length > 0) {
            return false;
        }

        const load = {
            companyName: `${companyName}`,
            loadingCountry: `${loadingCountry}`,
            loadingPostcode: `${loadingPostcode}`,
            loadingDate: `${loadingDate}`,
            unloadingCountry: `${unloadingCountry}`,
            unloadingPostcode: `${unloadingPostcode}`,
            unloadingDate: `${unloadingDate}`,
            shipmentWeight: `${shipmentWeight}`,
            shipmentLength: `${shipmentLength}`,
            userName: `${userName}`,
            userMail: `${userMail}`,

        };

        // addOffer(load, onNewLoad)
        //     .then(data => {
        //         setCompanyName("");
        //         setLoadingCountry("");
        //         setLoadingPostcode("");
        //         setLoadingDate("");
        //         setUnloadingCountry("");
        //         setUnloadingPostcode("");
        //         setUnloadingDate("");
        //         setShipmentWeight("");
        //         setShipmentLength("");
        //         setUserName("");
        //         setUserMail("");
        //         setSuccess(true);
        //     })

    };

    return (
        <div>
            {success && <h2 className={"form_confirmation"}>Dodano ładunek!</h2>}
            {errors.map(error => <p className="form-error" key={error}>{error}</p>)}
            <form onSubmit={handleNewLoad}>
                <div className="form-container">
<div className="form-container">

</div>


                    <button className="form-button">Dodaj ładunek</button>

                </div>


            </form>


        </div>
    );
}

export default NewLoad
