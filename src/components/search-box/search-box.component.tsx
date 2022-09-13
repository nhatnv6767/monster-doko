import {ChangeEventHandler} from "react";
import "./search-box.styles.css"

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler;
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