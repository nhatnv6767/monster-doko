import {Component} from "react";
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            name: "YungTr",
            company: "BTM",
        }
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>None {this.state.name}, I work at {this.state.company}</p>
                    <button
                        onClick={()=> {
                            this.setState({name: "Andree"})
                            console.log(this.state)
                        }}

                    >
                        Change Name
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
