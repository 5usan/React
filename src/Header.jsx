import React from "react";

const Header = (props) => {
    return (
        <div className = "display">
            {props.title}
            This is header
        </div>
    )
}

export default Header;