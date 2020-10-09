import {
    makeStyles,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    DialogTitle,
    Button
} from '@material-ui/core'

interface Prop {
    open: boolean,
    onClose?: any,
    yes?: any
}

const QuizDialog = (props: Prop) => {

    return (
        <div>
            <Dialog
                open={props.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{"Do you want to create this quiz"}</DialogTitle>
                <DialogActions>
                    <Button onClick={props.yes}>
                        Yes
                    </Button>
                    <Button onClick={props.onClose}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default QuizDialog