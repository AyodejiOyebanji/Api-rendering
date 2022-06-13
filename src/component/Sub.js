import React, { useEffect, useState } from "react";
import axios from "axios";

import play from "../Image/play.png";
import add from "../Image/ad-removebg-preview.png";
import like from "../Image/like-removebg-preview.png";
import min from "../Image/min-removebg-preview.png";

const Sub = () => {
  const [allUsers, setallUsers] = useState([]);
  const movieUrl = "https://imdb-api.com/en/API/Top250Movies/k_151nv41x";
  // const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    makeRequest();
  }, []);
  const makeRequest = () => {
    axios
      .get(movieUrl)
      .then((response) => {
        console.log(response);
        console.log(response.data.items);
        setallUsers(response.data.items);
        // setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [found, setfound] = useState("");
  const handleGetTitle = (i) => {
    // let found=   allUsers.find(val=>val.id)
    // console.log(found);
    // setfound(found)
    let found = allUsers[i];
    setfound(found);
  };
  return (
    <>
      <div className="overLay">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <h1>{found.fullTitle}</h1>
                </div>
                <div className="col-6">
                  <img src={found.image} alt="" srcset="" className="backImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" allCard d-flex flex-row">
        {allUsers.map((user, i) => (
          <div
            className="card_One  card mx-4 "
            onClick={() => handleGetTitle(i)}
            key={user.id}
          >
            <img src={user.image} className="card-img-top" alt="..." />
            <div className="card-body ">
              <span>
                <img src={play} alt="" className="playImg" />
              </span>
              <span>
                <img src={add} alt="" className="addImg mx-2" />
              </span>
              <span>
                <img src={like} alt="" className="likeImg" />
              </span>
              <span>
                <img src={min} alt="" className="minImg float-end" />
              </span>
              <p className="text-light">{user.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sub;
