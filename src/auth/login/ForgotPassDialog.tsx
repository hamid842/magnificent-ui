import {useState} from "react";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import colors from "@/assets/colors";
import * as yup from "yup";
import {useFormik} from "formik";
import {instance as axios} from "@/config/axiosConfig";
import {toast} from "react-toastify";

const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email").required("Email is required"),
});

const ForgotPassDialog = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true)
            await axios.post('/auth/forgot-password', {data: {...values}}).then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    setOpen(false);
                    toast.info(`Please check your email.`);
                }
            }).catch(err => {
                console.log(err.response);
                setLoading(false);
                toast.error(`Error: ${err?.response?.data?.error?.message}`)
            })
        },
    });

    return (
        <>
            <Button
                sx={{color: colors.navMenuColor, textTransform: 'none', fontSize: 10}} onClick={handleOpen}>
                Forgot password?
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Forgot Password</DialogTitle>
                <form noValidate autoComplete={'off'} onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            To reset the password of account, please enter your email address here. We
                            will send the reset password link.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            fullWidth
                            required
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            variant="standard"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={'submit'}
                                startIcon={loading && <CircularProgress color={'inherit'} size={15}/>}>Send</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}
export default ForgotPassDialog;