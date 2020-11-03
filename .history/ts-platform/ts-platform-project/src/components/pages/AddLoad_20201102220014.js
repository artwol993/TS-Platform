import React from 'react';
import '/'

function AddLoad(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className='add-load-container'>

        </div>
    );
}

class Page extends React.Component {
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

}

render() {
    return (
        <div>
            <AddLoadContainer warn={this.state.showAddLoadContainer} />
            <button onClick={this.handleToggleClick}>
                {this.state.showAddLoadContainer ? 'Wróć' : 'Dodaj ładunek'}
            </button>
        </div>
    );
}


// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );

export default AddLoad