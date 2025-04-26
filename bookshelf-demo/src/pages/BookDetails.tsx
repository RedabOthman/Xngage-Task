import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../assets/styles/bookDetails.css';

type BookData = {
  id: number;
  title: string;
  author: string;
  reviewedBy: string,
	publishedOn: string,
  description: string;
  image: string;
}

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<BookData | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/data/books/book${id}.json`);
        if (!response.ok) throw new Error("Book not found");
        const data: BookData = await response.json();
        setBookData(data);
        window.scrollTo(0, 0);

      } catch (error) {
        setBookData(null);
      }
    };

    fetchBook();
  }, [id]);

  if (!bookData) return <div className="loading">Loading...</div>;

  let imagePath = "";
  try {
    imagePath = require(`../assets${bookData.image}`);
  } catch (error) {
    imagePath = "";
  }

  return (
    <main className="book-details-main">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>&gt;</li>
          <li>{bookData.title}</li>
        </ol>
      </nav>

      <section className="book-details">
        <header>
          <h1>Book Title: {bookData.title}</h1>
        </header>
        <figure>
          <img
            src={imagePath}
            alt={bookData.title}
            className="book-cover"
          />
          <figcaption>
            <p><strong>Author:</strong> {bookData.author}</p>
            <p><strong>Reviwed By:</strong> {bookData.reviewedBy}</p>
            <p><strong>Published On:</strong> {bookData.publishedOn}</p>
            <p><strong>Description:</strong> {bookData.description}</p>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default BookDetails;