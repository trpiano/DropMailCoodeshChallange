import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 1rem;

    padding: 3rem 0 0 0;

    border: 1px solid #7f7f7f;

    gap: 1.5rem;
`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;

    span{
        font-weight: 400;
    }

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        input, button{
            min-height: 50px;

            border: 1px solid #7f7f7f;
        }

        button{
            padding: 0 0.75rem;

            border-radius: 0 0.25rem 0.25rem 0;
            color: #000;
        }

        input{
            min-width: 300px;
            padding: 0 0.5rem;
            font-size: 1.1rem;
            border-radius: 0.25rem 0 0 0.25rem;

            cursor: initial;
        }
    }
`

export const RefreshContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    div{
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 0.5rem;
    }

    button{
        color: #000;

    }
`