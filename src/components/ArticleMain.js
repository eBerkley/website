export default function ArticleMain({ article }) {
  return (
    <main id="main">
      <h1 id="Title" className="Main__Title">
        {article.title}
      </h1>
      <p className="Main__P">{article.summary}</p>
      {article.content.map((el) => (
        <section aria-labelledby={el.section} key={el.section}>
          <h2 className="Main__Section" id={el.section}>
            <a href={`#${el.section}`} className="Main__SectionA">
              {el.title}
            </a>
          </h2>
          <div>
            {el.content.map((paragraph, i) => (
              <p className="Main__P" key={i}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
