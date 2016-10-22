import React from 'react';

export default class NN_InfoListComponent extends React.Component {
    constructor(props) {
        super(props);
    /*    this.state = {
            step: null
        };*/
    }

    NNButtonText(i) {
        switch (i) {
            case 0:
                return "add New";
            case 1:
                return "Delete";
            case 2:
                return "Modify";
            case 3:
                return "Detail";
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
            <div className="tblBtnArea">
                <button type="button" onClick={() => this.NNClickEvent(0)}>
                    {this.NNButtonText(0)}
                </button>
                <button type="button" onClick={this.NNClickEvent(1)}>
                    {this.NNButtonText(1)}
                </button>
                <button type="button" onClick={this.NNClickEvent(2)}>
                    {this.NNButtonText(2)}
                </button>
                <button type="button" onClick={this.NNClickEvent(3)}>
                    {this.NNButtonText(3)}
                </button>
            </div>
        )
    }
}