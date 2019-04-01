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

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  root: {
    flexGrow: 1,
    backgroundColor: "red"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Login extends React.Component {
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
        {/* <NavbarLogin /> */}
        <div className="bodyLogin">
          <div className="container">
            <center>
              <h1>Sign in</h1>
              <p className="kramaAccountDesc">Use you KRAMA STEAM Account</p>
            </center>
            <form>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={16}
              >
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-full-width inputBorder"
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="email"
                    autoFocus
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
                  <a href="#" className="forgotAccount">
                    Forgot your account?
                  </a>
                </Grid>
                <br />
                <br />
                <Grid item xs={12} sm={7}>
                  <Grid item xs={12} sm={6}>
                    <Link to="/register" className="forgotAccount">
                      Create Account
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="loginBtn"
                  >
                    Login
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

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Login;
