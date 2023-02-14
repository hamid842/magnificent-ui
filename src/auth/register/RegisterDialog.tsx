import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AuthWrapper from "@/auth/AuthWrapper";
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import AppTextField from "@/components/global/AppTextField";
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import PasswordField from "@/components/global/PasswordField";
import {switzerFont} from "@/assets/fonts";


const RegisterDialog = () => {
    return (
        <AuthWrapper buttonTitle={'Register'} icon={<AppRegistrationIcon/>}>
            <EuclidText variant={'h5'} text={'Create a Magnificent account'} sx={{fontSize: 18, fontWeight: 700}}
                        color={colors.navMenuColor}/>
            <Box sx={{width: '100%', my: 2}}>
                <AppTextField label={'Username'} id={'username'} value={""} onChange={() => {
                }}/>
            </Box>
            <Box sx={{width: '100%', mb: 2}}>
                <AppTextField label={'Email'} type={'email'} id={'username'} value={""} onChange={() => {
                }}/>
            </Box>
            <PasswordField label={"Password"} sx={{mb:2}}/>
            <PasswordField label={"Confirm Password"} sx={{mb:1}}/>
            <FormControl size={'small'}>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio size={'small'} />} label="Want to book" />
                    <FormControlLabel value="male" control={<Radio size={'small'}/>} label="Want to rent my property" />
                </RadioGroup>
            </FormControl>
            <Stack direction={'row'}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox size={'small'} />} label="I agree with" />
                </FormGroup>
                <Button sx={{
                    color: colors.mainColor,
                    textTransform: 'none',
                    fontSize: 12,
                    fontWeight: 600,
                    pl:0
                }}>terms & conditions</Button>
            </Stack>
            <AppButton label={"Register"} sx={{borderRadius: 1, width: 120}}
                       startIcon={<AppRegistrationIcon fontSize={'small'}/>}/>

            <EuclidText text={"Or"} sx={{mt: 0.5, fontSize: 10}}/>
            <Stack direction={'row'} alignItems={'center'}>
                <SwitzerText text={"Already have an account?"} sx={{fontSize: 10}}/>
                <Button sx={{
                    color: colors.mainColor,
                    textTransform: 'none',
                    fontSize: 10,
                    fontWeight: 600,
                    pl:0
                }}>Login</Button>
            </Stack>
        </AuthWrapper>
    );
}
export default RegisterDialog;
