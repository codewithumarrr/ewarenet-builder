import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function RegisterProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    body: "",
    registrationNumber: "",
    companyName: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    countryCode: "",
    emailUpdates: false,
    termsAndConditions: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here.
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
          Register Profile
        </Typography>
        <Typography
          variant="body2"
          color={"black"}
          sx={{ textAlign: "center", marginTop: 4 }}
        >
          Please fill in your profile details below
        </Typography>
        <Box
          onSubmit={handleSubmit}
          component="form"
          mt={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            size="small"
            label="Full Name"
            variant="outlined"
            margin="normal"
            fullWidth
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            sx={{ maxHeight: "30px" }}
          />
          <TextField
            size="small"
            label="Profession"
            variant="outlined"
            margin="normal"
            fullWidth
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            sx={{ maxHeight: "30px" }}
          />
          <TextField
            size="small"
            label="Professionals body associated with"
            variant="outlined"
            margin="normal"
            fullWidth
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            sx={{ maxHeight: "30px" }}
          />
          <TextField
            size="small"
            label="Registration number"
            variant="outlined"
            margin="normal"
            fullWidth
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            sx={{ maxHeight: "30px" }}
          />
          <TextField
            size="small"
            label="Company name"
            variant="outlined"
            margin="normal"
            fullWidth
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            sx={{ maxHeight: "30px" }}
          />
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <TextField
              size="small"
              label="Country Code"
              variant="outlined"
              margin="normal"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              sx={{ flex: 1, maxHeight: "30px" }}
            />
            <TextField
              size="small"
              label="Contact Number"
              variant="outlined"
              margin="normal"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              sx={{ flex: 2, maxHeight: "30px" }}
            />
          </Box>
          <FormControl mt={2} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              size="small"
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              sx={{ maxHeight: "30px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="outlined" sx={{marginTop: 2}}>
            <InputLabel htmlFor="outlined-adornment-verify-password">
              Verify Password
            </InputLabel>
            <OutlinedInput
              size="small"
              label="Verify Password"
              id="outlined-adornment-verify-password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              fullWidth
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              sx={{ maxHeight: "30px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="emailUpdates"
                  checked={formData.emailUpdates}
                  onChange={handleInputChange}
                />
              }
              label="Sign up for email updates"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAndConditions"
                  checked={formData.termsAndConditions}
                  onChange={handleInputChange}
                />
              }
              label="Accept terms and conditions"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Continue
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default RegisterProfile;
