import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Add } from '@material-ui/icons';

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state

    return <Fragment>
      <Button variant="fab" onClick = { this.handleToggle } mini>
        <Add />
      </Button>

      <Dialog
        open = { open }
        onClose = {this.handleClose}
      >
        <DialogTitle id="form-dialog-title">
          Create a new Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <form>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant = "raised">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
}
  
