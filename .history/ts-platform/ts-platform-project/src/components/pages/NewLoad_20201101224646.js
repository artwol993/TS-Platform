import React from 'react';
import './NewLoad.css';

function NewLoad() {
var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    return (
        <div>


        </div>
    )
}

export default NewLoad
