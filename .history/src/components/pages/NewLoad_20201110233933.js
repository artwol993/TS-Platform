import React, { useState } from 'react';
import './NewLoad.css';
import { addOffer } from '../operations';


function NewLoad({ onNewLoad }) {

    const [loadingCountry, setLoadingCountry] = useState("");
    const [loadingCity, setLoadingCity] = useState("");
    const [loadingDate, setLoadingDate] = useState("");
    const [unloadingCountry, setUnloadingCountry] = useState("");
    const [unloadingCity, setUnloadingCity] = useState("");
    const [unloadingDate, setUnloadingDate] = useState("");
    const [shipmentWeight, setShipmentWeight] = useState("");
    const [shipmentLength, setShipmentLength] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleNewLoad = (e) => {
        e.preventDefault();
        const _errors = [];


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
            loadingCity: `${loadingCity}`,
            loadingDate: `${loadingDate}`,
            unloadingCountry: `${unloadingCountry}`,
            unloadingCity: `${unloadingCity}`,
            unloadingDate: `${unloadingDate}`,
            shipmentWeight: `${shipmentWeight}`,
            shipmentLength: `${shipmentLength}`,
            userName: `${userName}`,
            userMail: `${userMail}`,

        };

        addOffer(load, onNewLoad)
            .then(data => {
                setCompanyName("");
                setLoadingCountry("");
                setLoadingCity("");
                setLoadingDate("");
                setUnloadingCountry("");
                setUnloadingCity("");
                setUnloadingDate("");
                setShipmentWeight("");
                setShipmentLength("");
                setUserName("");
                setUserMail("");
                setSuccess(true);
            })

    };

    return (
        <div className='NewLoad-container'>
            <h2>Nowy ładunek</h2>
            {errors.map(error => <p className="form-error" key={error}>{error}</p>)}

            <form onSubmit={handleNewLoad}>
                <div className="form-container">
                    <div className="form-container-inside">
                        <div className="form-box">

                            <input
                                type="select"
                                className="form-element"
                                name="loadingCountry"
                                placeholder="Kraj załadunku"
                                value={loadingCountry}
                                onChange={(e) => setLoadingCountry(e.target.value)} />

                            <input
                                type="text"
                                className="form-element"
                                name="loadingCity"
                                placeholder="Miejscowość załadunku"
                                value={loadingCity}
                                onChange={(e) => setLoadingCity(e.target.value)} />

                            <input
                                type="date"
                                className="form-element"
                                name="loadingDate"
                                value={loadingDate}
                                onChange={(e) => setLoadingDate(e.target.value)} />

                            <input type="text"
                                className="form-element"
                                name="unloadingCountry"
                                placeholder="Kraj rozładunku"
                                value={unloadingCountry}
                                onChange={(e) => setUnloadingCountry(e.target.value)} />

                            <input
                                type="text"
                                className="form-element"
                                name="unloadingCity"
                                placeholder="Miejscowość rozładunku"
                                value={unloadingCity}
                                onChange={(e) => setUnloadingCity(e.target.value)} />

                            <input
                                type="date"
                                className="form-element"
                                name="unloadingDate"
                                value={unloadingDate}
                                onChange={(e) => setUnloadingDate(e.target.value)} />

                            <input
                                type="number"
                                className="form-element"
                                name="shipmentWeight"
                                placeholder="Waga ładunku w kg"
                                value={shipmentWeight}
                                onChange={(e) => setShipmentWeight(e.target.value)} />


                            <input
                                type="number"
                                className="form-element"
                                name="shipmentLength"
                                placeholder="Długość ładunku w 'm' "
                                value={shipmentLength}
                                onChange={(e) => setShipmentLength(e.target.value)} />

                        </div>
                        <div className="form-box">
                            <input
                                type="text"
                                className="form-element"
                                name="companyName"
                                placeholder="Nazwa firmy:"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)} />

                            <input
                                type="text"
                                className="form-element"
                                name="userName"
                                placeholder="Osoba kontaktowa"
                                value={userName} onChange={(e) => setUserName(e.target.value)} />

                            <input
                                type="email"
                                className="form-element"
                                name="userMail"
                                placeholder="e-mail"
                                value={userMail}
                                onChange={(e) => setUserMail(e.target.value)} />

                        </div>

                    </div>


                    <button className="form-button">Dodaj ładunek</button>

                </div>


            </form>

            {success && <h2 className={"form_confirmation"}>Dodano ładunek!</h2>}

        </div>
    );
}

export default NewLoad
