import { createContext, useContext } from "react";

const AppContext = createContext({
  setSideNavData: () => {},
  device: "",
  theme: "",
  setTheme: () => {},
  section: "",
});

export { AppContext };

export default function useView() {
  return useContext(AppContext);
}
