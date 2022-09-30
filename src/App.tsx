import "./App.css"
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {useEffect, useState} from "react";
import {getData} from "./utils/data.utils";

type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {

    const [searchField, setSearchField] = useState("")
    const [monsters, setMonsters] = useState<Monster[]>([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    console.log("rendered")

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response =>
        //         response.json()
        //     )
        //     .then((users) =>
        //         setMonsters(users)
        //     )
        const fetchUsers = async () => {
            const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
            setMonsters(users)
        }
    }, [])

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        })
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder="search monsters"
                className="monsters-search-box"
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}


// class App extends Component {
//
//     // always first
//     constructor(props) {
//         super(props);
//         this.state = {
//             monsters: [],
//             searchField: ""
//         }
//     }
//
//     // 3rd
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response =>
//                 response.json()
//             )
//             .then((users) => this.setState(() => {
//                 return {
//                     monsters: users
//                 }
//             }, () => {
//                 // console.log(this.state)
//             }))
//     }
//
//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase()
//
//         this.setState(() => {
//             return {
//                 searchField
//             }
//         })
//     }
//
//     // 2nd
//     render() {
//
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this
//         // nếu tên của monster bao gồm chuỗi tìm kiếm, thì giữ nó
//         // nếu nó không bao gồm nó, loại bỏ nó
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField)
//         })
//
//         return (
//             <div className="App">
//                 <h1 className="app-title">Monsters Rolodex</h1>
//                 <SearchBox
//                     onChangeHandler={onSearchChange}
//                     placeholder="search monsters"
//                     className="monsters-search-box"
//                 />
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         );
//     }
// }

export default App;

/*
Trường hợp này sẽ xảy ra lặp vô hạn, lý do:
Fetch đang tìm nạp từ API bên ngoài, một số giá trị cụ thể
trong trường hợp của chúng ta đó là mảng users
với mảng này, vì nó đến từ bên ngoài trình duyệt, nên nó sẽ cung cấp cho chúng ta
một mảng có bộ nhớ khác với mảng mà chúng ta đã lưu trữ
Ngay cả khi các giá trị bên trong mảng này hoàn toàn giống nhau (như ta biết thì api này
luôn trả về 10 users giống nhau mỗi khi ta gọi API)
Nhưng vì nó đến từ bên ngoài trình duyệt, nó là 1 mảng khác trong bộ nhớ
Mỗi lần check happpen (setMonster(users)) nó sẽ thấy răng mảng của user này là 1 mảng khác
trong bộ nhớ. Vì vậy, việc kiểm tra bình đẳng không thành công, có nghĩa là React nghĩ rằng
nó sẽ là 1 mảng khác. Đó là 1 mảng khác, ngay cả khi các giá trị bên trong giống nhau.
Hãy nhớ là nó lúc này không lin quan đến các giá trị trong mảng.
Đó là việc mảng đó có trỏ đến cùng 1 tham chiếu trong bộ nhớ hay không
Và mỗi khi điều này xảy ra, nó là 1 mảng khác trong bộ nhớ
* */
