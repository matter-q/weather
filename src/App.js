import React, { Fragment, useState } from "react";
import "./index.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Weather from "./components/weather/Weather";
import Filter from "./components/filter/Filter";

const queryClient = new QueryClient();

export default function App() {
  const [city, setCity] = useState("");

  function onFilterSelected(id) {
    setCity(id);
  }

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <QueryClientProvider client={queryClient}>
          <Filter onFilterSelected={onFilterSelected} />
          <Weather city={city} />
        </QueryClientProvider>
      </div>
    </Fragment>
  );
}
