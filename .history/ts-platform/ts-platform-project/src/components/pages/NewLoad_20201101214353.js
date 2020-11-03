import React from 'react';
import './NewLoad.css';

function NewLoad() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    return (
        <div id="">


        </div>
    )
}

export default NewLoad
