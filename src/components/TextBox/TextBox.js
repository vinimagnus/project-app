import React from 'react';

function TextBox(props){
    return(
        <div className='mb-3 mt-3'>
            <label className='form-label'>
                {props.label}
            </label>
            <input 
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onKeyPress={(e)=>props.handleOnKeyPress(e.target.value)}
                className='form-control'

            />
        </div>
    )
}

export default TextBox;