import {Component} from "react";
import "./App.css"
import CardList from "./components/card-list/card-list.component";

class App extends Component {

    // always first
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ""
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
                // console.log(this.state)
            }))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase()

        this.setState(() => {
            return {
                searchField
            }
        })
    }

    // 2nd
    render() {

        const {monsters, searchField} = this.state;
        const {onSearchChange} = this
        // nếu tên của monster bao gồm chuỗi tìm kiếm, thì giữ nó
        // nếu nó không bao gồm nó, loại bỏ nó
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        })

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={onSearchChange}
                />
                {/*{*/}
                {/*    filteredMonsters.map((monster) => {*/}
                {/*        return (*/}
                {/*            <div key={monster.id}>*/}
                {/*                <h1>{monster.name}</h1>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
