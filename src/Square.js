import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props); //All react component's constructor must have this call
        this.state = {
            value: null,
        };
    }

    onClickHandler = () => {
        this.setState({ value: 'X' });
    };

    render() {
        return (
            <button className="square" onClick={this.onClickHandler}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;