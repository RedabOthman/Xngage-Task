import { useState, useEffect } from 'react';
import BooksCarousel from "./BookCarousel";
import '../../assets/styles/categoryCarousels.css';

type Book = {
  id: number;
  image: string;
  title: string;
  author: string;
  reviewedBy: string;
}

type Category = {
  name: string;
  books: Book[];
}

const CategoryCarousels = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categoryNames: string[] = ['nonfiction', 'fiction', 'children', 'self_improvement'];
    const fetchCategoriesData = async () => {
      const categoryData: Category[] = [];

      for (let i = 0; i < categoryNames.length; i++) {
        const categoryName = categoryNames[i];
        try {
          const response = await fetch(`/data/categories/${categoryName}.json`);
          if (!response.ok) throw new Error(`Failed to fetch ${categoryName}`);
          const data = await response.json();
          categoryData.push({
            name: categoryName,
            books: data.books || [],
          });
        } catch (error) {
          console.error(`Error fetching category "${categoryName}":`, error);
        }
      }
      setCategories(categoryData);
    };

    fetchCategoriesData();
  }, []);

  return (
    <div className="category-carousels">
      {categories.map((cat, index) => {
        const isEven = (index + 1) % 2 === 0;
        const backgroundColor = isEven ? "dark" : "light";
        const formattedTitle = cat.name
          ? cat.name.charAt(0).toUpperCase() + cat.name.slice(1).replace("_", " ")
          : "Category";

        return (
          <div
            key={cat.name}
            className={`category-section ${backgroundColor}`}
          >
            <div className="category-inner">
              <h2 className="category-title">{formattedTitle}</h2>
              <BooksCarousel books={cat.books} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCarousels;