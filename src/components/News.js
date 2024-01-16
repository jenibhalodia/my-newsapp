import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function News({ category }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pagesize = 6;
    const [totalDocs, setTotalDocs] = useState(0);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=d956132fbdc94246a8e52a3e52283355&pageSize=${pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalDocs(parsedData.totalResults);
        setLoading(false);
    };

    useEffect(() => {
        updateNews();
    }, [category]);

    const handlePrevClick = async () => {
        setPage(page - 1);
        updateNews();
    };

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews();
    };

    return (
        <div className="container my-3 mt-5">
            <h1 className="text-center">
                {category[0].toUpperCase() + category.substring(1)}-Top
                Headlines
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="row">
                    {articles && articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={
                                            element.title ? element.title : ""
                                        }
                                        description={
                                            element.description? element.description: ""
                                        }
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        // source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                </div>
            )}

            <div className="container d-flex justify-content-between">
                <button
                    disabled={page <= 1 || loading}
                    type="button"
                    className="btn btn-primary"
                    onClick={handlePrevClick}
                >
                    &larr; Previous
                </button>
                <button
                    disabled={
                        (pagesize * page < totalDocs ? false : true) || loading
                    }
                    type="button"
                    className="btn btn-primary"
                    onClick={handleNextClick}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
}
