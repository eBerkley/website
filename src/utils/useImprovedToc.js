import useFirstVisibleSection from "./useFirstVisibleSection";
import { useState } from "react";

export default function useImprovedToc() {
  const [viewedSection, setViewedSection] = useState();

  const sections = Array.from(document.querySelectorAll("main > section"));

  useFirstVisibleSection(sections, (section) => {
    section && setViewedSection(section);
  });
  return viewedSection;
}
