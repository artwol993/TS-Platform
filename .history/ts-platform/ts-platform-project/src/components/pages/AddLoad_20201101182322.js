import React, { useState } from 'react';
import './AddLoad.css';
import ''


function AddLoad() {

    function openWin() {
        myWindow = window.open("", "NewWindow", "width=200, height=100");   // Opens a new window
      }

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    return (
        <>
            <div className='add-load-section'>


                <div className='add-load-btn' onClick={handleClick}>

                    <button onClick="{add-load-container}" className={click ? 'form-btn form-btn-open' : 'form-btn form-btn-close'} >Nowy ładunek</button>
            </div>

            <div className='add-load-container'>


            </div>
        </div>
        </>
    );

}

export default AddLoad
