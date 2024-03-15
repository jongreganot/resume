import React from "react"
import { useNavigate } from "react-router";
import { enter, leave } from "../behaviors/animation";

const DelayLink = (props) => {
    const navigate = useNavigate();

    async function goToPage() {
      if (props.currentLink === props.linkName) return;
      
      props.navigateClick(props.linkName);
      await leave();

      navigate(`/resume/${props.linkName.toLowerCase().replace(" ", "-")}`);
    }

    return (
        <div onClick={goToPage} className={`nav-item resume-link text-decoration-none px-md-0 pe-md-5 px-3 text-center text-uppercase cursor-pointer ${props.currentLink === props.linkName ? "active": ""}`}>{props.linkName}</div>
  )
};

export default DelayLink;