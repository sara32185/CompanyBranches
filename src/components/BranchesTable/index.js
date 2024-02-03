import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import useBL from 'hooks/BL.hook';
import { StyledPaper } from 'components/Elements/Style'
import { Colors } from 'utils/Colors'
import { StyledTableCell } from 'components/Elements/Style'
import Loading from 'components/Elements/Loading/Loading';

const BranchesTable = (props) => {
    const { data, showLoading } = useBL()

    const tableHeaders = [
        {
            title: "Id",
            keyName: "store_id"
        },
        {
            title: "Name",
            keyName: "store_title"
        },
        {
            title: "Address",
            keyName: "store_address"
        },
        {
            title: "Area",
            keyName: "store_region"
        },
        {
            title: "City",
            keyName: "city"
        },
    ]

    return (
        <>
            <Loading

                showLoading={showLoading}
            />
            <StyledPaper >
                <TableContainer sx={{ maxHeight: 500, }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>
                                {tableHeaders.map(header =>
                                    <StyledTableCell color={Colors.primaryColor}>
                                        {header.title}
                                    </StyledTableCell>)}
                            </TableRow>
                        </TableHead>
                        {data && <TableBody>
                            {data.map((row) => (
                                row.display &&
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {tableHeaders.map(cell =>
                                        <TableCell>{row[cell.keyName]}</TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                        }
                    </Table>
                </TableContainer>
            </StyledPaper>

        </>
    );
}

export default BranchesTable