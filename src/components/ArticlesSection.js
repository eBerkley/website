import { NavLink } from "react-router-dom";

// parent element AllArticles renders outlet
export default function ArticlesSection({ articles }) {

  const setClassName = ({ isActive }) => {
    if (isActive) {
      return "Section__ArticleName Section__ArticleName--isActive";
    } else {
      return "Section__ArticleName";
    }
  };

  return (
    <section>
      <h3>Articles</h3>
      {articles.map((el) => (
        <NavLink to={`/articles/${el.title}`} className={setClassName} key={el.title}>
          {el.title}
        </NavLink>
      ))}
    </section>
  );
}
