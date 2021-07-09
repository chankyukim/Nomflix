import { moviesApi } from 'api';
import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';

function HomeContainer() {
    const [nowPlaying, setNowPlaying] = useState();
    const [upcoming, setUpcoming] = useState();
    const [popular, setPopular] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    //https://darrengwon.tistory.com/275 (왜 useEffect를 비동기로 안만들고 비동기 함수를 따로 만들어야 하는지 이유)

    const fetchData = async () => {
        const {
            data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();

        const {
            data: { results: upcoming },
        } = await moviesApi.upcoming();

        const {
            data: { results: popular },
        } = await moviesApi.popular();

        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch {
            setError("Can't find movies information");
        } finally {
            setLoading(false);
        }
    }, []);

    const newData = { nowPlaying, upcoming, popular, loading, error };

    return (
        <>
            {console.log(newData)}
            <HomePresenter />
        </>
    );
}

export default HomeContainer;
