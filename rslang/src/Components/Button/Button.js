import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.asideToggle} type="button" className={"btn btn-primary"}>
            {props.title}
        </button>
    )
}

export default Button