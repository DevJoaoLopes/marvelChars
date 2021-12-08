import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 100px;
    height: 50px;
    width: 82%;
    align-self: center;
    justify-content: space-between;
    display: flex;
`;

export const NextPage = styled.button`
    cursor: pointer;
    background-color: var(--primary);
    border-width: 1px;
    border-radius: 100px;
    border-color: var(--white);
    color: var(--white);
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    &:hover {
       opacity: 0.35
    }
`;

export const PreviewPage = styled.button`
    cursor: pointer;
    background-color: var(--primary);
    border-width: 1px;
    border-radius: 100px;
    border-color: var(--white);
    color: var(--white);
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    &:hover {
       opacity: 0.35
    }
`;
