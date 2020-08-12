import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url("https://pressstart.vip/images/uploads/assets/foggy.png");
        background-repeat: no-repeat;
        background-position: 50% center;
        background-attachment: fixed;
        color: ${({ theme }) => theme.light};
        -webkit-font-smoothing: antialiased !important;
        transition: background-color 200ms, color 200ms,  border-color 200ms ease;
    }

    html, body, input, button, select, option {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 18px;
        line-height: 1.5rem
    }
    
    button {
        border: 0;
        cursor: pointer;
    }

`