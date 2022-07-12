import { useEffect } from "react";

export default function useSideNavResponder(
  device,
  sideNavExpanded,
  ref,
  setSideNavExpanded
) {
  useEffect(() => {
    // collapses sidenav
    const escListener = (e) => {
      if (e.code === "Escape") {
        setSideNavExpanded(false);
      }
    };

    if (sideNavExpanded) {
      ref.current.focus(); // allows esc to close sidebar and snaps tab navigation to sidebar
      if (device === "mobile") {
        document.addEventListener("keydown", escListener);
      } else {
        setSideNavExpanded(false);
        document.removeEventListener("keydown", escListener);
      }
    }
  }, [device, sideNavExpanded, setSideNavExpanded, ref]);
}
