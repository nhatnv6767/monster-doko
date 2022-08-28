import {Component} from "react";
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: [
                {
                    name: "Linda"
                },
                {
                    name: "Frank"
                },
                {
                    name: "Jacky"
                }
            ]

        }
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.monster1.name}</h1>
                <h1>{this.state.monster2.name}</h1>
                <h1>{this.state.monster3.name}</h1>
            </div>
        );
    }
}

export default App;
