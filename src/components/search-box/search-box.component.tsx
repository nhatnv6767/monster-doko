import "./search-box.styles.css"

interface ISearchBoxProps {
    // bên trong này là object
    className: string;
    // optional property
    placeholder?: string

}

const SearchBox = ({className, placeholder, onChangeHandler}: ISearchBoxProps) => {
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