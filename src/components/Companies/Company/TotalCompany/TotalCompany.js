import React from 'react';
import NumberFormat from 'react-number-format';
import { Typography,Paper } from '@material-ui/core';

const TotalCompany = ({optionName, empresaMasVendida, totalMonto, montoMesVendido}) => {
  return (
    <>
      {
        optionName === 'total' ? 
        (
          <Paper elevation={3}>
            <Typography variant="h4">
              {empresaMasVendida} 
            </Typography>
            <Typography variant="h4">
              <NumberFormat 
                value={totalMonto} 
                displayType={'text'} 
                thousandSeparator={true} prefix={'$'} 
              />
            </Typography>
          </Paper>
          
        ) :
        (
          <Paper elevation={3}>
            <Typography variant="h4">
              Mes Mas Venta
            </Typography>
            <Typography variant="h4">
              {montoMesVendido}
            </Typography>
          </Paper>
        )
      }
    </>
  );
};

export default TotalCompany;