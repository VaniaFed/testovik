import axios from "axios";

// comment out to use local placeholder server
// const API = 'http://localhost:3001';

// comment to use local placeholder server
const API = "https://on-my-bookshelf-server.vercel.app";

export const quizAPI = {
  //   async fetchById(id: string) {
  //     const response = await axios.get<Book>(`${API}/books/${id}`);
  //     return response.data;
  //   },
  //   async fetchAll() {
  //     const response = await axios.get<Book[]>(`${API}/books/`);
  //     return response.data;
  //   },
  //   async create(book: Book) {
  //     const response = await axios.post<Book>(`${API}/books/`, book);
  //     return response.data;
  //   },
  //   async update(book: Book) {
  //     const response = await axios.patch<Book>(`${API}/books/${book.id}`, book);
  //     return response.data;
  //   },
  //   async delete(bookId: string) {
  //     const response = await axios.delete<Book>(`${API}/books/${bookId}`);
  //     return response.data;
  //   },
};
