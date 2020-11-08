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
        return "Kod pocztowy załadunku jest wymagany"
    }

    return null
}

export default () => {
    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
        companyName: '',
        loadingCountry: '',
        loadingPostCode: '',
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errorMsg = validate(form)
        if (errorMsg) {
            setError(errorMsg)
            console.log('blad')
            return
        }

        return (
            <form>
                <fieldset>
                    <legend>Dodaj ładunek</legend>
                    <div>
                        <label for="companyName"></label>
                        <input
                            type="text"
                            name="CompanyName"
                            onChange={updateField} />
                    </div>
                    <div>
                        <label for="loadingCountry"></label>
                        <input
                            type="text"
                            name="loadingCountry"
                            onChange={updateField} />
                    </div>
                    <div>
                        <label for="loadingPostcode"></label>
                        <input
                            type="number"
                            name="loading"
                            onChange={updateField} />
                    </div>
                </fieldset>
                <div>
                    <input
                        type="submit"
                        value="Dodaj ładunek" />
                </div>
            </form>
        )
    }
}