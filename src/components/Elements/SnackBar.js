import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';

const StyledSnackBar = (props) => {
    const {
        open,
        autoHide,
        onClose,
        message,
        action,
        severity,
    } = props
    return (
        <Snackbar
            anchorOrigin={({ vertical: 'top', horizontal: 'right' })}
            open={open}
            autoHideDuration={autoHide}
            onClose={onClose}
            message={message}
            action={action}
            disableWindowBlurListener={false}
        // className={classes.customSnackBar}
        >
            <Alert onClose={onClose} severity={severity || "success"} >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default StyledSnackBar