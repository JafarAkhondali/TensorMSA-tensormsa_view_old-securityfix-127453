import React from 'react'
import FileUpload from 'react-fileupload';

export default class ImagePreviewLayout extends React.Component {
	constructor(props) {
        super(props)
        this.state={
        		imageArea : null,
        	    fileUploadSettings : {
                    baseUrl : null,
                    param:
                    {
                        fid:0
                    },
                    multiple:true,
                    chooseAndUpload:true,
                    doUpload : function(files,mill){
                        console.log('you just uploaded',typeof files == 'string' ? files : files[0].name)
                    },
                    uploading : function(progress){
                        this.setState({rate : progress.loaded/progress.total})
                        console.log('loading...',progress.loaded/progress.total+'%')
                    },
                    uploadSuccess : function(resp){
                        console.log('upload success..!')
                    },
                    uploadError : function(err){
                        alert(err.message)
                    },
                    uploadFail : function(resp){
                        alert(resp)
                    }
                }
        }
    }

    // return ftp upload rest api url
    setFormUrl(label){
        let testIp = "http://52.78.19.96:8989"  // will be deleted on jango server
        let uploadUrl = "/api/v1/type/imagefile/base/" + this.props.imageDataSet.databaseName + "/table/" + 
        this.props.imageDataSet.tableName + "/label/" + label +"/data/"+ this.props.imageDataSet.networkId +"/"
        testIp = testIp + uploadUrl
        this.setState({formAction: testIp})

        let fileUploadSettings = this.state.fileUploadSettings
        fileUploadSettings.baseUrl = testIp

        this.setState({fileUploadSettings:fileUploadSettings})
    }

    render() {
    	if (!this.props.imageDataSet.imagePaths) {return null;}
    	let rows2 = [];
    	let fileUploadOptions = this.state.fileUploadSettings;
    	let i=0, j=0;
    	let key_set = Object.keys(this.props.imageDataSet.imagePaths);

		for(let key of key_set)
		{
			let imagePaths_info = this.props.imageDataSet.imagePaths[key];
			let rows = [];
			let clickEvent = this.setFormUrl.bind(this, key)
			for(let path_info of imagePaths_info){
				let path = "http://52.78.19.96:8989" + path_info;
				rows.push(<div><img src= {path} key={i++} width='100' height='100' /></div>)
			}
			rows2.push(<dl className='img-box'>
						   <dt>
						   		<span className='circle-blue'>{key}</span>
					       		<FileUpload options={fileUploadOptions}>
					           		<button type="button" className="upload" onClick={clickEvent} ref="chooseAndUpload">upload</button>
					       		</FileUpload>
						   </dt>
						   <dd>
					   			{rows}
					   	   </dd>						
					   </dl>);
		}
    	

        return (   
					<main>
						<article>
						{rows2}
						</article>
					</main>
        )
    }
}