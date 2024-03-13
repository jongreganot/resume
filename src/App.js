import React from "react"
import Layout from './pages/Layout';
import { setNavbarEvents } from "./behaviors/navigation";

class App extends React.Component {
    componentDidMount() {
      setNavbarEvents();
    }

    render () {
        return (
          <Layout/>
        )
    };
}

export default App;
