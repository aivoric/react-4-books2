import { useState } from "react";

function BookCreate({ onCreate }) {
    const [bookName, setBookName] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onCreate(bookName);
        setBookName('');
    }

    const updateBookName = (e) => {
        setBookName(e.target.value);
    }

    return (
        <div className="book-create">
            <h3> Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input className="input" value={bookName} onChange={updateBookName}></input>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;