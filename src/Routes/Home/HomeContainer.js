import { moviesApi } from 'api';
import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';

function HomeContainer() {
    const [state, setState] = useState({
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    });

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
        setState({
            ...state,
            nowPlaying: nowPlaying,
            upcoming: upcoming,
            popular: popular,
        });
    };

    useEffect(() => {
        try {
            fetchData();
        } catch {
            setState({
                ...state,
                error: "Can't find movies information",
            });
        } finally {
            setState({
                ...state,
                loading: false,
            });
        }
    }, []);

    return (
        <>
            {console.log('state', state)}
            <HomePresenter />
        </>
    );
}

export default HomeContainer;
