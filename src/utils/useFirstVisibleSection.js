import { useState, useEffect } from "react";

export default function useFirstVisibleSection(sections, callback) {
  const [firstVisibleSection, setFirstVisibleSection] = useState();

  useEffect(() => {
    callback(firstVisibleSection);
  }, [firstVisibleSection, callback]);

  useEffect(() => {
    const currentVisibility = new Map();

    const setVisibility = (entries) => {
      entries.forEach((element) => {
        currentVisibility.set(element.target, element.isIntersecting);
      });
    };

    const filterFirstVisible = () => {
      const allVisibleSections = Array.from(currentVisibility)
        .filter(([key, value]) => value === true)
        .map(([key]) => key);

      setFirstVisibleSection(allVisibleSections[0] || null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibility(entries);
        filterFirstVisible();
      },
      {
        root: document.querySelector(".Subroot"),
        rootMargin: "-50% 0px 0px 0px",
        threshold: [0.0, 1.0], // callback occurs when element fully enters view and leaves view
      }
    );
    sections.forEach((section) => {
      currentVisibility.set(section, false);
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections, callback]);
}
