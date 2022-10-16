import React from "react";

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value + 1}
            </button>
        );
    }
}

export default Square;