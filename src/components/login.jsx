import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Login extends React.Component {
  state = {
    name: 'Cat in the Hat',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {/* <div className={classes.root}> */}
          <AppBar position="static">
            <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
              <Button color="inherit" className="loginFloat">
                <i className="fas fa-times"></i>
              </Button>
            </Toolbar>
          </AppBar>
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
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-full-width"
                    label="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <a href="#" className="forgotAccount">
                    Forgot your account?
                  </a>
                </Grid>
                <br /><br />
                <Grid item xs={12} sm={7}>
                  <Grid item xs={12} sm={6}>
                    <Link to="/register" className="forgotAccount">
                      Create Account
                  </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Button variant="outlined" color="primary" className="loginBtn">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div >
      </React.Fragment>

    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
