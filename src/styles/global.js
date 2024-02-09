import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, textarea, input {
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 0.60rem; /* largura atual */
        height: 0.28rem; /* altura atual */
        margin-right: 10px;
    }
    

    ::-webkit-scrollbar-corner {
        border: none;
        background: none;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #282a36;
        border-radius: 3px;
        cursor: move;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border: none;
    }

`;
