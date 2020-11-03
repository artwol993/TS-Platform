import React from 'react';
import './AddLoad.css';

function AddLoad(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className='add-load-container'>

        </div>
    );
}

class NewLoadContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showAddLoadContainer: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showAddLoadContainer: !prevState.showAddLoadContainer
        }));
    }



    render() {
        return (
            <div>
                <AddLoad warn={this.state.showAddLoadContainer} />
                <button className='form-btn' onClick={this.handleToggleClick}>
                    {this.state.showAddLoadContainer ? 'Wróć' : 'Dodaj ładunek'}
                </button>
            </div>
        );
    }
}



export default NewLoadContainer