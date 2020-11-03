import React, { useState } from 'react';
import './AddLoad.css';


function AddLoad() {

    function openWin() {
        myWindow = window.open("", "myWindow", "width=200, height=100");   // Opens a new window
      }

      function closeWin() {
        myWindow.close();
      }

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    return (
        <>
            <div className='add-load-section'>


                <div className='add-load-btn' onClick={handleClick}>

                    <button onClick="openWin" className={click ? 'form-btn form-btn-open' : 'form-btn form-btn-close'} >Nowy ładunek</button>
            </div>

            <div className='add-load-container'>


            </div>
        </div>
        </>
    );

}

export default AddLoad
