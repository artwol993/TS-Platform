import React, { useState } from 'react';
import './AddLoad.css';
import'




function AddLoad() {



    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <div className='add-load-section'>

                <button className='form-btn' onClick={handleClick}>

                    <div className={click ? 'form-btn form-btn-open' : 'form-btn form-btn-close'}>

                        Nowy ładunek
                        </div>
                </button>

                <div>
        </New
                </div>

            </div>
        </>
    );

}

export default AddLoad