import React from 'react';

import { onAddPost } from './request';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let img = this.refs.fileInput.files[0];
    let text = this.refs.descr.value;
    let formData = new FormData();
    formData.append('image', img);
    formData.append('text', text);
    formData.append('token', localStorage.jwtToken);

    onAddPost(formData)
      .then(res => {
        console.log(res);
      })
  }

  handleChangeInput(event) {
    let file = event.target.files[0];
    let img = document.getElementById('image');
    let reader = new FileReader();
    reader.onload = e => img.src = e.target.result;
    reader.readAsDataURL(file);
    this.setState({image: true})
  }

  render() {
    return (
      <div className="add-post-form">
        <div className="post">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label className={this.state.image ? "" : "noshow-i"}>
              <span className={this.state.image ? "" : "add-text"}>Add image</span>
              <img className={this.state.image ? "images show" : "images"} id="image" src="" alt="Alt" />
              <input
                type="file"
                ref="fileInput"
                accept='image/png, image/jpeg'
                onChange={this.handleChangeInput.bind(this)}
              />
            </label>
            <input ref="descr" type="text" />
            <input type="submit" />
          </form>

        </div>
      </div>
    )
  }
}

export default AddPost;
