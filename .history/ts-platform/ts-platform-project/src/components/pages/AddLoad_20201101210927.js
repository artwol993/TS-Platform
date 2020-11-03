import React, { useState } from 'react';
import './AddLoad.css';
import './NewLoad';




function AddLoad() {
    const [click, setClick] = useState(false);
    const showAddLoad = document.getElementById("newLoad");
    if (showAddLoad.style.display === "none") {
        showAddLoad.style.display = "block";
    } else {
        showAddLoad.style.display = "none";
    }

    const handleClick = () => setClick(!click);


    return (
        <>
            <div className='add-load-section'>


                <button className='form-btn' onClick="showAddLoad(), handleClick">

                    <div id="newLoad" className={click ? 'form-btn-open' : 'form-btn-close'} >

                        Nowy ładunek
                        </div>
                </button>

                <div className='newLoad'>


                </div>
            </div>
        </>
    );

}

export default AddLoad
