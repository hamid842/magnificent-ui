import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AuthWrapper from "@/auth/AuthWrapper";
import {Alert, AlertTitle, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import AppTextField from "@/components/global/AppTextField";
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import PasswordField from "@/components/global/PasswordField";
import {switzerFont} from "@/assets/fonts";
import { useState } from 'react';
import { instance as axios} from "@/config/axiosConfig";
import { AxiosError } from 'axios';

// The id of form fields
enum EForm {
    USERNAME = 'username',
    FULL_NAME = 'fullName',
    EMAIL = 'email',
    PHONE = 'phone',
    PASS = 'password',
    PASS_CONFIRM = 'password_confirm',
    AGREE = 'agree'
};

// Type of state that holds the form data
// NOTE: Make sure all the fields in the below type, are the same as values in the above enum
type TForm = {
    username: string,
    fullName: string,
    email: string,
    phone: string,
    password: string,
    password_confirm: string,
    agree: boolean
};

const RegisterDialog = () => {

    const [errors, setErrors] = useState<string[]>([]);

    // -----------------------------------------------------------------------------------

    const [form, setForm] = useState<TForm>({
        username: '',
        fullName: '',
        email: '',
        phone: '',
        password: '',
        password_confirm: '',
        agree: false
    });

    // -----------------------------------------------------------------------------------

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: EForm) => {
        const value = e.target.value;
        setForm((prevForm) => {
            if (id === EForm.AGREE) {
                return { 
                    ...prevForm,
                    [EForm.AGREE]: !prevForm.agree
                };
            }
            return {
                ...prevForm,
                [id]: value
            };
        });
    };

    // -----------------------------------------------------------------------------------

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        //--------------------------------------------
        // If there are any errors, skip
        if (errors.length) return;
        //--------------------------------------------
        // Check passwords
        if (form.password !== form.password_confirm) {
            return setErrors((prev) => [...prev, 'Passwords Don\'t Match'])
        }
        //--------------------------------------------
        try {
            const postData = {
                email: form.email,
                username: form.username,
                password: form.password,
                fullName: form.fullName,
                // phoneNumber: form.phone
            };
            const { data } = await axios.post('/auth/local/register', postData);
            console.log(JSON.stringify(data, null, 2));
        } catch (err) {
            // Is the error an AxiosError?
            if (err instanceof AxiosError) {
                // For Validation Errors, the path to error messages is: err.response.data.error.details.errors
                const { error } = err.response?.data;
                if (error && error.name === 'ValidationError') {
                    for (const e of error.details.errors) {
                        // Add errors to state
                        setErrors((prev) => [...prev, e.message])
                    }
                }
            }
        }
    };

    // -----------------------------------------------------------------------------------

    return (
        <AuthWrapper buttonTitle={'Register'} icon={<AppRegistrationIcon/>}>
            {/* ------------------------------------------------------------------------------------- */}
            {/* Title */}
            <EuclidText variant={'h5'} text={'Create a Magnificent account'} sx={{fontSize: 18, fontWeight: 700}} color={colors.navMenuColor}/>
            {/* ------------------------------------------------------------------------------------- */}
            {/* Error */}
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>
            {/* ------------------------------------------------------------------------------------- */}
            <form onSubmit={handleSubmit}>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Username */}
                <Box sx={{width: '100%', my: 2}}>
                    <AppTextField required label={'Username'} id={EForm.USERNAME} value={form.username} onChange={(e) => { handleChange(e, EForm.USERNAME); }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Full Name */}
                <Box sx={{width: '100%', mb: 2}}>
                    <AppTextField required label={'Full Name'} id={EForm.FULL_NAME} value={form.fullName} onChange={(e) => { handleChange(e, EForm.FULL_NAME); }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Email */}
                <Box sx={{width: '100%', mb: 2}}>
                    <AppTextField required label={'Email'} type={'email'} id={EForm.EMAIL} value={form.email} onChange={(e) => { handleChange(e, EForm.EMAIL); }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Phone Number */}
                <Box sx={{width: '100%', mb: 2}}>
                    <AppTextField required label={'Phone Number'} type={'tel'} id={EForm.PHONE} value={form.phone} onChange={(e) => { handleChange(e, EForm.PHONE); }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Password */}
                <Stack sx={{mb:2}} direction={'row'} spacing={2}>
                    {/* Main Password */}
                    <PasswordField required label={"Password"} id={EForm.PASS} value={form.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e, EForm.PASS); }} />
                    {/* Password Confirm */}
                    <PasswordField required label={"Confirm Password"} id={EForm.PASS_CONFIRM} value={form.password_confirm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e, EForm.PASS_CONFIRM); }} />
                </Stack>
                {/* ------------------------------------------------------------------------------------- */}
                {/* I Agree... */}
                <Stack direction={'row'}>
                    {/* Checkbox */}
                    <FormGroup>
                        <FormControlLabel control={<Checkbox required checked={form.agree} id={EForm.AGREE}  onChange={(e) => { handleChange(e, EForm.AGREE); }} size={'small'} />} label="I agree with" />
                    </FormGroup>
                    {/* Button */}
                    <Button sx={{ color: colors.mainColor, textTransform: 'none', fontSize: 12, fontWeight: 600, pl:0 }}>
                        terms & conditions
                    </Button>
                </Stack>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Button */}
                <AppButton label={"Register"} type={'submit'} sx={{borderRadius: 1, width: 120}} startIcon={<AppRegistrationIcon fontSize={'small'}/>}/>
            </form>
            {/* ------------------------------------------------------------------------------------- */}
            {/* OR */}
            <EuclidText text={"Or"} sx={{mt: 0.5, fontSize: 10}}/>
            {/* ------------------------------------------------------------------------------------- */}
            {/* Login Text */}
            <Stack direction={'row'} alignItems={'center'}>
                <SwitzerText text={"Already have an account?"} sx={{fontSize: 10}}/>
                <Button sx={{ color: colors.mainColor, textTransform: 'none', fontSize: 10, fontWeight: 600, pl:0 }}>
                    Login
                </Button>
            </Stack>
            {/* ------------------------------------------------------------------------------------- */}
        </AuthWrapper>
    );
}
export default RegisterDialog;
