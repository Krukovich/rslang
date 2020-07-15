import React from 'react';
import './TextInput.scss';

const TextInput = (props) => {
  const { text, defValue, onChange } = props;
  return (
    <div className="form-group row">
      <label htmlFor="inputValue" className="col-sm-3 col-form-label">{text}</label>
      <div className="col-sm-3">
        <input type="text" className="form-control" defaultValue={defValue} onChange={onChange} />
      </div>
    </div>
  )
}

export default TextInput;