import {Dispatch, SetStateAction, useContext, useState} from 'react';
// Material ui
import {Box, Button, CircularProgress, Divider, Stack} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import AppTextField from "@/components/global/AppTextField";
import colors from "@/assets/colors";
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import PasswordField from "@/components/global/PasswordField";
import {instance as axios} from "@/config/axiosConfig";
// Third party
import {AuthContext} from "../../../context/contexts";
import * as yup from "yup";
import {useFormik} from "formik";
import {toast} from "react-toastify";

const validationSchema = yup.object().shape({
    identifier: yup.string().required("Username/email is required"),
    password: yup.string().required("Password is required"),
});


type LoginDialogProps = {
    setValue: Dispatch<SetStateAction<number>>
    setOpen: Dispatch<SetStateAction<boolean>>
}


const LoginDialog = ({setValue, setOpen}: LoginDialogProps) => {
    const {setUser} = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            identifier: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true)
            await axios.post('/auth/local', values).then(res => {
                if (res.status === 200) {
                    const {jwt, user} = res.data;
                    setUser(user);
                    setLoading(false);
                    localStorage.setItem('JWT', jwt);
                    setOpen(false);
                    toast.success(`You logged in as ${values.identifier}`);
                }
            }).catch(err => {
                console.log(err.response);
                setLoading(false);
                toast.error(`Error: ${err?.response?.data?.error?.message}`)
            })
        },
    });

    const {values, handleChange, touched, errors} = formik

    return (
        <>
            <EuclidText variant={'h5'} text={'Login'} sx={{fontWeight: 700, textAlign: 'center'}}
                        color={colors.navMenuColor}/>
            <form autoComplete={"off"} noValidate onSubmit={formik.handleSubmit}>
                <Box sx={{width: '100%', my: 2}}>
                    <AppTextField
                        required
                        label={'Email/Username'}
                        id={'identifier'}
                        value={values.identifier}
                        onChange={handleChange}
                        error={touched.identifier && Boolean(errors.identifier)}
                        helperText={touched.identifier && errors.identifier}
                    />
                </Box>
                <PasswordField
                    required
                    label={'Password'}
                    id={'password'}
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                />
                <Box sx={{width: 120, m: '10px auto'}}>
                    <AppButton
                        label={"Login"}
                        type={'submit'}
                        sx={{borderRadius: 1, width: 100}}
                        startIcon={
                            loading ? <CircularProgress color={'inherit'} size={'15px'}/> :
                                <LoginIcon fontSize={'small'}/>
                        }
                    />
                </Box>
            </form>
            <Stack alignItems={'center'}>
                <Button
                    sx={{color: colors.navMenuColor, textTransform: 'none', fontSize: 10}}>
                    Forgot password?
                </Button>
                <Divider orientation={'vertical'} sx={{height: 20}}/>
                <EuclidText text={"Or"} sx={{mt: 0.5, fontSize: 10}}/>
                <Stack
                    direction={'row'}
                    alignItems={'center'}>
                    {/* Title */}
                    <SwitzerText
                        text={"Don't have an account?"}
                        sx={{fontSize: 10}}/>
                    {/* Register Button */}
                    <Button sx={{
                        color: colors.mainColor,
                        textTransform: 'none',
                        fontSize: 10,
                        fontWeight: 600
                    }} onClick={() => setValue(1)}>
                        Register
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default LoginDialog;
