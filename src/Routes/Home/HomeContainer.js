import { moviesApi } from 'api';
import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';

function HomeContainer() {
    const [movieNowPlaying, setMovieNowPlaying] = useState({
        nowPlaying: null,
        loading: true,
        error: null,
    });
    const [moviePopular, setMoviePopular] = useState({
        popular: null,
        loading: true,
        error: null,
    });
    const [movieUpcoming, setMovieUpcoming] = useState({
        upcoming: null,
        loading: true,
        error: null,
    });

    const fetchUpcoming = async () => {
        try {
            const {
                data: { results: upcoming },
            } = await moviesApi.upcoming();
            // throw Error();

            setMovieUpcoming({
                upcoming: upcoming,
                loading: false,
                error: null,
            });
        } catch {
            setMovieUpcoming({
                upcoming: null,
                loading: false,
                error: "Can't find upcoming movies information",
            });
        }
    };

    //https://darrengwon.tistory.com/275 (왜 useEffect를 비동기로 안만들고 비동기 함수를 따로 만들어야 하는지 이유)

    const fetchPopular = async () => {
        try {
            const {
                data: { results: popular },
            } = await moviesApi.popular();
            // throw Error();

            setMoviePopular({
                popular: popular,
                loading: false,
                error: null,
            });
        } catch {
            setMoviePopular({
                popular: null,
                loading: false,
                error: "Can't find popular movies information",
            });
        }
    };

    const fetchNowPlaying = async () => {
        try {
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();
            // throw Error();

            setMovieNowPlaying({
                nowPlaying: nowPlaying,
                loading: false,
                error: null,
            });
        } catch {
            setMovieNowPlaying({
                nowPlaying: null,
                loading: false,
                error: "Can't find now playing movies information",
            });
        }
    };

    useEffect(() => {
        fetchUpcoming();
    }, []);

    useEffect(() => {
        fetchPopular();
    }, []);

    useEffect(() => {
        fetchNowPlaying();
    }, []);

    // if (nowPlaying.loading) return <div>nowPlaying loading</div>;
    // if (upcoming.loading) return <div>upcoming loading</div>;
    // if (popular.loading) return <div>popular loading</div>;

    const newData = { movieNowPlaying, movieUpcoming, moviePopular };

    return (
        <>
            {/* {console.log(newData)} */}
            <HomePresenter
                movieUpcoming={movieUpcoming}
                moviePopular={moviePopular}
                movieNowPlaying={movieNowPlaying}
            />
        </>
    );
}

export default HomeContainer;
