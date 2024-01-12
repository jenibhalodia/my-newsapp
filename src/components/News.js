import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function News() {
  const [articles, setArticles] = useState([]);
  //   const [loading, setloading] = useState(false);

  const updateNews = async () => {
   const url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d956132fbdc94246a8e52a3e52283355";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
  };

  useEffect(()=>{
    updateNews()
  },[])

  return (
    <div className="container my-3">
      <h1>Top Headlines</h1>
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
