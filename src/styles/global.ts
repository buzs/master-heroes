import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,
    body,
    #root,
    #__next {
        height: 100%;
    }

    .layout {
        height: 100%;
        background: #3B4046;
    } 

    .main {
        padding: 0 50px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .footer {
        text-align: center;
		font-size: 10px;
		background: #3B4046;
		color: #ccc;
    }
`;
