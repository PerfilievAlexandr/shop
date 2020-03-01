import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Cards from '../Cards';
import Delivery from '../Delivery';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    padding: theme.spacing(3),
    marginTop: '65px'
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
        <Switch>
          <Route path='/' component={Cards} exact/>
          <Route path='/delivery' component={Delivery}/>
        </Switch>
    </div>
  );
};

export default Main;
