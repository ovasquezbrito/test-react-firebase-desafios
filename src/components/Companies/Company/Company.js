import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { sortEmpresas } from '../../../helpers/helper';


const Company = ({companies}) => {
  
  const onlyEmpresas = sortEmpresas(Object.values(companies),'finalPrice')
     
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Empresa</TableCell>
            <TableCell align="right">Total de ventas</TableCell>
            <TableCell align="right">Comisión&nbsp;(g)</TableCell>
            <TableCell align="right">Acciones&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {onlyEmpresas.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <NumberFormat 
                  value={row.finalPrice} 
                  displayType={'text'} 
                  thousandSeparator={true} prefix={'$'} 
                />
              </TableCell>
              <TableCell align="right">
                <NumberFormat 
                  value={row.finalPrice * 0.025} 
                  displayType={'text'} 
                  thousandSeparator={true} prefix={'$'} 
                />
              </TableCell>
              <TableCell align="right">
                <Button variant="outlined" component={Link} to={`/empresas/${row.name}`} >Ver Detalle</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Company;