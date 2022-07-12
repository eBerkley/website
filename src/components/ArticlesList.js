import { NavLink } from "react-router-dom";

// parent element AllArticles renders outlet
export default function ArticlesList(props) {
  const setClassName = ({ isActive }) => {
    if (isActive) {
      return "SideNav__ArticleName SideNav__ArticleName--isActive";
    } else {
      return "SideNav__ArticleName";
    }
  };

  return (
    <>
      <h3>Articles</h3>
      {props.articles.map((el) => (
        <NavLink
          to={`/articles/${el.name}`}
          className={setClassName}
          key={el.title}
        >
          {el.title}
        </NavLink>
      ))}
    </>
  );
}
