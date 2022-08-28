import {Component} from "react";
import "./App.css"

class App extends Component {

    // always first
    constructor(props) {
        super(props);
        this.state = {
            monsters: []
        }
        console.log("1")
    }

    // 3rd
    componentDidMount() {
        console.log("3")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response =>
                response.json()
            )
            .then((users) => this.setState(() => {
                return {
                    monsters: users
                }
            }, () => {
                console.log(this.state)
            }))
    }

    // 2nd
    render() {
        console.log("2")
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster) => {
                        return (
                            <div key={monster.id}>
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
