import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import { DeleteForeverRounded as DeleteIcon } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
  DeleteFab: {
    backgroundColor: red[300],
    color: 'white'
  }
}));

export default ({ ...props }) => {
  const classes = useStyles();
  return (
    <Fab
      {...props}
      color="primary"
      aria-label="delete"
      className={classes.DeleteFab}
    >
      <DeleteIcon />
    </Fab>
  );
};
