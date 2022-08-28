import {Component} from "react";
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => console.log(response))
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster, index) => {
                        return (
                            <div key={index}>
                                <h1>{monster.name}!!!</h1>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
