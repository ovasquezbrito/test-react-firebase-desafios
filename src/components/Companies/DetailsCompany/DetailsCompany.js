import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container} from '@material-ui/core';

import { getDetailsCompany } from '../../../actions/company';

const DetailsCompany = ({match}) => {

  const nameCompany = match.params.nombre_empresa
  const dispatch = useDispatch();
  const details_company = useSelector((state) => state.details_company);

  useEffect(() => {
    dispatch(getDetailsCompany(nameCompany));
  }, [nameCompany, dispatch]);

  return (
    <Container>
      
      <Typography variant="h4">
          Empresa: {nameCompany}
      </Typography>
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre cliente</TableCell>
            <TableCell align="right">-Personas</TableCell>
            <TableCell align="right">Día&nbsp;</TableCell>
            <TableCell align="right">Hora&nbsp;</TableCell>
            <TableCell align="right">Valor Venta&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details_company.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.persons}</TableCell>
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right">{row.hour}</TableCell>
              <TableCell align="right">
                <NumberFormat 
                  value={row.finalPrice} 
                  displayType={'text'} 
                  thousandSeparator={true} prefix={'$'} 
                />
              </TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};

export default DetailsCompany;