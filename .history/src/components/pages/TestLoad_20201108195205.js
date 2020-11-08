import React from "react";


const ErrorMessage = ({ text }) => {
    return (
        <div>
            <span>{text}</span>
        </div>
    )
}

const validate = form => {
    if (!form.companyName) {
        return "Nazwa firmy jest wymagana"
    }
    if (!form.loadingCountry) {
        return "Kraj załadunku jest wymagany"
    }
    if (!form.loadingPostCode) {
        return "Kraj załadunku jest wymagany"
    }

}