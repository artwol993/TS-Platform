import React, { useState } from 'react';
import './AddLoad.css';
import './N';




function AddLoad() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <div className='add-load-section'>


                <button className='form-btn' onClick={handleClick}>


                    <div className={click ? 'form-btn form-btn-open' : 'form-btn form-btn-close'} onClick={NewLoad}>

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
