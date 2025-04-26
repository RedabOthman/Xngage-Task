import { useEffect, useState } from 'react';
import '../../assets/styles/categories.css';

type Category = {
  id: number;
  image: string;
  title: string;
  description: string;
}

const BrowseTheCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories.slice(0, 8));
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <section className="categories-container" aria-labelledby="categories-heading">
      <header>
        <h2 id="categories-heading">
          <strong>Browse</strong> Our Most Popular Categories
        </h2>
      </header>
      <div className="categories-grid">
        {categories.map((category) => {
          let imagePath = "";
          try {
            imagePath = require(`../../assets${category.image}`);
          } catch (error) {
            imagePath = "";
            console.error("Error loading category image:", error);
          }

          return (
            <article key={category.id} className="category-card">
              <figure className="category-image">
                <img src={imagePath} alt={category.title} />
              </figure>
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BrowseTheCategories;