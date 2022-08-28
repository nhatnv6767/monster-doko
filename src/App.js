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
                {
                    this.state.monsters.map((monster) => {
                        return (
                            <h1>{monster.name}</h1>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
