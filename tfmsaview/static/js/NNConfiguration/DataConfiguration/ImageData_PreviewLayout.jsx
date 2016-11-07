import React from 'react'

export default class ImagePreviewLayout extends React.Component {
	constructor(props) {
        super(props)
    }

    render() {
    	if (!this.props.image_paths) {return null;}
    	
    	
    	let rows2 = [];
    	let i=0;
    	let key_set = Object.keys(this.props.image_paths)
		for(let key of key_set){
			let image_paths_info = this.props.image_paths[key];
			let rows = [];
			for(let path_info of image_paths_info){
				let path = "http://52.78.19.96:8989" + path_info;
				rows.push(<img src= {path} key={i++} width='100' height='100' />)
			}
			rows2.push(<dl className='layer-box'><dt><span className='circle-blue'>{key}</span></dt>{rows}</dl>);
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