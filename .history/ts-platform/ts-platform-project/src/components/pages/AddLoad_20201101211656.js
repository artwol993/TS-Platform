import React, { useState } from 'react';
import './AddLoad.css';
import './NewLoad';

fuction myFunction(){
    const showAddLoad = document.getElementById("add-load-container");
    if (showAddLoad.style.display === "none") {
        showAddLoad.style.display = "block";
    } else {
        showAddLoad.style.display = "none";
    }
    return(
<div>

</div>
    )
}




function AddLoad() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <div className='add-load-section'>


                <button className='form-btn' onClick="myFunction()">

                    <div id="newLoad" className={click ? 'form-btn-open' : 'form-btn-close'} >

                        Nowy ładunek
                        </div>
                </button>

                <div className='add-load-container'>


                </div>
            </div>
        </>
    );

}

export default AddLoad
