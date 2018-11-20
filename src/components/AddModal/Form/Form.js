import React, {Component} from 'react';
import './Form.css';

const Form = ({placeholder, title, name, value, onChange}) => {

	return (
    <div className="modalForm">
			<div class="modalinputBox"><p class="modalinputTitle">{title}</p></div>
      <input
        type="text"
        size="4"
      	placeholder={placeholder} 
      	value={value} 
      	onChange={onChange}
      	name={name}
        white-space="pre-line"
    	/>
    </div>
  );
};

export default Form;