import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    :root {
        background: #f6f6f6;
    }
    
    *  {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
        font-family: 'Roboto', sans-serif;
    }

    *:focus {
        outline: 0;
    }

    body, input, textarea, button {
        font-family: Source Sans Pro, sans-serif;
        font-weight: 400;
    }

    body { 
        background: var(--background-light);
        -webkit-font-smoothing: antialiased;
    }

    button  {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a   {
        text-decoration: none;
    }

    ul  {
        list-style: none;
    }
`