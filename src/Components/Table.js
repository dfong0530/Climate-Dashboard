import React, { useState, useEffect } from'react';
import "../CSS/TableChart.css";
import { UpdateTableData } from '../Data/GetData';
import { initialTableData } from '../Data/GetChartData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function TableChart({ year, action, states }) {

  const [rows, setRows] = useState(initialTableData());

  useEffect(() => {
    //UpdateTableData returns a list of objects. This will be used for the rows in the table.
    const update = async () => {
      const res = await UpdateTableData(year, action, states);
      setRows(res);
    };
    
    update();

  }, [year, action, states])

  return (
    <>
      <div className="table-wrapper">
        <TableContainer sx={{height: "100%", backgroundColor: "#282a2f", borderRadius: "50px"}}component={Paper}>
          <Table className="tb" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className="table-row">
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} >State</TableCell>
                {/* Table Headers */}
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">January</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">Febuary</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">March</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">April</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">May</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">June</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">July</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">August</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">September</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">October</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">November</TableCell>
                <TableCell sx={{color: "#fff", fontFamily: "Poppins", opacity: "0.9", borderBottom:"3px solid #1F2024"}} align="center">December</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {rows.map((row) => (
                <TableRow
                  key={row.state}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className="table-row"
                >
                  <TableCell  sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "1", borderBottom:"2px solid #1F2024"}} component="th" scope="row">
                    {row.state}
                  </TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.jan}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.feb}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.mar}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.apr}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.may}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.jun}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.jul}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.aug}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.sept}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.oct}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.nov}</TableCell>
                  <TableCell sx={{color: "#BEBEBE", fontFamily: "Poppins", opacity: "0.7", borderBottom:"2px solid #1F2024"}} align="center">{row.dec}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default TableChart;