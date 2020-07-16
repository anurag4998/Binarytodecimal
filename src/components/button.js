import React from 'react';


class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.function} className="button">CONVERT</button>

        )
    }

}


export default Button;