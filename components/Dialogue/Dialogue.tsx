import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Box} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export interface detailedInformationProps {
  title: string,
  descriptionText: string
  location?: string,
  neededHelpers?: number,
}

export default function CustomizedDialogs(props: detailedInformationProps) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Mehr Informationen
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="row" pb={0.5} m={0} bgcolor="background.paper">
            <Box p={1}>
              Standort:
            </Box>
            <Box p={1} bgcolor="grey.300">
              {props.location}
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" pb={0.5} m={0} bgcolor="background.paper">
            <Box p={1}>
              Benötigte Helfer:
            </Box>
            <Box p={1} bgcolor="grey.300">
              {props.neededHelpers}
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" pb={0.5} m={0} bgcolor="background.paper">
            <Box p={1}>
              Beschreibung:
            </Box>
            <Box p={1} bgcolor="grey.300">
              {props.descriptionText}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Landwirt kontaktieren
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
