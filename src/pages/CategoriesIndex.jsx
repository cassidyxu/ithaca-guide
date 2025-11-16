import { Link } from "react-router-dom";
import { categories } from "../data/categories";

function CategoriesIndex() {
  return (
    <section className="page">
      <h1>All Categories</h1>
      <p className="page-intro">
        Pick a category that matches your energy: budget, time, weather, or
        social vibe.
      </p>

      <div className="card-grid">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.slug}`}
            className="category-card"
          >
            <h2>{cat.name}</h2>
            <p>{cat.tagline}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriesIndex;
