import "./search-box.styles.css"

interface ISearchBoxProps {
    // bên trong này là object
    className: string;
    // optional property
    placeholder?: string;
}

interface ISearchBoxProps {
    onChangeHandler: (a: string) => void;
}

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (a: string) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => {
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