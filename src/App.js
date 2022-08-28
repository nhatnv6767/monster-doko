import {Component} from "react";
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            name: "YungTr"
        }
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>None {this.state.name}</p>
                    <button>Change Name</button>
                </header>
            </div>
        );
    }
}

export default App;
