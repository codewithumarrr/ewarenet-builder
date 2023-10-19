import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";

function VerificationCode() {
  const [formData, setFormData] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^[0-9]{0,1}$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box display="flex" minHeight="100vh">
      <Box width={"50%"} overflow={"hidden"}>
        <img
          src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          style={{ width: "100%", height: "100%" }}
          alt="construction building image"
        />
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "white",
          width: "50%",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }} color={"primary"}>
        Enter Verification code
        </Typography>
        <Box component="form" mt={4}>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ border: "1px solid #C4C4C4",borderRadius: "7px", width: "3rem" }}
              name="code1"
              value={formData.code1}
              onChange={handleInputChange}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]{0,1}",
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ border: "1px solid #C4C4C4",borderRadius: "7px", width: "3rem" }}
              name="code2"
              value={formData.code2}
              onChange={handleInputChange}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]{0,1}",
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ border: "1px solid #C4C4C4",borderRadius: "7px", width: "3rem" }}
              name="code3"
              value={formData.code3}
              onChange={handleInputChange}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]{0,1}",
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ border: "1px solid #C4C4C4",borderRadius: "7px", width: "3rem" }}
              name="code4"
              value={formData.code4}
              onChange={handleInputChange}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]{0,1}",
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ border: "1px solid #C4C4C4",borderRadius: "7px", width: "3rem" }}
              name="code5"
              value={formData.code5}
              onChange={handleInputChange}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]{0,1}",
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 4 }}
          >
            NEXT
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: 4, color: "black" }}
        >
          By continuing, you agree to accept our
          <br />
          Privacy Policy & Terms of Service.
        </Typography>
      </Container>
    </Box>
  );
}

export default VerificationCode;
