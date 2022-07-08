import { createContext, useContext, useState, useEffect, useRef } from 'react';
import useWindowWidth from './useWindowWidth';

const CurrentView = createContext({clientDevice: "", sideNavExpanded: false, expand: () => {}, collapse: () => {}})

export function ResponseProvider({ children }){
  const clientDevice = useWindowWidth()
  const [sideNavExpanded, setSideNavExpanded] = useState(false)
  const subRoot = useRef()

  const expand = () => {
    setSideNavExpanded(true);
  }

  const collapse = () => {
    setSideNavExpanded(false);
  }

  useEffect(() => {
    if (clientDevice !== "mobile") {
      setSideNavExpanded(false)
    }
  }, [clientDevice])

  useEffect(() => {
    if (sideNavExpanded) {
      subRoot.current.className = "Subroot Subroot--Expanded";
    } else {
      subRoot.current.className = "Subroot";
    }
  }, [sideNavExpanded])


  return (
    <CurrentView.Provider value={{clientDevice, sideNavExpanded, expand, collapse}}>
      <div ref={subRoot} id="subroot">
        { children }
      </div>
    </CurrentView.Provider>
  )
}

export default function useResponse() {
  return useContext(CurrentView)
}