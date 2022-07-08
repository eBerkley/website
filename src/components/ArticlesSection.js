import { NavLink } from "react-router-dom";

// parent element AllArticles renders outlet
export default function ArticlesSection(props) {
  const setClassName = ({ isActive }) => {
    if (isActive) {
      return "SideNav__ArticleName SideNav__ArticleName--isActive";
    } else {
      return "SideNav__ArticleName";
    }
  };

  return (
    <nav className="SideNav">
      <h3>Articles</h3>
      {props.articles.map((el) => (
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
