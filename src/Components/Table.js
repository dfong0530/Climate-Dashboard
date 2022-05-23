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

    const update = async () => {
      const res = await UpdateTableData(year, action);
      setRows(res);
    };
    
    update();

  }, [year, action])

  return (
    <>
      <div className="table-wrapper">
        <TableContainer component={Paper}>
          <Table className="tb" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className="table-row">
                <TableCell>State</TableCell>
                {/* Table Headers */}
                <TableCell align="center">January</TableCell>
                <TableCell align="center">Febuary</TableCell>
                <TableCell align="center">March</TableCell>
                <TableCell align="center">April</TableCell>
                <TableCell align="center">May</TableCell>
                <TableCell align="center">June</TableCell>
                <TableCell align="center">July</TableCell>
                <TableCell align="center">August</TableCell>
                <TableCell align="center">September</TableCell>
                <TableCell align="center">October</TableCell>
                <TableCell align="center">November</TableCell>
                <TableCell align="center">December</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.state}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className="table-row"
                >
                  <TableCell component="th" scope="row">
                    {row.state}
                  </TableCell>
                  <TableCell align="center">{row.jan}</TableCell>
                  <TableCell align="center">{row.feb}</TableCell>
                  <TableCell align="center">{row.mar}</TableCell>
                  <TableCell align="center">{row.apr}</TableCell>
                  <TableCell align="center">{row.may}</TableCell>
                  <TableCell align="center">{row.jun}</TableCell>
                  <TableCell align="center">{row.jul}</TableCell>
                  <TableCell align="center">{row.aug}</TableCell>
                  <TableCell align="center">{row.sept}</TableCell>
                  <TableCell align="center">{row.oct}</TableCell>
                  <TableCell align="center">{row.nov}</TableCell>
                  <TableCell align="center">{row.dec}</TableCell>
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