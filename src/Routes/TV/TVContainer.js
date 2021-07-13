import React, { useState, useEffect } from 'react';
import { tvApi } from 'api';
import TVPresenter from './TVPresenter';

const TVContainer = () => {
    const [tvTopRated, setTvTopRated] = useState({
        topRated: null,
        loading: true,
        error: null,
    });

    const [tvPopular, setTvPopular] = useState({
        popular: null,
        loading: true,
        error: null,
    });

    const [tvAiringToday, setTvAringToday] = useState({
        airingToday: null,
        loading: true,
        error: null,
    });

    const fetchTopRated = async () => {
        try {
            const {
                data: { results: topRated },
            } = await tvApi.topRated();

            setTvTopRated({
                topRated, //topRated: topRated
                loading: false,
                error: null,
            });
        } catch {
            setTvTopRated({
                topRated: null,
                loading: false,
                error: "Can't find top rated show information ",
            });
        }
    };

    const fetchPopulaer = async () => {
        try {
            const {
                data: { results: popular },
            } = await tvApi.popular();

            setTvPopular({
                popular,
                loading: false,
                error: null,
            });
        } catch {
            setTvPopular({
                popular: null,
                loading: false,
                error: "Can't find popular show information",
            });
        }
    };

    const fetchAiringToday = async () => {
        try {
            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();

            setTvAringToday({
                airingToday,
                loading: false,
                error: null,
            });
        } catch {
            setTvAringToday({
                airingToday: null,
                loading: false,
                error: "Can't find airing today show information",
            });
        }
    };

    useEffect(() => {
        fetchTopRated();
    }, []);

    useEffect(() => {
        fetchPopulaer();
    }, []);

    useEffect(() => {
        fetchAiringToday();
    }, []);

    // const newData = { tvTopRated, tvPopular, tvAiringToday };

    return (
        <>
            {/* {console.log(newData)} */}
            <TVPresenter
                tvTopRated={tvTopRated}
                tvPopular={tvPopular}
                tvAiringToday={tvAiringToday}
            />
        </>
    );
};

export default TVContainer;
