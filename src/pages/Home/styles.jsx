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

export const Searchbar = styled.input`
    display: flex;
    width: 10%;
    box-sizing: border-box;
    border: 2px solid var(--white);
    border-radius: 4px;
    height: 40px;
    padding: 12px 20px;
    background-image: url(${props => props.img});
    background-position: 10px 8px;
    background-repeat: no-repeat;
    padding-left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: var(--white);
    transition: width 0.4s ease-in-out;
    &:focus {
        width: 50%;
    }
`;

export const ViewSearch = styled.div`
    display: flex;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
`;
