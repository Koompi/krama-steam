import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
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
                  id="outlined-full-width"
                  label="Email"
                  placeholder="example@gmail.com"
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
                  placeholder="*********"
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
              <Grid item xs={12} sm={6}>
                <Grid item xs={12} sm={6}>
                  <Link to="/register" className="forgotAccount">
                    Create Account
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" color="primary" className={classes.button}>
                  Login
                  </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div >

    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
