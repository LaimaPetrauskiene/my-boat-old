import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";

import BasicDateRangePicker from "./datePicker";
import Places from "./places";
import theme from "../../styles/theme";

const HomePageCard = () => {
  return (
    <Box
      sx={{
        width: 400,

        position: "absolute",
        top: 300,
        left: 250,
        margin: 2,
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <Typography variant="h5" sx={{ padding: 2 }}>
          Best solution for your yacht charter
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            margin: 2,
            flexDirection: "column",
          }}
        >
          <Places />
          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            <BasicDateRangePicker />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            Search
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default HomePageCard;
