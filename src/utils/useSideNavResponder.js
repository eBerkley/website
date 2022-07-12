import { useEffect, useCallback } from "react";

export default function useSideNavResponder(
  device,
  sideNavExpanded,
  ref,
  setSideNavExpanded
) {
  const escListener = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setSideNavExpanded(false);
      }
    },
    [setSideNavExpanded]
  );

  const clickListener = useCallback(
    (e) => {
      if (!ref.current.contains(e.target)) {
        setSideNavExpanded(false);
      }
    },
    [ref, setSideNavExpanded]
  );

  useEffect(() => {
    // collapses sidenav
    if (sideNavExpanded) {
      ref.current.focus(); // allows esc to close sidebar and snaps tab navigation to sidebar
      if (device === "mobile") {
        document.addEventListener("keydown", escListener);
        document.addEventListener("click", clickListener);
      } else {
        setSideNavExpanded(false);
      }
    } else {
      document.removeEventListener("keydown", escListener);
      document.removeEventListener("click", clickListener);
    }
  }, [
    device,
    sideNavExpanded,
    setSideNavExpanded,
    ref,
    escListener,
    clickListener,
  ]);
}
