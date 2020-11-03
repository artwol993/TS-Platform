import React, { useState } from 'react';
import './AddLoad.css';


function AddLoad() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className='add-load-section'>


                <div className='add-load-btn' onClick={handleClick}>

                    <i className{Click ? 'open-form-btn' : 'close-form-btn'} />
                </div>

                <div className='add-load-container'>


                </div>
            </div>
    )
        </>
}

export default AddLoad
