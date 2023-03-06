import {ReactNode, useState} from "react";
// Next.js
import {useRouter} from "next/router";
// Material ui
import {Box, CircularProgress, Grid, Paper} from "@mui/material";
// Third party
import * as yup from "yup";
import {useFormik} from "formik";
import {toast} from "react-toastify";
// Project imports
import {instance as axios} from "@/config/axiosConfig";
import EuclidText from "@/components/css-texts/EuclidText";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import AppContainer from "@/components/global/AppContainer";
import PasswordField from "@/components/global/PasswordField";

const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup.string().required("Confirmation Password is required"),
});

//=====================|| Forgot Password Redirect Page ||=============================

const ResetPasswordPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            code: "privateCode",
            password: "",
            passwordConfirmation: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true)
            await axios.post('/auth/reset-password', {data: {...values}}).then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    toast.success(`Password Updated Successfully. You can login with new password.`);
                    router.push('/');
                }
            }).catch(err => {
                console.log(err.response);
                setLoading(false);
                toast.error(`Error: ${err?.response?.data?.error?.message}`)
            })
        },
    });
    const {values, handleChange, handleSubmit, touched, errors} = formik
    return (
        <Box sx={{mt: 20}}>
            <AppContainer>
                <Paper sx={{p: 2, m: 'auto', width: {xs: '100%', sm: '100%', md: '50%', lg: '50%'}}}>
                    <EuclidText align={'center'} text={'Reset Password'} sx={{fontWeight: 600, mb: 1}}/>
                    <form autoComplete={"off"} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <PasswordField
                                    required
                                    label={'New Password'}
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
                                    id={'passwordConfirmation'}
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                                    helperText={touched.passwordConfirmation && errors.passwordConfirmation}
                                />
                            </Grid>
                            <Box sx={{width: 120, m: '10px auto'}}>
                                <AppButton
                                    label={"Submit"}
                                    type={'submit'}
                                    sx={{borderRadius: 1, width: 100}}
                                    startIcon={loading && <CircularProgress color={'inherit'} size={'15px'}/>}
                                />
                            </Box>
                        </Grid>
                    </form>
                </Paper>
            </AppContainer>
        </Box>
    )
}
export default ResetPasswordPage;

ResetPasswordPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>