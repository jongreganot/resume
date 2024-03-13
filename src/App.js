import React from "react"
import Home from './pages/Home';
import { setNavbarEvents } from "./behavior/navigation";

class App extends React.Component {
    constructor(props) {
       super(props);
    }

    componentDidMount() {
      setNavbarEvents();
    }

    render () {
        return (
          <Home />
        )
    };
}

export default App;
