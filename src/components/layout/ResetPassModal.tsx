import {useState} from "react";
// Material ui
import {
    Backdrop,
    Box,
    Divider,
    Fade,
    Grid,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    Paper,
    CircularProgress
} from "@mui/material";
// Project imports
import AppIcon from "@/components/global/AppIcon";
import EuclidText from "@/components/css-texts/EuclidText";
import * as yup from "yup";
import {useFormik} from "formik";
import {instance as axios} from "@/config/axiosConfig";
import {toast} from "react-toastify";
import PasswordField from "@/components/global/PasswordField";
import AppButton from "@/components/global/AppButton";

const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    confirmPass: yup.string().required("Confirm Password is required"),
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p:2,
};

//====================|| Reset Password Modal ||=====================

const ResetPassModal = () => {
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPass: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true)
            await axios.post('/reset-pass', values).then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    setOpen(false);
                    toast.success(`Updated Successfully.`);
                }
            }).catch(err => {
                console.log(err.response);
                setLoading(false);
                toast.error(`Error: ${err?.response?.data?.error?.message}`)
            })
        },
    });


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {values, handleChange, handleSubmit, touched, errors} = formik
    return (
        <div>
            <ListItemButton onClick={handleOpen}>
                <ListItemIcon>
                    <AppIcon name={'lock'}/>
                </ListItemIcon>
                <ListItemText primary={'Reset Password'}/>
            </ListItemButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Paper sx={style}>
                            <EuclidText align={'center'} text={'Reset Password'} sx={{fontWeight: 600,mb:1}}/>
                            <form autoComplete={"off"} noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <PasswordField
                                        required
                                        label={'Password'}
                                        id={'password'}
                                        value={values.password}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <PasswordField
                                        required
                                        label={'Confirm Password'}
                                        id={'confirmPass'}
                                        value={values.confirmPass}
                                        onChange={handleChange}
                                        error={touched.confirmPass && Boolean(errors.confirmPass)}
                                        helperText={touched.confirmPass && errors.confirmPass}
                                    />
                                </Grid>
                                <Box sx={{width: 120, m: '10px auto'}}>
                                    <AppButton
                                        label={"Change"}
                                        type={'submit'}
                                        sx={{borderRadius: 1, width: 100}}
                                        startIcon={loading && <CircularProgress color={'inherit'} size={'15px'}/>}
                                    />
                                </Box>
                            </Grid>
                            </form>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}
export default ResetPassModal;