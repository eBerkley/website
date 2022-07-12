import { useState, useEffect } from "react";

export default function useFirstVisibleSection(sections, callback) {
  const [firstVisibleSection, setFirstVisibleSection] = useState();

  useEffect(() => {
    // do something when first section changes
    callback(firstVisibleSection);
  }, [firstVisibleSection, callback]);

  useEffect(() => {
    const currentVisibility = new Map();

    const setVisibility = (entries) => {
      entries.forEach((element) => {
        currentVisibility.set(element.target, element.isIntersecting); // {section: is intersecting}
      });
    };

    const filterFirstVisible = () => {
      // get first key with a value of true
      const allVisibleSections = Array.from(currentVisibility)
        .filter(([key, value]) => value === true)
        .map(([key]) => key);

      setFirstVisibleSection(allVisibleSections[0] || null);
    };

    const observer = new IntersectionObserver( // takes in callback called each time section passes one of the threshold values [does not intersect, fully contained] and when it starts observing.
      (entries) => {
        setVisibility(entries);
        filterFirstVisible();
      },
      {
        root: document.querySelector(".Subroot"), // the scrollable part of the document
        rootMargin: "-50% 0px 0px 0px", // only listens to the bottom half of .Subroot (which is equivelent to the bottom half of the viewport)
        threshold: [0.0, 1.0], // [no intersection, fully contained]
      }
    );
    sections.forEach((section) => {
      currentVisibility.set(section, false); // initialize map
      observer.observe(section); // start observing each section
    });

    return () => {
      observer.disconnect();
    };
  }, [sections, callback]);
}
