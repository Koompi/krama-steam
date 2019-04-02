import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import NavbarLogin from "./account/navbar";

// Import CSS in ReactJS
// import "./login.css";
import { Helmet } from "react-helmet";

class Register extends React.Component {
  state = {
    name: "Cat in the Hat",
    showPassword: false,
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    // const { classes } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <link rel="stylesheet" href="/css/login.css" />
        </Helmet>
        {/* <NavbarLogin /> */}
        <div className="bodyLogin">
          <div className="container">
            <center>
              <h1>Register</h1>
              <p className="kramaAccountDesc">
                Create your KRAMA STEAM Account
              </p>
            </center>
            <form>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={16}
                autoFocus
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-full-width"
                    label="First Name"
                    // placeholder="koompi"
                    fullWidth
                    autoFocus
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Last Name"
                    // placeholder="krama"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-full-width inputBorder"
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="email"
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-adornment-password"
                    variant="outlined"
                    type={this.state.showPassword ? "text" : "password"}
                    label="Password"
                    fullWidth
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <p>Have account?</p>
                </Grid>
                <br />
                <br />
                <Grid item xs={12} sm={7}>
                  <Grid item xs={12} sm={6}>
                    <Link to="/login" className="forgotAccount">
                      Login
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="loginBtn"
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Register;
