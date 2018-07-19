import React, {Component} from "react";
import uploadcare from "uploadcare-widget";
import { log } from "util";

class Uploader extends Component {

  componentDidMount() {
    const {id, onChange} = this.props;
    const widget = uploadcare.Widget(`#${id}`);

    if (onChange && typeof onChange === 'function') {
      widget.onChange((file) => {
        if (file) {
            console.log("didMount is here")
            console.log(file.files)
          file
            .done(info => onChange(info.cdnUrl))
            .fail(() => onChange(null))
        }
        else {
          onChange(null)
        }
      })
    }
  }

  render() {
    const {id, name, ...attrs} = this.props;

    return (<input type="hidden" id={id} name={name} {...attrs} />)
  }
}

export default Uploader;