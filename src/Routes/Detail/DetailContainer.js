import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: { pathname },
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes('/movie/'),
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;

        const { isMovie } = this.state;
        const parseId = parseInt(id);

        // parseId가 number가 아니면 prop에서 가져온다
        if (isNaN(parseId)) {
            return push('/');
        }

        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await moviesApi.movieDetail(parseId));

                //위에가 헷갈리면 다음과 같이 쓸 수도 있음
                //const request = await moviesApi.movieDetail(parseId));
                //result = request.data
            } else {
                ({ data: result } = await tvApi.tvDetail(parseId));
            }
            console.log(result);
        } catch (error) {
            this.setState({
                error: "Can't find anything.",
            });
        } finally {
            this.setState({
                loading: false,
                result,
            });
        }
    }

    render() {
        const { result, loading, error } = this.state;
        {
            console.log(this.state);
        }
        return <DetailPresenter result={result} error={error} loading={loading} />;
    }
}
