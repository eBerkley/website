import { createContext, useContext } from "react";

const AppContext = createContext({
  setSideNavData: () => {},
  device: "",
});

export { AppContext };

export default function useView() {
  return useContext(AppContext);
}
