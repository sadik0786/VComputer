import React,{useState,useRef} from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import Iframe from "react-iframe";
import emailjs, { init } from "@emailjs/browser";

function Contact() {
  init("user_xxxxxxxxxxxxxxxxxxx");
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you entered = name: ${name} mobile: ${mobile} email: ${email} message:${message}`);
  };
const divRef = useRef(null);
  return (
    <>
      <Box
        id="divContact"
        ref={divRef}
        component="main"
        textAlign="center"
        sx={{ p: 3, backgroundColor: "#ddd" }}
      >
        <Typography
          variant="h5"
          sx={{
            borderBottom: "2px solid #000",
            display: "inline-block",
            mb: 5,
            "&:hover, &.Mui-focusVisible": {
              borderBottom: "2px solid #E10700",
            },
          }}
        >
          CONTACT{" "}
          <span
            style={{
              color: "#E10700",
            }}
          >
            US
          </span>
        </Typography>
        <Grid container maxWidth="lg" justifyContent="center" spacing={5}>
          <Grid item xs={12} md={7}>
            <Box style={{ height: "200", width: "100%" }}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15072.940071541443!2d72.83972019999999!3d19.1849348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665558508934!5m2!1sen!2sin"
                width="100%"
                height="400px"
                id="ss"
                className="ss"
                display="block"
                position="relative"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <form ref={form} onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    placeholder="Enter Your Details"
                    value={name}
                    color="success"
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                    placeholder="Enter Your Details"
                    value={mobile}
                    color="success"
                    onChange={(e) => setMobile(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneInTalkIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email Id"
                    variant="outlined"
                    placeholder="Enter Your Details"
                    color="success"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    color="success"
                    rows={4}
                    placeholder="Enter Your Details"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <Button type="submit" variant="outlined" color="success">
                    Submit
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Contact;
