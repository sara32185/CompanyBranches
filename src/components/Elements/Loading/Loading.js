import React from 'react'
import { StyledLoading, WrapLoading } from './Style'
import { Fade } from '@mui/material';

const Loading = (props) => {
    const { showLoading } = props;
    return (
        <>
            <WrapLoading
                show={showLoading}
            >
                <Fade
                    in={showLoading}
                    unmountOnExit
                >
                    <StyledLoading />
                </Fade>
            </WrapLoading>
        </>
    )
}

export default Loading