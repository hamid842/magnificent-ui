// Material ui
import InputIcon from '@mui/icons-material/Input';
import {Box, Button, Divider, Stack} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import AppTextField from "@/components/global/AppTextField";
import colors from "@/assets/colors";
import AuthWrapper from "@/auth/AuthWrapper";
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import PasswordField from "@/components/global/PasswordField";


const LoginDialog = () => {
    return (
        <AuthWrapper buttonTitle={'Login'} icon={<InputIcon/>}>
            <EuclidText variant={'h5'} text={'Login'} sx={{fontWeight: 700}} color={colors.navMenuColor}/>
            <Box sx={{width: '100%', my: 2}}>
                <AppTextField label={'Username'} id={'username'} value={""} onChange={() => {
                }}/>
            </Box>
            <PasswordField label={"Password"} sx={{mb:2}}/>
            <AppButton label={"Login"} sx={{borderRadius: 1, width: 100}}
                       startIcon={<LoginIcon fontSize={'small'}/>}/>
            <Button sx={{color: colors.navMenuColor, textTransform: 'none', fontSize: 10}}>Forgot password?</Button>
            <Divider orientation={'vertical'} sx={{height: 20}}/>
            <EuclidText text={"Or"} sx={{mt: 0.5, fontSize: 10}}/>
            <Stack direction={'row'} alignItems={'center'}>
                <SwitzerText text={"Don't have an account?"} sx={{fontSize: 10}}/>
                <Button sx={{
                    color: colors.mainColor,
                    textTransform: 'none',
                    fontSize: 10,
                    fontWeight: 600
                }}>Register</Button>
            </Stack>
        </AuthWrapper>
    );
}
export default LoginDialog;
