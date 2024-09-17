
export const addOrUpdateBook = (book, books, setBooks, editIndex, setEditIndex, setPresentBook) => {
    if (editIndex !== null) {
        const updatedBooks = [...books];
        updatedBooks[editIndex] = book;
        setBooks(updatedBooks);
        setEditIndex(null);
    } else {
        setBooks([...books, book]);
    }
    setPresentBook({ title: '', author: '', year: '', description: '' });
};

export const editBook = (index, books, setPresentBook, setEditIndex) => {
    setPresentBook(books[index]);
    setEditIndex(index);
};

export const deleteBook = (index, books, setBooks) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
};
