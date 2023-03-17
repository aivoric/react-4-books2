import { useState } from "react";

function BookEdit({ book, onSaveChanges }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveChanges(book.id, title);
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input value={title} className="input" onChange={handleChange}/>
            <button className="button is-primary">
                Save Changes
            </button>
        </form>
    )
}

export default BookEdit;