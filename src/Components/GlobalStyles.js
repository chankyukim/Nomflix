import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color: rgba(20,20,20,1);
        color: white;
        padding-top: 60px;
    }
`;

export default globalStyles;
//styled-components는 각기 다른 컴포넌트들에게 스타일링의 영향을 주지 않기 위해 Local로 동작하는데, 우리는 모든 HTML Elements, Components에 동일하게 초기화 작업이 적용되어야 하므로 Global설정을 할 수 있는 GlobalStyles.js라는 파일을 생성할 것이다.

//여기서 createGlobalStyle을 styled-componenst에서 가져오게 되는데, 위에서 말 했던 Local설정을 Global설정으로 적용할 수 있게 하는 요소이다.
