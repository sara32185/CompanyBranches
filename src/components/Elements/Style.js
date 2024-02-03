import styled from "styled-components";
import { Paper, TableCell } from "@mui/material";

const WrapFilterElements = styled.div`
    display:flex;
    padding:20px 0;
    column-gap:15px;
    align-items:center;
    justify-content:center;

`

const StyledPaper = styled(Paper)`
    width: 90% !important;
    overflow: hidden !important;
    alignSelf: center !important;
    margin: auto !important;
`

const StyledTableCell = styled(TableCell)`
    color:${props => props.color} !important;
    font-weight:bold !important;
`

const StyledPageTitle = styled.div`
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    column-gap:5px;
    color:${props => props.color}
    
`

export {
    WrapFilterElements,
    StyledPageTitle,
    StyledPaper,
    StyledTableCell
}