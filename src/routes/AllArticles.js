import { Outlet } from "react-router-dom";

import ArticlesSection from "../components/ArticlesSection";
import fakeArticles from "../utils/fakeArticles";

export default function AllArticles() {
  return (
    <div className="BelowNav">
      <ArticlesSection articles={fakeArticles} />
      <Outlet />
    </div>
  );
}
