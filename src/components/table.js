import { Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from "@mui/material";
import Row from "./rowtab";
import { useState } from "react";
function SelectTable({ text, Data,setData }) {

    const [rows, addRows] = useState([1]);  // number of elements in this array = number of rows rendered
    // console.log("rows",rows)
    // console.log(typeof (data))


    return (
        <>
            <Typography sx={{ textAlign: 'left' }}>{text}</Typography>
            <Box sx={{
                width: '100%'
            }}>
                <Table sx={{ border: '1px solid lightgrey' }} aria-label="simple table">
                    <TableHead sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                        <TableRow >
                            <TableCell sx={{ border: '1px solid lightgrey', width: '42px' }} align="left"></TableCell>
                            <TableCell sx={{ border: '1px solid lightgrey', width: '380px' }} align="left">KEY</TableCell>
                            <TableCell sx={{ border: '1px solid lightgrey', width: '400px' }} align="left" >VALUE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            {rows.map((row, index) => (
                                
                                <>
                                
                               <Row addRows={addRows}
                                    rowId={index}
                                    key={index}
                                    Data={Data}
                                    setData={setData}

                                />
                                </>
                            ))}
                            


                        </TableRow>

                    </TableBody>
                </Table>
            </Box>
        </>
    )
}
export default SelectTable;