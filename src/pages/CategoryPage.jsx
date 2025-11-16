import { useParams, Link } from "react-router-dom";
import { getCategoryBySlug } from "../data/categories";
import CategoryTable from "../components/CategoryTable.jsx";

function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <section className="page">
        <h1>Category not found</h1>
        <p>
          We couldn&apos;t find that category.{" "}
          <Link to="/categories">Back to categories</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="page-header">
        <h1>{category.name}</h1>
        <p className="page-tagline">{category.tagline}</p>
      </div>

      <p className="page-intro">{category.description}</p>

      <CategoryTable columns={category.columns} rows={category.rows} />

      <p className="page-footer-link">
        <Link to="/categories">← Back to all categories</Link>
      </p>
    </section>
  );
}

export default CategoryPage;
