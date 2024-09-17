const STORAGE_KEY = 'books';

export const getStoredBooks = () => {
  const storedBooks = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return storedBooks ? storedBooks : [];
};

export const setStoredBooks = (books) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};