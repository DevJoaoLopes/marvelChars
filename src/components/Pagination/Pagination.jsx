import React from 'react'
import {Container, PreviewPage, NextPage} from './styles';

const Pagination = ({
    clickNext = () => {},
    clickPreview = () => {},
    disablePreview = false,
}) => {
    return (
        <Container data-testid="pagination">
            <PreviewPage disabled={disablePreview} onClick={clickPreview}>Anterior</PreviewPage>
            <NextPage onClick={clickNext}>Próxima</NextPage>
        </Container>
    )
}

export default Pagination
