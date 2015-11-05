import React from 'react';

class Cell extends React.Component {
    render() {
        let status = this.props.live ? 'live' : '';
        return(
                <div className={`cell ${status}`}></div>
        )
    }
}

Cell.propTypes = {
    live: React.PropTypes.bool.isRequired
}

export default Cell;
