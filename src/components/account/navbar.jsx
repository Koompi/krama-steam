import React, {Component} from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

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

class NavbarLogin extends Component {
  state = {};
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className="drag" style={{background: "red"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit" className="loginFloat">
            <img
              src="img/icons/minimize.png"
              height="30px"
              width="30px"
              alt=""
            />
          </Button>
          <Button color="inherit" className="loginFloat">
            <img
              src="img/icons/zoomout.png"
              height="30px"
              width="30px"
              alt=""
            />
          </Button>
          <Button color="inherit" className="loginFloat">
            <img src="img/icons/close.png" height="30px" width="30px" alt="" />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles) (NavbarLogin);
