import styled from 'styled-components';

export const CardItem = styled.div`
    height: 300px;
    width: 280px;
    margin: 20px;
    border-radius: 10px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;


export const TitleName = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: var(--primary);
    padding: 15px;
    background-color: var(--white);
`;

