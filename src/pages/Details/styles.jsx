import styled from 'styled-components';

export const Container = styled.div`
    background: var(--primary);
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
`;


export const TitlePage = styled.p`
    font-size: 35px;
    font-weight: bold;
    color: var(--white);
    padding: 20px;
    background-color: var(--primary);
    text-align: center;
`;
