import { styled } from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;

    width: 100%;
    min-height: 80vh;
    height: 100%;

    background: #e5e7eb;
`

export const InboxMessagesContainer = styled.div`
    width: 30%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0.5rem 0.25rem;

    background: #fff;

    border: 1px solid #e5e7eb;

    p:first-child{
        width: 100%;
        min-width: 55px;
        font-size: 1.15rem;

        padding: 1rem;

        border-bottom: 0.25rem solid #e5e7eb;
    }
`

export const MessagesList = styled.ul`
    width: 100%;
    height: 100%;

    overflow-y: hidden;
`

export const Message = styled.li`
    width: 100%;

    padding: 0.25rem;

    cursor: pointer;

    border-bottom: 2px solid #e5e7eb;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span{
        color: #0878d7;
        font-weight: 700;
    }

    p{
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        color: #6b79ab;
    }
`

export const MessageContent = styled.div`
    width: 100%;
    min-height: 100%;

    margin: 0.5rem 0.25rem;

    background: #fff;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        gap: 0.5rem;

        background: #e5e7eb;
        padding: 1rem 0;

        p:first-child{
            width: 100%;
            min-width: 55px;
            font-size: 1.15rem;
            padding: 0 0.5rem;
        }

        h3{
            padding: 0 0.5rem;
        }
    }

    p:last-child{
        padding: 0.5rem;
    }
`