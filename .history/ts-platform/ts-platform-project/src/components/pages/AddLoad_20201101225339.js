import React, { useState } from 'react';
import './AddLoad.css';





function AddLoad() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const buttton = document.querySelector('button');
const div= doc

    return (
        <>
            <div className='add-load-section'>

                <button className='form-btn' onClick={handleClick}>

                    <div className={click ? 'form-btn form-btn-open' : 'form-btn form-btn-close'}>

                        Nowy ładunek
                        </div>
                </button>



            </div>
        </>
    );

}

export default AddLoad