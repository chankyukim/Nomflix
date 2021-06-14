import { moviesApi } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    };

    //컴포넌트가 마운트 됐을 때 nowPlaying, upcoming, popular를 찾고, 끝나면 state값을 설정해준다.
    //async await -> await작업이 다 끝날때까지 기다린 후에 다음 코드 실행
    async componentDidMount() {
        //try를 실행하고, 뭔가 작동하지 않으면 error를 catch해준다.
        try {
            //기본적으로 nowPlaying, upcoming, popular의 데이터를 받아오는 작업이다.
            //nowPlaying의 results만 받아오는게 아니라 upcoming, popular에서도 받아오기 때문에 results의 이름을 nowPlaying으로 변수명을 바꿔주는 작업
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();
            // console.log(nowPlaying);

            const {
                data: { results: upcoming },
            } = await moviesApi.upcoming();
            // console.log(upcoming);

            const {
                data: { results: popular },
            } = await moviesApi.popular();
            // console.log(popular);

            this.setState({
                nowPlaying: nowPlaying, //nowPlaying (state) 에 moviesApi.nowPlaying()에서 받아온 data를 넣어준다.
                upcoming: upcoming,
                popular: popular,
            });

            //위랑 같은 거
            // const response = await moviesApi.nowPlaying();
            // const { results } = response.data;
            // console.log('results', results);
        } catch {
            this.setState({
                error: "Can't find movies information",
            });
        } finally {
            //에러를 만나던 movie를 제대로 받아오던 loading을 false가 되게 해준다.
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        {
            console.log(this.state);
        }
        return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />;
    }
}
