import React, {Component} from 'react';
import './RadioForm.css';

const RadioForm = ({title, name, onChange}) => {

	return (
    <div className="radioForm">
			<div class="radioinputBox"><p class="radioinputTitle">{title}</p></div>
			<div class="radioinputRadioBox">
	    <input type="radio" name={name} value="official" onChange={onChange}/><div class="radioinputRadioTextBox">Official Source</div>
	    </div>
	    <div class="radioinputRadioBox">
  	  <input type="radio" name={name} value="individual" onChange={onChange}/><div class="radioinputRadioTextBox">Individual Source</div>
  	  </div>
    </div>
  );
};

export default RadioForm;