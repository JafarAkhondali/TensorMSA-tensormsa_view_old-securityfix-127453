import React from 'react';

export default class ImagesConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1 className="hidden">tensor MSA main table</h1>
                    <ul className="tabHeader">
                        <li className="current"><a href="#">Meta Store</a></li>
                        <li><a href="#">Images</a></li>
                        <li><a href="#">Raw Texts</a></li>
                        <div className="btnArea">
                            <button type="button" className="img-btn save">Save</button>
                        </div>
                    </ul>   
            </section>
        )
    }
}