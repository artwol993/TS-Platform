import React, { useState } from 'react';
import './AddLoad.css';
import NewLoad from './NewLoad';




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
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);