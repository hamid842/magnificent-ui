import {ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useContext, useState} from 'react';
// Material ui
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import AppTextField from "@/components/global/AppTextField";
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import PasswordField from "@/components/global/PasswordField";
import {instance as axios} from "@/config/axiosConfig";
// Third party
import {AxiosResponse, isAxiosError} from 'axios';
import {AuthContext} from "../../../context/AuthContext";

type TAxiosErrorResponse = {
    status: number,
    name: 'ValidationError' | 'ApplicationError',
    message: string,
    details: {
        errors: {
            path: string[],
            message: string,
            name: string
        }[]
    }
};

// The id of form fields
enum EForm {
    USERNAME = 'username',
    FULL_NAME = 'fullName',
    EMAIL = 'email',
    PHONE = 'phoneNumber',
    PASS = 'password',
    PASS_CONFIRM = 'password_confirm',
    AGREE = 'agree'
}

// Type of state that holds the form data
// NOTE: Make sure all the fields in the below type, are the same as values in the above enum
type TForm = {
    username: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    password: string,
    password_confirm: string,
    agree: boolean
};

// NOTE: Make sure all the fields in the below type, are the same as values in the above enum
type TFormError = {
    username?: string,
    fullName?: string,
    email?: string,
    phoneNumber?: string,
    password?: string,
    password_confirm?: string,
};

/**
 * Used to make errors returned by API prettier
 */
const prettyMessage = (input: string): string => {
    // Capitalize each word (Title Case)
    let output = input
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    output = output.replaceAll('Fullname', 'Full Name');
    output = output.replaceAll('Phonenumber', 'Phone Number');
    return output;
}

type RegisterDialogProps = {
    setValue: Dispatch<SetStateAction<number>>
    setOpen: Dispatch<SetStateAction<boolean>>
}

const RegisterDialog = ({setValue,setOpen}: RegisterDialogProps) => {
const {setUser} = useContext(AuthContext)
    const [formError, setFormError] = useState<TFormError>({});

    // -----------------------------------------------------------------------------------

    const [form, setForm] = useState<TForm>({
        username: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        password_confirm: '',
        agree: false
    });

    // -----------------------------------------------------------------------------------

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: EForm) => {
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

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        //--------------------------------------------
        setFormError({});
        //--------------------------------------------
        // Check passwords
        if (form.password !== form.password_confirm) {
            return setFormError((prev) => {
                return {
                    ...prev,
                    [EForm.PASS_CONFIRM]: 'Passwords Don\'t Match'
                };
            });
        }
        //--------------------------------------------
        const postData = {
            email: form.email,
            username: form.username,
            password: form.password,
            fullName: form.fullName,
            phoneNumber: form.phoneNumber
        };
        axios.post('/auth/local/register', postData)
            .then((response: AxiosResponse) => {
                if(response.status === 200) {
                    const {data} = response;
                    // console.log(JSON.stringify(data, null, 2));
                    // TODO: Save JWT in local storage
                    localStorage.setItem('JWT', data['jwt']);
                    setUser(data.user);
                    setOpen(false);
                }
            })
            .catch((err) => {
                if (!isAxiosError(err)) return console.log(`[Error in API] -> ${err}`);
                //------------------------------------------------------------------------------
                // For Validation Errors, the path to error messages is: err.response.data.error.details.errors
                const error: TAxiosErrorResponse = err.response?.data.error;
                if (!error) return;
                if (error.name === 'ValidationError') {
                    // There was a Validation problem with one of the fields
                    let fieldErrors = {};
                    for (const e of error.details.errors) {
                        const fieldId = e.path[0];
                        fieldErrors = {
                            ...fieldErrors,
                            [fieldId]: prettyMessage(e.message)
                        };
                    }
                    // Now, set all the errors to the state
                    setFormError((prev) => {
                        return {
                            ...prev,
                            ...fieldErrors
                        };
                    });
                } else if (error.name === 'ApplicationError') {
                    // Happends when we use an already existing username or email
                    setFormError((prev) => {
                        return {
                            ...prev,
                            [EForm.EMAIL]: error.message,
                            [EForm.USERNAME]: error.message
                        };
                    });
                }
            });


    };

    return (
        <>
            {/* Title */}
            <EuclidText variant={'h5'} text={'Create a Magnificent account'} sx={{fontSize: 18, fontWeight: 700}}
                        color={colors.navMenuColor}/>
            {/* ------------------------------------------------------------------------------------- */}
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Username */}
                <Box sx={{width: '100%', my: 2}}>
                    <AppTextField
                        required
                        error={!!formError.username}
                        helperText={formError.username || ''}
                        label={'Username'}
                        id={EForm.USERNAME}
                        value={form.username}
                        onChange={(e) => {
                            handleChange(e, EForm.USERNAME);
                        }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Full Name */}
                <Box sx={{width: '100%', mb: 2}}>
                    <AppTextField
                        required
                        error={!!formError.fullName}
                        helperText={formError.fullName || ''}
                        label={'Full Name'}
                        id={EForm.FULL_NAME}
                        value={form.fullName}
                        onChange={(e) => {
                            handleChange(e, EForm.FULL_NAME);
                        }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Email */}
                <Box sx={{width: '100%', mb: 2}}>
                    <AppTextField
                        required
                        error={!!formError.email}
                        helperText={formError.email || ''}
                        label={'Email'}
                        type={'email'}
                        id={EForm.EMAIL}
                        value={form.email}
                        onChange={(e) => {
                            handleChange(e, EForm.EMAIL);
                        }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Phone Number */}
                <Box sx={{width: '100%', mb: 2}}>
                    <AppTextField
                        required
                        error={!!formError.phoneNumber}
                        helperText={formError.phoneNumber || ''}
                        label={'Phone Number'}
                        type={'tel'}
                        id={EForm.PHONE}
                        value={form.phoneNumber}
                        onChange={(e) => {
                            handleChange(e, EForm.PHONE);
                        }}/>
                </Box>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Password */}
                <Stack sx={{mb: 2}} direction={'row'} spacing={2}>
                    {/* Main Password */}
                    <PasswordField
                        required
                        error={!!formError.password}
                        helperText={formError.password || ''}
                        label={"Password"}
                        id={EForm.PASS}
                        value={form.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChange(e, EForm.PASS);
                        }}/>
                    {/* Password Confirm */}
                    <PasswordField
                        required
                        error={!!formError.password_confirm}
                        helperText={formError.password_confirm || ''}
                        label={"Confirm Pass"}
                        id={EForm.PASS_CONFIRM}
                        value={form.password_confirm}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChange(e, EForm.PASS_CONFIRM);
                        }}/>
                </Stack>
                {/* ------------------------------------------------------------------------------------- */}
                {/* I Agree... */}
                <Stack direction={'row'}>
                    {/* Checkbox */}
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox required checked={form.agree} id={EForm.AGREE} onChange={(e) => {
                                handleChange(e, EForm.AGREE);
                            }} size={'small'}/>} label="I agree with"/>
                    </FormGroup>
                    {/* Button */}
                    <Button sx={{color: colors.mainColor, textTransform: 'none', fontSize: 12, fontWeight: 600, pl: 0}}>
                        terms & conditions
                    </Button>
                </Stack>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Button */}
                <AppButton label={"Register"} type={'submit'} sx={{borderRadius: 1, width: 120}}
                           startIcon={<AppRegistrationIcon fontSize={'small'}/>}/>
            </form>
            {/* ------------------------------------------------------------------------------------- */}
            <Stack alignItems={'center'}>
                {/* OR */}
                <EuclidText text={"Or"} sx={{mt: 0.5, fontSize: 10}}/>
                {/* ------------------------------------------------------------------------------------- */}
                {/* Login Text */}
                <Stack direction={'row'} alignItems={'center'}>
                    <SwitzerText text={"Already have an account?"} sx={{fontSize: 10}}/>
                    <Button sx={{color: colors.mainColor, textTransform: 'none', fontSize: 10, fontWeight: 600, pl: 0}}
                            onClick={() => setValue(0)}>
                        Login
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}
export default RegisterDialog;
