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

type CanadianAddress = {
    street: string;
    province: string;
}

type USAddress = {
    street: string;
    state: string;
}

type NorthAmericanAddress = CanadianAddress | USAddress;

const Address: NorthAmericanAddress = {
    street: "some value",
    province: "some value2"
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


/*
 interface có kế thừa (extends) và overload (nghĩa là viết bao nhiêu như ví dụ trên kia là
 2 lần đều không thành vấn đề, nó sẽ tự động gộp lại)
* */