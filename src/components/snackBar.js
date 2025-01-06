import { Snackbar } from "@mui/material"


// A Snackbar in Material-UI is a UI component used to provide brief feedback or notifications to the user.
// It appears at the bottom or top of the screen as a small popup and disappears automatically after a set duration
//  or when dismissed by the user.


function SnackBar({ error, setError, errorMessage }) {

    const handleClose = () => {
        setError(false)
    }

    return (
        <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={handleClose}
            message={errorMessage}

        />
    )
}
export default SnackBar;