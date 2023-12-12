import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {base_url} from ".././env"
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const loginApi = async()=>{
    try{
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${base_url}/admin/authentication/login`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status==1){
      localStorage.setItem("brainbucks_token",result.token);
      localStorage.setItem("username",result.userName);
      Navigate('/PreRecorded');
    }
    else if (result.status == "CUSTOM_ERR") { 
      toast.error(result.Backend_Error); }
    else if (result.status === 'VAL_ERR') { 
      toast.error(result.Backend_Error) 
    } 
    else { 
      console.log(result) 
    }
  })
  .catch(error => console.log('error', error));
    }catch(e){
      console.log(e)
    }
  }

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
             onClick={() => {
                if (email <= 0) {
                  toast.error("pls enter email");
                } else if (password <= 0) {
                  toast.error("pls enter password");
                } else {
                  loginApi();
                }
              }}
              className="py-3 mt-4"
              style={{background:"linear-gradient(180deg, #0575E6 0%, #02298A 84.79%, #021B79 100%)"}}
              sx={{ py: 2 }}
              variant="contained"
              fullWidth={true}
            >
              Login
            </Button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-right" />
    </>
  );
};

export default Login;
