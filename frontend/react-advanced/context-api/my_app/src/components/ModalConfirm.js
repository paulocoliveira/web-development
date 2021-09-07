import React from 'react';
import Button from '@material-ui/core/Button';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'

const ModalConfirm = ({ open, onClose, onConfirm, title, message }) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                Confirm
                </Button>
            </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalConfirm