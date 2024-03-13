import React from "react"
import { useNavigate } from "react-router";
import { enter, leave } from "../behaviors/animation";

const DelayLink = (props) => {
    const navigate = useNavigate();

    async function goToPage() {
      props.navigateClick(props.linkName);
      await leave();

      navigate(`/resume/${props.linkName.toLowerCase()}`);
    }

    return (
        <div onClick={goToPage} className={`nav-item resume-link text-decoration-none pe-5 text-uppercase cursor-pointer ${props.currentLink === props.linkName ? "active": ""}`}>{props.linkName}</div>
  )
};

export default DelayLink;