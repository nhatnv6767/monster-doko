import "./search-box.styles.css"

interface ISearchBoxProps extends IChangeHandlerProps {
    // bên trong này là object
    className: string;
    // optional property
    placeholder?: string;
}

interface IChangeHandlerProps {
    onChangeHandler: (a: string) => void;
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