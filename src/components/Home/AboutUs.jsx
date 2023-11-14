import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Aos from "aos";

export default function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);
  return (
    <Box className="bg-sky-50">
      <Box className="w-4/5 p-10 mx-auto flex justify-center items-center">
        <Typography data-aos="fade-right" variant="h2" color="text.primary">
          Karena Rasa Tak Pernah Bohong
        </Typography>
        <Box data-aos="fade-left">
          <Avatar
            variant="rounded"
            sx={{ height: 300, width: "max-content" }}
            src="https://www.ucdavis.edu/sites/default/files/media/images/what-to-eat-restaurants-uc-davis_0.jpg"
          />
        </Box>
      </Box>
    </Box>
  );
}
