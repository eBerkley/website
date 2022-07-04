import { Link } from "react-router-dom";

// parent element AllArticles renders outlet
export default function ArticlesSection({ articles }) {

  return (
    <section>
      <h3>Articles</h3>
      {articles.map((el) => (
        <Link to={el.title} className="Section__ArticleName" key={el.title}>
          {el.title}
        </Link>
      ))}
    </section>
  );
}
