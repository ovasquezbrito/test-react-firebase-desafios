import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, CircularProgress, Container, Typography } from "@material-ui/core";
import { getCompanies } from "../../actions/company";
import {getMonthInLetter, getFilteredByKey} from '../../helpers/helper'

import Company from "./Company/Company";
import useStyles from "./styles";
import TotalCompany from "./Company/TotalCompany/TotalCompany";


const Companies = () => {
   
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  const companies = useSelector((state) => state.companies);

  const getTotalSelesByEmpresa = (data, name, type) => {
    return data.reduce(function(groups, item) {
        let val = type ? new Date(item[name]).getMonth() : item[name];
        groups[val] = groups[val] || {name: type ? new Date(item[name]).getMonth() : item[name], finalPrice: 0};
        groups[val].finalPrice += item.finalPrice;
        return groups;
    }, {});

  }
  const salesGroup = Object.values(getTotalSelesByEmpresa(companies, 'nameAgency', ''))

  const getEmpresaWithMostSales = (reduceList) => {
    return reduceList.reduce((a, b) => a.finalPrice > b.finalPrice ? a : b, {});
  }
  
  const totalSelesEmpresa = Object.values(getEmpresaWithMostSales(salesGroup))
  const detailEmpresas = getFilteredByKey(companies, 'nameAgency', totalSelesEmpresa[0])
  const totalMonthMostSales = Object.values(getTotalSelesByEmpresa(detailEmpresas, 'datePayment', 'date'))
  const empresaMostSales =  totalSelesEmpresa[0];
  const totalEmpresaMostSales = totalSelesEmpresa[1];

  const monthMostSale = getMonthInLetter(Object.values(getEmpresaWithMostSales(totalMonthMostSales))[0])

  return (
    <Container>
          <Grid
           className={classes.actionDiv}
            container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} sm={7}>
                  <Typography variant="h6">
                <TotalCompany optionName="total" empresaMasVendida={empresaMostSales} totalMonto={totalEmpresaMostSales} montoMesVendido={monthMostSale}/>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} >
                  <Typography variant="h6">
                  <TotalCompany optionName="mes" empresaMasVendida={0} totalMonto={0} montoMesVendido={monthMostSale}/>
              </Typography>
            </Grid>
          </Grid>
            {
          !companies.length ? <CircularProgress /> : (
            <Grid className={`${classes.mainContainer}, ${classes.smMargin}`} container alignItems="stretch" spacing={3}>
              <Company companies={salesGroup} />
            </Grid>
          )
        }
          
      </Container>
    
  );
};

export default Companies;
