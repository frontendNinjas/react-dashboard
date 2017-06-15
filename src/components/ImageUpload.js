import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  imgPreviewDiv:{
    top:10,
    position: 'relative',
  },
    uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }
};

class ImageUpload extends React.Component{	

 constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render(){
  	
  	let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={styles.imgPreview} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="extraSpaceImageBox">Please select an Image for Preview</div>);
    }

    return (
      <div>
	    <RaisedButton
	      label="Choose an Image"
	      labelPosition="before"
	      secondary={true}
	      containerElement="label"
	    >
	      <input className="fileInput" style={styles.uploadInput} type="file" onChange={(e)=>this.handleImageChange(e)} />
	    </RaisedButton>
          <RaisedButton label="Upload" type="submit" onClick={(e)=>this.handleSubmit(e)} />
       
        <div style={styles.imgPreviewDiv}>
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload