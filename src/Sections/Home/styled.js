import styled from "styled-components";

export const MainTitle = styled.h1`
    font-family: "Bellefair", sans-serif;
    font-weight: 400;
    font-size: var(--font-2);
    color: var(--color-white);
    line-height: var(--line-height-2);
`;

export const TextWrapper = styled.div`
    width: 20.4375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 7rem;
    margin-inline: auto;
    margin-bottom: 5rem;
`;

export const HomeButton = styled.button`
    font-family: "Bellefair", sans-serif;
    font-size: var(--font-4);
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-inline: auto;
    display: block;
    transition: 150ms ease-in-out;

    &:hover {
        transition: 150ms ease-in-out;
        border: 1px solid white;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px white;
        /* outline-color: rgba(255, 255, 255, 0); */
        /* outline-offset: 15px; */
        /* text-shadow: 1px 1px 2px #427388; */
    }
`;