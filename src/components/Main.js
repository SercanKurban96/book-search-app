import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBfXPy8E4Dqf-S9CgA7ZTlVNfoJ3dVKUuc" +
            "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Okumak, sadece okumak. <br />
            Okuyan insan, dünyanın aklına yaslar sırtını.
          </h1>
        </div>
        <div className="row2">
          <h2>Aradığınız kitabı bulun.</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Aranacak kitabı giriniz..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src="./images/book3.jpg" alt="" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
