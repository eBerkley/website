import { NavLink } from "react-router-dom";

// parent element AllArticles renders outlet
export default function ArticlesSection({ articles }) {
  const setClassName = ({ isActive }) => {
    if (isActive) {
      return "ArticleNav__ArticleName ArticleNav__ArticleName--isActive";
    } else {
      return "ArticleNav__ArticleName";
    }
  };

  return (
    <nav className="ArticleNav">
      <h3>Articles</h3>
      {articles.map((el) => (
        <NavLink
          to={`/articles/${el.title}`}
          className={setClassName}
          key={el.title}
        >
          {el.title}
        </NavLink>
      ))}
    </nav>
  );
}
