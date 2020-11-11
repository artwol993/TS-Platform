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
            <form className="" onSubmit={handleNewLoad}>
                <div className="form-container">

                    <div className="form-box">

                        <input
                            type="select"
                            className="form-element"
                            name="loadingCountry"
                            placeholder="Kraj załadunku"
                            value={loadingCountry}
                            onChange={(e) => setLoadingCountry(e.target.value)} />

                        <input
                            type="number"
                            className="form-element"
                            name="loadingPostcode"
                            placeholder="Kod pocztowy załadunku"
                            value={loadingPostcode}
                            onChange={(e) => setLoadingPostcode(e.target.value)} />

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
                            type="number"
                            className="form-element"
                            name="unloadingPostcode"
                            placeholder="Kod pocztowy rozładunku"
                            value={unloadingPostcode}
                            onChange={(e) => setUnloadingPostcode(e.target.value)} />

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
                            placeholder="Waga ładunku"
                            value={shipmentWeight}
                            onChange={(e) => setShipmentWeight(e.target.value)} />


                        <input
                            type="number"
                            className="form-element"
                            name="shipmentLength"
                            placeholder="Długość ładunku"
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


            </form>


        </div>
    );
}

export default NewLoad
