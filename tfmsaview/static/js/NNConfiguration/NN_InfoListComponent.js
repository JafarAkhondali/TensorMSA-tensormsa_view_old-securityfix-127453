import React from 'react';

export default class NN_InfoListComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.addNewNNInfo);
    }

    NNButtonText(i) {
        switch (i) {
            case 0:
                return "Search NN";
            case 1:
                return "Add New NN";
            case 2:
                return "Modify New NN";
            case 3:
                return "Delete Selected NN";
            default:
                return "";
        }
    }
    NNClickEvent(i){
        switch (i) {
            case 0:
                this.props.addNewNNInfo(); //call parent function to render
            case 1:
                return "";
            case 2:
                return "";
            case 3:
                return "";
            default:
                return "";
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.NNClickEvent(0)}>
                    {this.NNButtonText(0)}
                </button>
                <button onClick={this.NNClickEvent(1)}>
                    {this.NNButtonText(1)}
                </button>
                <button onClick={this.NNClickEvent(2)}>
                    {this.NNButtonText(2)}
                </button>
                <button onClick={this.NNClickEvent(3)}>
                    {this.NNButtonText(3)}
                </button>
            </div>
        )
    }
}