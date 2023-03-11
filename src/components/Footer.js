import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} width="50px" height="40px" />
        <Typography variant="h6" pb="40px" mt="-10px">
          Made with ❤ by Prajakta
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
