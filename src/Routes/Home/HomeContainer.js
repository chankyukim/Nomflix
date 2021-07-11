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

    //https://darrengwon.tistory.com/275 (왜 useEffect를 비동기로 안만들고 비동기 함수를 따로 만들어야 하는지 이유)

    const fetchNowPlaying = async () => {
        try {
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();

            setMovieNowPlaying({
                nowPlaying: nowPlaying,
                loading: false,
                error: null,
            });
        } catch {
            setMovieNowPlaying({
                nowPlaying: null,
                loading: false,
                error: "Can't find movies information",
            });
        }
    };

    const fetchPopular = async () => {
        try {
            const {
                data: { results: popular },
            } = await moviesApi.popular();

            setMoviePopular({
                popular: popular,
                loading: false,
                error: null,
            });
        } catch {
            setMoviePopular({
                popular: null,
                loading: false,
                error: "Can't find movies information",
            });
        }
    };
    const fetchUpcoming = async () => {
        try {
            const {
                data: { results: upcoming },
            } = await moviesApi.upcoming();

            setMovieUpcoming({
                upcoming: upcoming,
                loading: false,
                error: null,
            });
        } catch {
            setMovieUpcoming({
                upcoming: null,
                loading: false,
                error: "Can't find movies information",
            });
        }
    };

    useEffect(() => {
        fetchNowPlaying();
    }, []);

    useEffect(() => {
        fetchUpcoming();
    }, []);

    useEffect(() => {
        fetchPopular();
    }, []);

    // if (nowPlaying.loading) return <div>nowPlaying loading</div>;
    // if (upcoming.loading) return <div>upcoming loading</div>;
    // if (popular.loading) return <div>popular loading</div>;

    const newData = { movieNowPlaying, movieUpcoming, moviePopular };

    return (
        <>
            {/* {console.log(newData)} */}
            <HomePresenter
                movieNowPlaying={movieNowPlaying}
                movieUpcoming={movieUpcoming}
                moviePopular={moviePopular}
            />
        </>
    );
}

export default HomeContainer;
