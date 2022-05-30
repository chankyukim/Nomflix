import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
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
      // location: { pathname },
    } = this.props;

    // const isMovie = pathname.includes('/movie/');
    // console.log('isMovie', isMovie);
    const { isMovie } = this.state;
    const parsedId = parseInt(id);

    // parseId가 number가 아니면 home으로 간다.(localhost:3000/movie/asdad 일 경우 localhost:3000(home)으로 간다.)
    if (isNaN(parsedId)) {
      return push('/');
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));

        //위에가 헷갈리면 다음과 같이 쓸 수도 있음
        //const request = await moviesApi.movieDetail(parsedId));
        //result = request.data
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
      // console.log('result', result);
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
    // {
    //     console.log(this.state);
    // }
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
