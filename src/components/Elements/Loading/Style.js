import styled from 'styled-components'
import { CircularProgress } from '@mui/material'


const StyledLoading = styled(CircularProgress)`
`

const WrapLoading = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 97%;
    height: 50vh;
    overflow:hidden;
    visibility:${props => props.show ? "visible" : "hidden"} !important;

`

export { StyledLoading, WrapLoading }