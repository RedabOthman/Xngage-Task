import '../assets/styles/App.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrowseTheCategories from "../components/BrowseTheCategories/BrowseTheCategories";
import CategoryCarousels from "../components/CategoryCarousels/CategoryCarousels";

function Home() {
  return (
    <main>
      <div className="container">
        <section aria-labelledby="categories-heading">
          <BrowseTheCategories />
        </section>

        <section aria-labelledby="category-carousels">
          <h2 id="category-carousels" className="sr-only">Category - Books Carousels</h2>
          <CategoryCarousels />
        </section>
      </div>
    </main>
  );
}

export default Home;