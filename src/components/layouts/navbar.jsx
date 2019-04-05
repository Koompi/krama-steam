import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Helmet } from "react-helmet";
import Index from "../index";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

function Navbar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Helmet>
        <link rel="stylesheet" href="/css/style.css" />
      </Helmet>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

          <ListItem className="btnPadding" button>
            <img
              src="img/categories/development.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Development</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/business.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Business</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/IT.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">IT & Software</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/office.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Office Productivity</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/personal.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Personal Development</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/design.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Design</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/marketing.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Marketing</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/health.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Health & Fitness</p>
          </ListItem>
          <ListItem className="btnPadding" button>
            <img
              src="img/categories/music.png"
              alt="koompi steam"
              height="40"
              className="koompi-steam-logo"
            />
            <p className="MuiTypography-subheading">Music</p>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
          <Index />
        </div>
      </main>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
