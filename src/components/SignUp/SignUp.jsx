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

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          Create your account
        </Typography>
        <Typography
          variant="body2"
          color={"primary"}
          sx={{ textAlign: "center", marginTop: 6 }}
        >
          Already have an account?
          <Link sx={{ color: "initial" }} href="/signin">
            Sign in
          </Link>
        </Typography>
        <Box onSubmit={handleSubmit} component="form" mt={4}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            continue
          </Button>
        </Box>
        <Typography variant="body2" sx={{ textAlign: "center", marginTop: 4, color: 'black' }}>
          By continuing, you agree to accept our
          <br />
          Privacy Policy & Terms of Service.
        </Typography>
      </Container>
    </Box>
  );
}

export default SignUp;
