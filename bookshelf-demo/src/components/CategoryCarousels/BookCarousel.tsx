import Slider from "react-slick";
import { Link } from "react-router-dom";

type Book = {
  id: number;
  image: string;
  title: string;
  author: string;
  reviewedBy: string;
}

type BooksCarouselProps = {
  books: Book[];
}

const BooksCarousel = ({ books } : BooksCarouselProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="books-carousel">
      <Slider {...settings} className="Slider">
        {books.map((book) => {
          let bookImage = "";
          try {
            bookImage = require(`../../assets${book.image}`);
          } catch (err) {
            console.warn(`Image not found: ${book.image}`);
            bookImage = "";
          }

          return (
            <Link to={`/book/${book.id}`} key={book.id} className="book-card">
              <img
                src={bookImage}
                alt={book.title}
                className="book-image"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <p className="book-reviewed">Reviewed by {book.reviewedBy}</p>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default BooksCarousel;