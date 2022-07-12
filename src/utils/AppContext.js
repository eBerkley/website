import { createContext, useContext } from "react";

const AppContext = createContext({
  setSideNavData: () => {},
  device: "",
  theme: "",
  setTheme: () => {},
  section: "",
  articleList: [],
});

export { AppContext };

export default function useAppContext() {
  return useContext(AppContext);
}
