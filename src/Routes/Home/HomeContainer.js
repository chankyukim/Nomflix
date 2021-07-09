import { moviesApi } from 'api';
import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';

function HomeContainer() {
    const [nowPlaying, setNowPlaying] = useState({
        nowPlaying: null,
        loading: true,
        error: null,
    });
    const [popular, setPopular] = useState({
        popular: null,
        loading: true,
        error: null,
    });
    const [upcoming, setUpcoming] = useState({
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

            setNowPlaying({
                nowPlaying: nowPlaying,
                loading: false,
                error: null,
            });
        } catch {
            setNowPlaying({
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

            setPopular({
                popular: popular,
                loading: false,
                error: null,
            });
        } catch {
            setPopular({
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

            setUpcoming({
                upcoming: upcoming,
                loading: false,
                error: null,
            });
        } catch {
            setUpcoming({
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

    if (nowPlaying.loading) return <div>nowPlaying loading</div>;
    if (upcoming.loading) return <div>upcoming loading</div>;
    if (popular.loading) return <div>popular loading</div>;

    const newData = { nowPlaying, upcoming, popular };

    return (
        <>
            {console.log(newData)}
            <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} />
        </>
    );
}

export default HomeContainer;
