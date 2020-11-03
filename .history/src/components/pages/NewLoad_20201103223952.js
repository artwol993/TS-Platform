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
            unloadinDate: "",
            shipmentWeight: "",
            shipmentLength: "",
            userName: "",
            userMail: "",
        }

        createLoad(loads, onNewLoad);
    }

    return (
        <div>
            <h2>Nowa oferta </h2>
            <form onSubmit={handleAddLoad}>
                <div>

                    <input type="text" name="companyName" placeholder="Nazwa firmy:" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    <input type="text" name="loadingCountry" placeholder="Polska" value={loadingCountry} onChange={(e) => setLoadingCountry(e.target.value)} />
                    <input type="number" name="loadingPostcode" placeholder="00000" value={loadingPostcode} onChange={(e) => setLoadingPostcode(e.target.value)} />
                    <input type="date" name="loadingDate"  value={loadingDate} onChange={(e) => setLoading(e.target.value)} />
                    <input type="text" name="unloadingCountry" placeholder="Polska" value={unloadingCountry} onChange={(e) => setUnloadingCountry(e.target.value)} />
                    <input type="number" name="unloadingPostcode" placeholder="00000" value={unloadingPostcode} onChange={(e) => setUnloadingPostcode(e.target.value)} />
                    <input type="number" name="shipmentWeight" placeholder="24000" value={shipmentWeight} onChange={(e) => setShipmentWeight(e.target.value)} />
                    <input type="number" name="shipmentLength" placeholder="13,6" value={shipmentLength} onChange={(e) => setShipmentLength(e.target.value)} />
                    <input type="text" name="userName" placeholder="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" name="userMail" placeholder="email" value={userMail} onChange={(e) => setUserMail(e.target.value)} />

                </div>

            </form>
        </div>
    )
}

export default NewLoad
