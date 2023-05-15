import React, { useState } from "react";
import "./addLoad.css";

function AddLoad() {
  return (
    <div className="add-load-container">
      {/* Add content specific to the AddLoad component */}
    </div>
  );
}

function NewLoadContainer() {
  const [showAddLoadContainer, setShowAddLoadContainer] = useState(true);

  const handleToggleClick = () => {
    setShowAddLoadContainer((prevState) => !prevState);
  };

  return (
    <div className="add-load-section">
      {showAddLoadContainer && <AddLoad />}
      <button
        className={`form-btn ${
          showAddLoadContainer ? "form-btn-open" : "form-btn-close"
        }`}
        onClick={handleToggleClick}
      >
        {showAddLoadContainer ? "Wróć" : "Dodaj ładunek"}
      </button>
    </div>
  );
}

export default NewLoadContainer;
