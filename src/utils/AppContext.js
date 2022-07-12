import { createContext, useContext } from "react";

const AppContext = createContext({
  setSideNavData: () => {},
  device: "",
  theme: "",
  setTheme: () => {},
  section: "",
  articleList: [],
  fetching: false,
  reqFetch: () => {},
  currentArticle: {},
});

export { AppContext };

export default function useAppContext() {
  return useContext(AppContext);
}
