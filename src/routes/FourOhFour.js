import useAppContext from "../utils/AppContext";
import { useEffect } from "react";
export default function FourOhFour() {
  const { setSideNavData } = useAppContext();
  useEffect(() => {
    setSideNavData(<p>No Content to display.</p>);
  }, [setSideNavData]);

  return (
    <div className="FourOhFour">
      <p>Oops! We couldn't find that page.</p>
      <p>Click Home or Articles to return.</p>
    </div>
  );
}
