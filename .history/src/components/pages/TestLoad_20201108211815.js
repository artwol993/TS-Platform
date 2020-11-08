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
                            <label for="companyName"
<input onChange={updateField}></input>
                    </div>
                </fieldset>
            </form>
        )
    }
}