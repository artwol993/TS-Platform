import React, { useState } from 'react';
import './NewLoad.css';

function NewLoad() {

    const id = {};
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

    const handleNewLoad = () => {


        const load = {
            id: "",
            companyName: "",
            loadingCountry: "",
            loadingPostcode: "",
            loadingDate: "",
            unloadingCountry: "",
            unloadingPostcode: "",
            unloadingDate: "",
            shipmentWeight: "",
            shipmentLength: "",
            userName: "",
            userMail: "",
        }


    }

    return (
        <div>

            <form onSubmit={handleNewLoad}>
                <div className="form-container">
                    <div className="form-box">
                        <input type="text" className="Form-element" name="companyName" placeholder="Nazwa firmy:" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                    </div>

                    <div className="form-box">

                        <input type="select" className="Form-element" name="loadingCountry" placeholder="Polska" value={loadingCountry} onChange={(e) => setLoadingCountry(e.target.value)} />
                        <input type="number" className="Form-element" name="loadingPostcode" placeholder="00000" value={loadingPostcode} onChange={(e) => setLoadingPostcode(e.target.value)} />
                        <input type="date" className="Form-element" name="loadingDate" value={loadingDate} onChange={(e) => setLoadingDate(e.target.value)} />
                        <input type="text" className="Form-element" name="unloadingCountry" placeholder="Polska" value={unloadingCountry} onChange={(e) => setUnloadingCountry(e.target.value)} />
                        <input type="number" className="Form-element" name="unloadingPostcode" placeholder="00000" value={unloadingPostcode} onChange={(e) => setUnloadingPostcode(e.target.value)} />
                        <input type="date" className="Form-element" name="unloadingDate" value={unloadingDate} onChange={(e) => setUnloadingDate(e.target.value)} />
                        <input type="number" className="Form-element" name="shipmentWeight" placeholder="24000" value={shipmentWeight} onChange={(e) => setShipmentWeight(e.target.value)} />
                        <input type="number" className="Form-element" name="shipmentLength" placeholder="13,6" value={shipmentLength} onChange={(e) => setShipmentLength(e.target.value)} />
                    </div>


                    <input type="text" className="Form-element" name="userName" placeholder="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" className="Form-element" name="userMail" placeholder="email" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
                    <button>Dodaj ładunek</button>
                </div>

            </form>
        </div>
    )
}

export default NewLoad
