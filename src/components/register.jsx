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

class Register extends React.Component {
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
                        <h1>Create Your Account </h1>
                    </center>
                    <form>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={16}
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
                                    autoFocus
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
                                    id="outlined-full-width"
                                    label="Email"
                                    placeholder="example@gmail.com"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
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
                                <span>Have account? </span>
                            </Grid>
                            <br /><br />
                            <Grid item xs={12} sm={6}>
                                <Link to="/login" className="forgotAccount">Login</Link>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" color="primary" className={classes.button}>Register</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div >

        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
