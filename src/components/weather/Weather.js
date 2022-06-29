import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import classes from "./Weather.module.css";

const SelectCity = () => {
  return (
    <Typography variant="h5" component="div">
      Select city
    </Typography>
  );
}

const List = ({ data }) => {
  return (
    <Fragment>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data.location.country}
      </Typography>
      <Typography variant="h5" component="div">
        {data.location.name}
      </Typography>
      <Typography variant="body2">
        {data.current.temp_c} °C / {data.current.condition.text}
      </Typography>
    </Fragment>
  );
}

const Weather = ({ city }) => {
  const { isLoading, isIdle, data } = useQuery(city, () => axios
    .get(
      `http://api.weatherapi.com/v1/current.json`, {
      params: {
        key: 'a1680b8c02024189931224804222706',
        q: city
      }
    }
    )
    .then((res) => res.data),
    {
      enabled: !!city,
    }
  );

  return (
    <Paper className={classes['weather-paper']} variant="outlined">
      {isLoading && <CircularProgress />}
      {isIdle && <SelectCity />}
      {data && <List data={data}></List>}
    </Paper>
  );
};

export default Weather;
