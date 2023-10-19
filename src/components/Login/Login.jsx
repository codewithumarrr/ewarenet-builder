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

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
          width: '50%'
        }}
      >

          <Typography variant="h1" sx={{ textAlign: "center" }} color={'primary'}>
            Log In
          </Typography>
          <Typography
            variant="body2"
            color={'primary'}
            sx={{ textAlign: "center", marginTop: 4 }}
          >
            Don't have an account? <Link sx={{color: 'initial'}} href="/signup">Sign up</Link>
          </Typography>
          <Box onSubmit={handleSubmit} component="form">
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              LOG IN
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: 4 }}
          >
            <Link href="/forgot-password">Forgot password?</Link>
          </Typography>
      </Container>
    </Box>
  );
}

export default Login;
