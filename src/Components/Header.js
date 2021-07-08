import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { ReactComponent as TvIcon } from '../assets/SVG/blackboard.svg';
import { ReactComponent as MoviesIcon } from '../assets/SVG/clapperboard.svg';
import { ReactComponent as SearchIcon } from '../assets/SVG/magnifying-glass.svg';

const SHeader = styled.header`
    width: 100%;
    height: 7rem;
    box-shadow: 0px 0.5px 4px 0.5px rgba(149, 165, 166, 0.4);

    display: flex;
    justify-content: space-between;
`;

const SLogo = styled.img.attrs({
    src: Logo,
})`
    height: 7rem;
`;

const SNav = styled.nav`
    display: flex;
    align-items: center;
    align-self: stretch;
    margin-right: auto; //SNav가 맨왼쪽으로 붙는다.(flexbox에서 사용할 수 있는 트릭)
`;

const SIconBox = styled.div`
    padding: 0 1rem;
`;

const SLink = styled(Link)`
    height: 7rem;
    width: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > * {
        fill: ${props => (props.current ? 'red' : '#fff')};
        color: ${props => (props.current ? 'red' : '#fff')};
        transition: all 0.3s ease-out;
    }
`;

const SIconText = styled.span``;

const Form = styled.form`
    display: flex;
    flex: 0 0 30%;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    padding: 0.7rem 2rem;
    border-radius: 10rem;
    width: 82%;
    transition: all 0.2s;
    margin-right: -4rem;

    &:focus {
        outline: none;
        width: 85%;
    }

    &::-webkit-input-placeholder {
        font-weight: 100;
        /* color: #f0eeee; */
    }
`;

const Header = withRouter(({ location: { pathname } }) => (
    <SHeader>
        <SLogo />
        <SNav>
            <SIconBox>
                <SLink to="/" current={pathname === '/' ? 1 : 0}>
                    <MoviesIcon width="2.5rem" height="2.5rem" />
                    <SIconText>MOVIES</SIconText>
                </SLink>
            </SIconBox>
            <SIconBox>
                <SLink to="/tv" current={pathname === '/tv' ? 1 : 0}>
                    <TvIcon width="2.5rem" height="2.5rem" />
                    <SIconText>TV</SIconText>
                </SLink>
            </SIconBox>
        </SNav>
        <Form>
            <Input placeholder="Search Movies or TV Shows.."></Input>
            <SLink to="/search" current={pathname === '/search' ? 1 : 0}>
                <SearchIcon width="2rem" height="2rem" />
            </SLink>
        </Form>
    </SHeader>
));
//https://stackoverflow.com/questions/49784294/warning-received-false-for-a-non-boolean-attribute-how-do-i-pass-a-boolean-f (value ? 1 : 0 으로 바꾸는거 해결부분 )

export default Header;

//SLink의 자식요소들은 default값이 흰색, 클릭시 값을 red로 줘서 검색버튼이 안보이고 눌렀을 시 빨간색으로 변하는 거 수정해야함. (styled-components의 선택자를 어떻게 쓰는지를 모르겠어서 못하고 있음)
