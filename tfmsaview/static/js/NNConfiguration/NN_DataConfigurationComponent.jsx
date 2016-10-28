import React from 'react';

export default class NN_DataConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                    Net Configuration
                    <form action="/api/v1/type/wdnn/predict/nn0000014/"
                        method="post">
                        File:
                        <input type="file"
                            name="file"
                            id="id_file" />
                        <input type="submit" value="UPLOAD" />
                    </form>
            </section>
        )
    }
}