import React from 'react';
import './CheckBox.scss';

class CheckBox extends React.Component{
  render(){
    const {text, isChecked, onChange} = this.props
    return(
      <div className="CheckBox">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" defaultChecked={isChecked} onChange={onChange} />{text}
        </label>
      </div>
    )
  }
}
export default CheckBox;