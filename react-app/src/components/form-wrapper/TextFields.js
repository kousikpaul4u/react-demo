import React, { useState } from 'react';

function TextField(props) {

    const [value, setValue] = useState('');

    function handleOnChange(e) {
        setValue(e.target.value);
    }

    return (
        <input
            id={props.id}
            type={props.type}
            onChange={(e) => handleOnChange(e)}
            value={value}
            className="input-field"
            placeholder={props.placeholder}
        />
    )
}

export default TextField;