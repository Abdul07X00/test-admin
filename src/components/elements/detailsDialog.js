import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Divider,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: 'visible',
    height: '514px'
  }
}));

const DetailsDialog = ({ open, onClose, popupData }) => {

  const onClickHandler = () => {
    onClose();
  };

  const classes = useStyles();
  
  return (
    <Dialog
      open={open}
      onClose={onClickHandler}
      aria-labelledby="form-dialog-title"
      PaperProps={{ style: { overflowY: "visible", width: "1000px" } }}
    >
      <DialogTitle id="form-dialog-title">{popupData?.title}</DialogTitle>
      <DialogContent className={classes.root}>
        <Grid container spacing={2}>
          <DialogTitle id="form-dialog-title">{popupData?.description}</DialogTitle>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={onClickHandler} color="primary">
          {" "}
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
