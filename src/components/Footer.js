export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__TopDiv">
        <p className="Footer__MyName">
          Website made in its entirety by Ethan Berkley.
        </p>
      </div>
      <div className="Footer__BottomDiv">
        <p className="Footer__Info">
          This is the part of the webpage where some extra info about copyright
          stuff would go, or maybe navigation links to some product help type
          things.
        </p>
        <p className="Footer__Info">
          Perhaps more importantly, it allows the API that the table of contents
          uses to properly track sections near the bottom of each article, as it
          relies on the top of the section to reach the top half of the viewable
          area of the page.
        </p>
        <p className="Footer__Info">
          So even though there are no navigation links or copyright information
          to be displayed, this footer is still necessary to use in order to
          preserve the synchronous scrolling effect the table of contents has.
        </p>
      </div>
    </footer>
  );
}
