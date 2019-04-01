import React from 'react';

const Button = (props) => {

    return (
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href={`#${props.buttonItem.tabName}`} role="tab">
                <div className="hidden-xs">
                    {props.buttonItem.showName}
                </div>
            </a>
        </li>

    )
};

export default Button;