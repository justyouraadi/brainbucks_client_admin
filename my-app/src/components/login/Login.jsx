import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <div
        className="container-fluid overflow-hidden "
        style={{ height: "100vh", width: "100%", }}
      >
        <div className="row p-0 h-100">
          <div
            className="col-8 p-0 h-100 position-relative d-flex justify-content-center align-items-center text-white"
            style={{
              background:
                "linear-gradient(180deg, #0575E6 0%, #02298A 84.79%, #021B79 100%)",
            }}
          >

          <div >
            <h1>BrainBucks</h1>
            <p className="text-center" >Win the Competition</p>
          </div>

          
            <div className="position-absolute" style={{width:"357px",height:"357px",border:"1px solid #0575E6",borderRadius:"50%",left:"-25%",bottom:"-25%"}} >
            </div>
            <div className="position-absolute" style={{width:"357px",height:"357px",border:"1px solid #0575E6",borderRadius:"50%",left:"-20%",bottom:"-20%"}} >
            </div>
            <div className="position-absolute" style={{width:"357px",height:"357px",border:"1px solid #0575E6",borderRadius:"50%",left:"-15%",bottom:"-15%"}} >
            </div>
          </div>

          <div className="col-4 h-100 d-flex align-items-center justify-content-center">
            <div className="w-100 px-4" >
              <h1
                style={{
                  fontFamily: "Inter",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontWeight: 700,
                }}
              >
                Login
              </h1>
              <p style={{color:"#969696",fontFeatureSettings:"'clig' off, 'liga' off"}}>Please login to continue to your account.</p>
            <div>
            <TextField
              id="outlined-email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              type={"email"}
              fullWidth={true}
              // helperText="Incorrect email."
              InputProps={{
                    style: { borderRadius: "10px" },
                  }}
            />
            <TextField
              id="outlined-password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              className="mt-4"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth={true}
              InputProps={{
                style: { borderRadius: "10px" },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
                  }}
            />
            <Button
              // onClick={signUp}
              className="py-3 mt-4"
              style={{background:"linear-gradient(180deg, #0575E6 0%, #02298A 84.79%, #021B79 100%)"}}
              sx={{ py: 2 }}
              variant="contained"
              fullWidth={true}
            >
              SignUp
            </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
