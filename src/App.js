import {Component} from "react";
import "./App.css"

class App extends Component {

    // always first
    constructor(props) {
        super(props);
        this.state = {
            monsters: []
        }
    }

    // 3rd
    componentDidMount() {
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
        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={(event) => {
                        console.log(event.target.value)
                    }}
                />
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
