import React, {Component} from 'react';
import './RadioForm.css';

const RadioForm = ({title, name, onChange}) => {

	return (
    <div className="radioForm">
			<div className="radioinputBox"><p className="radioinputTitle">{title}</p></div>
			<div className="radioinputRadioBox">
	    <input type="radio" name={name} value="official" onChange={onChange}/><div className="radioinputRadioTextBox">Official Source</div>
	    </div>
	    <div class="radioinputRadioBox">
  	  <input type="radio" name={name} value="individual" onChange={onChange}/><div className="radioinputRadioTextBox">Individual Source</div>
  	  </div>
    </div>
  );
};

export default RadioForm;