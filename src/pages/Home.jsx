import React from "react"
import mainBg from "../images/main-background.jpg";
import "../styles/home.scss";

class Home extends React.Component {
    state = {
        mainHeight: "900px"
    }

    componentDidMount() {
        this.setState({
            mainHeight: `${window.innerHeight}px`
        })
    }

    render () {
        return (
            <div style={{height: `${this.state.mainHeight}`}} className="main-background">
                <div className="mask"></div>
            </div>
        )
    };
}

export default Home;