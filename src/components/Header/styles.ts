import { styled } from "styled-components";

export const ButtonStyles = {
    color: '#000',
    border: '1px solid #000',
    padding: '0.75rem 1rem',
}

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 2rem;

    background: #475569;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    svg{
        width: 30px;
        height: auto;
    }
`