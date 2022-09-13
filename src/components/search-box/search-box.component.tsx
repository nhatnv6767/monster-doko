import "./search-box.styles.css"

const func: (s: string, b: number, c: boolean) => void = (a, b, c) => {

}

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
        <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
}

export default SearchBox;