import React, { useEffect, useState } from "react";
import { Grid, List, Typography, CircularProgress } from "@material-ui/core";
import useRequest from "../../hooks/use-request";
import { getInvoices } from "../../lib/api";
import InvoiceListItem from "../InvoiceListItem/InvoiceListItem";
import { useStyles } from "./styles";
import Pagination from "@material-ui/lab/Pagination";
import { ReactComponent as ReactLogo } from "../../assets/image-avatar.jpg";

const InvoiceList = ({ onFiltered }) => {
  const { requestSent, error, loading, data } = useRequest(getInvoices);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(4);
  const classes = useStyles();

  useEffect(() => {
    requestSent(getInvoices);

    return () => requestSent(getInvoices);
  }, [requestSent]);

  if (error) {
    return (
      <Grid container justify="center" xs={7}>
        <Typography variant="h2">{error}</Typography>
      </Grid>
    );
  }

  //Pagination
  let currentPosts;
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  if (data) {
    currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  }
  const paginate = (pageNumber) => setPage(pageNumber);
  //Formatting Total for invoices into US Currency
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Grid container justify="center" xs={12}>
      {loading ? (
        <CircularProgress />
      ) : (
        <List className={classes.List}>
          {onFiltered !== null
            ? currentPosts
                .filter((el) => el.status === onFiltered.toLowerCase())
                .map((el, index) => (
                  <InvoiceListItem
                    key={index}
                    id={el.id}
                    due={el.paymentDue}
                    name={el.clientName}
                    total={format.format(el.total)}
                    status={el.status}
                  />
                ))
            : currentPosts.map((el, index) => (
                <InvoiceListItem
                  key={index}
                  id={el.id}
                  due={el.paymentDue}
                  name={el.clientName}
                  total={format.format(el.total)}
                  status={el.status}
                />
              ))}
          <Grid item xs={2} />
          <Pagination
            count={Math.ceil(data.length / postsPerPage)}
            onChange={(event, value) => paginate(value)}
          />
        </List>
      )}
    </Grid>
  );
};

export default InvoiceList;
