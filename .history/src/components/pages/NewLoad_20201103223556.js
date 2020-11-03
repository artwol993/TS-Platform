import React, {useState} from 'react';
import './NewLoad.css';

function NewLoad() {

    const id = {};
    const [companyName, setCompanyName] = useState("");
    const [loadingCountry, setLoadingCountry] = useState("");
    const [loadingPostcode, setLoadingPostcode] = useState("");
    const [loadingDate, setLoadingDate]=useState("");
    const [unloadingCountry, setUnloadingCountry] = useState("");
    const [unloadingPostcode, setUnloadingPostcode] = useState("");
    const [unloadingDate, setUnloadingDate]=useState("");
    const [shipmentWeight, setShipmentWeight] = useState("");
    const [shipmentLength, setShipmentLength] = useState("");
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");

    const handleAddShipment = () => {


        const shipment = {
            id: "",
            companyName: "",
            loadingCountry: "",
            loadingPostcode: "",
            loadingDate: "",
            unloadingCountry: "",
            unloadingPostcode: "",
            unloadinDate:"",
            shipmentWeight: "",
            shipmentLength: "",
            userName: "",
            userMail: "",
        }

        createShipment(shipments, onNewOffer);
    }

    return (
        <div>


        </div>
    )
}

export default NewLoad
