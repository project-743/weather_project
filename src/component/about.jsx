import React from "react";
import "./about_style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function About() {
  return (
    <div id="footer">
      <h1>SkySaavy</h1>
      <Stack
        direction={"row"}
        alignItems={"centre"}
        spacing={1}
        className="buttons"
      >
        <Button href="https://twitter.com">
          <TwitterIcon
            className="button"
            sx={{
              color: "white",
            }}
          />
        </Button>
        <Button href="https://facebook.com">
          <FacebookIcon
            className="button"
            sx={{
              color: "white",
            }}
          />
        </Button>
        <Button href="https://instagram.com">
          <InstagramIcon
            className="button"
            sx={{
              color: "white",
            }}
          />
        </Button>
        <Button href="mailto:sahaijordialan@gmail.com">
          <EmailIcon
            className="button"
            sx={{
              color: "white",
            }}
          />
        </Button>
      </Stack>
      <p>© Copyright SkySaavy</p>
    </div>
  );
}

export default About;
