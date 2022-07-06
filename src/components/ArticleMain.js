// main
export default function ArticleMain({ article }) {
  return (
    <main>
      <h1 className="Main__Title">{article.title}</h1>
      {article.content.map((el, i) => (
        <section aria-labelledby={el.section} key={el.section}>
          <h2 className="Main__Section" id={el.section}>
            {el.section}
          </h2>
          <p className="Main__P">{el.content}</p>
        </section>
      ))}
    </main>
  );
}
