import React from 'react';

function Button(props){
    return(
        <div className='mt-3 mb-3 '>
            <button
                type={props.type}
                name={props.name}
                onClick={()=>props.handleOnClick('O botão '+ props.name+' foi clicado')}
                className={`btn btn-${props.bsClass}`}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button;