import React from 'react';

function Button(props) {

    function onSubmit(e) {
        props.onSubmit();
    }

    return (
        <button
            id={props.id}
            name={props.name}
            className="button-field"
            onSubmit={(e) => onSubmit(e)}
            style={{ backgroundColor: props.color }}
        >
            {props.text}
        </button>
    )
}

export default Button;