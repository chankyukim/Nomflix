import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const SHeader = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => (props.current ? '#3498db' : 'transparent')};
    transition: border-bottom 0.5s ease-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

//구조분해 안해줬으면 props.location.pathname이라고 적어야함

// withRouter는 Route가 아닌 컴포넌트에서 location, match, history 를 사용하기 위해서 사용한다. (현재 컴포넌트는 Route가 아닌 header 컴포넌트이다.)

// 예를 들어 저희가 Route들을 나열해놓았죠
// <Route component={LandingPage} /> 이런식으로요
// 이렇게 Route에 감싸져있는 컴포넌트들은  this.props.history에 자동으로 접근이 가능하답니다.
// 하지만 그렇지 않은 컴포넌트들 주로 자녀 컴포넌트들이 겠죠 ... LandingPage안에 쓰인 컴포넌트는  Route에 감싸져있지 않습니다.
// 그러기에 그 자녀컴포넌트 안에서 this.props.history를 쓰려하면 접근하지 못하기에 에러가 납니다.
// 이러한 문제를 해결하기위해서
// export default withRouter(자녀컴포넌트이름) 이런식으로 해주는 것입니다
export default withRouter(({ location: { pathname } }) => (
    <SHeader>
        <List>
            <Item current={pathname === '/'}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === '/tv'}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === '/search'}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </SHeader>
));
// //이렇게도 쓸 수 있다.

//버전1
// const Header = props => (
//     <SHeader>
//         <List>
//             <Item current={true}>
//                 <SLink to="/">Movies</SLink>
//             </Item>
//             <Item current={true}>
//                 <SLink to="/tv">TV</SLink>
//             </Item>
//             <Item current={true}>
//                 <SLink to="/search">Search</SLink>
//             </Item>
//         </List>
//     </SHeader>
// );
// export default withRouter(Header);

//버전2
// const Header = withRouter(({ location: { pathname } }) => (
//     <SHeader>
//         <List>
//             <Item current={pathname === '/'}>
//                 <SLink to="/">Movies</SLink>
//             </Item>
//             <Item current={pathname === '/tv'}>
//                 <SLink to="/tv">TV</SLink>
//             </Item>
//             <Item current={pathname === '/search'}>
//                 <SLink to="/search">Search</SLink>
//             </Item>
//         </List>
//     </SHeader>
// ));

// export default Header;

//Link컴포넌트는 클릭하면 다른 주소로 이동시키는 컴포넌트이다.
/* 
그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서, 페이지를 아예 새로 불러오게됩니다. 그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다.
그렇기 때문에 Link 컴포넌트를 사용하는데요, 이 컴포넌트는 HTML5 History API 를 사용하여 브라우저의 주소만 바꿀뿐, 페이지를 새로 불러오지는 않습니다. 
*/

/* withRouter는 다른 컴포넌트를 감싸는 컴포넌트이다. 그리고 Router에 대한 정보를 component에 전달한다. */

// styled-component에는 props를 전달할 수 있다.
