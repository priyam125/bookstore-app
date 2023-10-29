import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loader from "../component/Loader";

const HomePage = () => {
  const [featuredBook, setFeaturedBook] = useState(null);
  const isfired = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isfired.current) {
      fetchFeaturedBook();
      isfired.current = true;
    }
  }, []);

  const fetchFeaturedBook = () => {
    setLoading(true);
    const subjects = [
      "Design",
      "Programming",
      "Finance",
      "Exercise",
      "Management",
    ];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const pageCount = 1;

    axios
      .get(
        `https://openlibrary.org/search.json?q=${randomSubject}&limit=10&page=${pageCount}`
      )
      .then((response) => {
        const books = response.data.docs;

        if (books.length > 0) {
          const randomBook = books[Math.floor(Math.random() * books.length)];
          console.log(randomBook);
          setFeaturedBook(randomBook);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured book:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Featured Book</h2>
      {featuredBook && (
        <div className="flex gap-4">
          <div className="w-1/4">
            <img
              src={
                featuredBook.cover_i
                  ? `https://covers.openlibrary.org/b/id/${featuredBook.cover_i}-L.jpg`
                  : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
              }
              alt="Featured Book Cover"
              className="w-full h-auto"
            />
          </div>
          <div className="w-3/4">
            <h3 className="text-xl font-semibold">{featuredBook.title}</h3>
            <p>Author: {featuredBook.author_name}</p>
            {/* You can display additional book information here */}
          </div>
        </div>
      )}
      <Loader state={loading} />
    </div>
  );
};

export default HomePage;
