import React from "react"
import "../styles/skillbar.scss";

const SkillBar = (props) => {
    return (
        <div className="back-bar">
            <div style={{width: `${props.percentage}%`}} className="front-bar"></div>
        </div>
  )
};

export default SkillBar;