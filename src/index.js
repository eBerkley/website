import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import App from "./App";
import AllArticles from "./routes/AllArticles";
import Article from "./routes/Article";

// currently, Article is set to direct to articles/fakeArticle1 in situations that would cause no article to be displayed.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<AllArticles />}>
          <Route index element={<Article />} />
          <Route path=":articleName" element={<Article />} />
        </Route>

        <Route path="*" element={<p>404</p>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
