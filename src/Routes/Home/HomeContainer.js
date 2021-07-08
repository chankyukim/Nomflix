import { moviesApi } from "api";
import React, { useState, useEffect } from "react";
// import HomePresenter from "./HomePresenter";

function HomeContainer() {
  const [nowPlaying, setNowPlaying] = useState({
    nowPlaying: {},
    loading: true,
    error: "",
  });
  const [upcoming, setUpcoming] = useState({
    upcoming: {},
    loading: true,
    error: "",
  });
  const [popular, setPopular] = useState({
    popular: {},
    loading: true,
    error: "",
  });

  //https://darrengwon.tistory.com/275 (왜 useEffect를 비동기로 안만들고 비동기 함수를 따로 만들어야 하는지 이유)

  useEffect(() => {
    moviesApi
      .nowPlaying()
      .then((result) => {
        setNowPlaying({ nowPlaying: result, loading: false, error: "" });
      })
      .catch((error) => {
        setNowPlaying({ nowPlaying: {}, error, loading: false, error });
      });
  }, []);

  useEffect(() => {
    moviesApi
      .upcoming()
      .then((result) => {
        setUpcoming({ upcoming: result, loading: false, error: "" });
      })
      .catch((error) => {
        setUpcoming({ upcoming: {}, loading: false, error });
      });
  }, []);

  useEffect(() => {
    moviesApi
      .popular()
      .then((result) => {
        setPopular({ popular: result, loading: false, error: "" });
      })
      .catch((error) => {
        setPopular({ popular: {}, loading: false, error });
      });
  }, []);

  if (nowPlaying.loading) return <div>nowPlaying loading</div>;
  if (upcoming.loading) return <div>upcoming loading</div>;
  if (popular.loading) return <div>popular loading</div>;

  return (
    <>
      {/* {console.log("state", state)} */}
      {/* <HomePresenter /> */}
    </>
  );
}

export default HomeContainer;
