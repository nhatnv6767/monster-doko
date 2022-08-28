import {Component} from "react";
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            name: {firstName: "YungTr", lastName: "TCM"},
            company: "BTM",
        }
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>None {this.state.name.firstName} {this.state.name.lastName},
                        I work at {this.state.company}</p>
                    <button
                        onClick={()=> {
                            this.setState({name: {firstName: "Andree", lastName: "Neaogie"}})
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
