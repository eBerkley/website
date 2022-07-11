export default function ArticleMain({ article }) {
  return (
    <main>
      <h1 className="Main__Title">{article.title}</h1>
      {article.content.map((el, i) => (
        <section aria-labelledby={el.section} key={el.section}>
          <h2 className="Main__Section" id={el.section}>
            <a href={`#${el.section}`} className="Main__SectionA">
              {el.section}
            </a>
          </h2>
          <div>
            <p className="Main__P">{el.content}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
