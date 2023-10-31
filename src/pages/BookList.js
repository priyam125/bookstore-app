import React, { useEffect, useState } from "react";
import axios from "axios";

import Book from "../component/Book";
import Search from "../component/Search";
import Loader from "../component/Loader";

export default function BookList() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const searchQuery = (e) => {
    setPageCount(1);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [pageCount]);

  const fetchData = () => {
    setLoading(true);
    var q = query ? query : "programming";
    axios
      .get(
        `https://openlibrary.org/search.json?q=${q}&limit=10&page=${pageCount}`
      )
      .then((response) => {
        const data = response.data;
        data.numFound ? setData(data) : setData(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  const prevClick = () => {
    setPageCount((prev) => prev - 1);
  };

  const nextClick = () => {
    setPageCount((prev) => prev + 1);
  };

  return (
    <div className="main p-4">
      <Search
        placeholder="Search by name or author"
        value={query}
        setValue={setQuery}
        searchClick={searchQuery}
        focus={true}
      />
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
        {data &&
          data.docs.map((d, i) => {
            return (
              <Book
                title={d.title}
                author={d.author_name && d.author_name.join(", ")}
                coverId={d.cover_i}
                genre={d.genre}
                description={d.description}
                id={d.key.substring(7)}
                price={d.want_to_read_count}
              />
            );
          })}
      </div>
      {data && (
        <div className="flex justify-center mt-20">
          <button
            type="button"
            className="m-2 px-3 py-2 bg-blue-500 text-white border-none cursor-pointer rounded-md"
            onClick={prevClick}
            disabled={pageCount <= 1}
          >
            Prev
          </button>
          <button
            type="button"
            className="m-2 px-3 py-2 bg-blue-500 text-white border-none cursor-pointer rounded-md"
            onClick={nextClick}
            disabled={pageCount >= data.numFound / 10}
          >
            Next
          </button>
        </div>
      )}
      <Loader state={loading} />
    </div>
  );
}
