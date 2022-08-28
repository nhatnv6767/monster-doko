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
                },
                {
                    name: "Andrei"
                }
            ]

        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster, index) => {
                        return (
                            <div key={index}>
                                <h1>{monster.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
