import ThemeButton from "./ThemeButton";

const ResponsiveNavContent = (props) => {
  if (props.display) {
    return (
      <>
        <ThemeButton />
        <button>this will display other stuff in the future</button>
      </>
    );
  }

  return (
    <div className="ResponsiveNavContent--Hidden">
      <ThemeButton />
      <button>this will display other stuff in the future</button>
    </div>
  );
};

export default ResponsiveNavContent;
