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
          things. However, I obviously do not really have a way to put those
          here.
        </p>
        <p className="Footer__Info">
          Regardless, some sort of footer is still necessary, as without it the
          table of contents cant properly track sections near the bottom of the
          artile due to the section above it never passing the top half of the
          viewport, which is the cutoff for how the current section is detected.
        </p>
        <p className="Footer__Info">
          If it cant track the section(s) near the bottom then the effect is
          kindof lost, which is unfortunate because I think it looks cool.
        </p>
      </div>
    </footer>
  );
}
