import React from "react";

const Icon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={props.iconClass} viewBox="0 0 640 512">
            <path d={props.path}/>
        </svg>
  )
};

export default Icon;