import React from 'react';
import ImagePreviewLayout from './ImageData_PreviewLayout'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'

export default class ImagesConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                image_paths : null
                };
    }

    search_btn(nnid){
        this.props.reportRepository.getPreviewImagePath(nnid).then((preview_paths) => {
            this.setState({image_paths: preview_paths['result']})
        });
    }

    render() {
        return (
            <section>
                <div className="btnArea">
                    <button type="button" onClick={() => this.search_btn("nn0000091")} className="img-btn save">Search</button>
                    <button type="button" className="img-btn save">Upload</button>
                    <button type="button" className="img-btn save">Save</button>
                </div> 
                <ImagePreviewLayout image_paths={this.state.image_paths}/>
            </section>
        )
    }
}

ImagesConfigurationComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};
