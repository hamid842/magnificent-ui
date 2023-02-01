import {ChangeEvent, MouseEvent, useState} from "react";
import TablePagination from '@mui/material/TablePagination';

const Pagination = () => {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(9);

    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
export default Pagination;