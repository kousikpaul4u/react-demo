import React from 'react';

function TextField(props) {

    function handleOnChange(e) {
        props.onChange(e.target.value);
    }
    return (
        <div>
            <input
                id={props.id}
                type={props.type}
                onChange={(e) => handleOnChange(e)}
                value={props.value}
                className="input-field"
                placeholder={props.placeholder}
            />
        </div>

    )
}

export default TextField;