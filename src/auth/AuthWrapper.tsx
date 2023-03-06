import * as React from "react";
import {forwardRef, memo, ReactElement, ReactNode, Ref, SyntheticEvent, useContext, useState} from "react";
// Material ui
import {
    Box,
    Dialog,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Slide,
    Stack,
    Tab,
    TabProps,
    Tabs
} from '@mui/material';
import {TransitionProps} from '@mui/material/transitions';
import {styled, useTheme} from "@mui/material/styles";
import {AppRegistration, Login} from "@mui/icons-material";
// Project imports
import colors from "@/assets/colors";
import Image from "next/image";
import logo from "../../public/dashboard/png5.png";
import LoginDialog from "@/auth/login/LoginDialog";
import RegisterDialog from "@/auth/register/RegisterDialog";
// Third Party
import SwipeableViews from 'react-swipeable-views';
import {AuthContext} from "../../context/AuthContext";
import AppButton from "@/components/global/AppButton";
import AppIcon from "@/components/global/AppIcon";

export const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

interface StyledTabsProps {
    children?: ReactNode;
    value: number;
    onChange: (event: SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan"/>}}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: colors.navMenuColor,
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: (StyledTabProps & TabProps)) => (
    <Tab disableRipple {...props} />
))(({theme}) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}

type AuthWrapperProps = {
    isHeader: boolean,
    label: string
}


const AuthWrapper = ({isHeader, label}: AuthWrapperProps) => {
    const theme = useTheme();
    const {user} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // setOpenLoginDialog(false);
        // setOpenRegisterDialog(false);
    };

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    return (
        <div>
            {!user && !isHeader && <AppButton
                label={label}
                sx={{
                    backgroundColor: "#A47C30",
                    textTransform: 'capitalize',
                    color: 'white',
                    my: 2,
                    border: 'none',
                    '&:hover': {
                        backgroundColor: "#A47C30",
                        border: 'none'
                    }
                }} onClick={handleClickOpen}/>
            }
            {
                isHeader &&
                <ListItemButton onClick={handleClickOpen}>
                    <ListItemIcon>
                        <AppIcon name={'login'}/>
                    </ListItemIcon>
                    <ListItemText primary={'Sign in'}/>
                </ListItemButton>
            }

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Stack direction={'column'} sx={{width: 350, px: 2}} alignItems={'center'}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="icon tabs example">
                        <StyledTab icon={<Login sx={{color: colors.navMenuColor}}/>} aria-label="phone" label={""}/>
                        <StyledTab icon={<AppRegistration sx={{color: colors.navMenuColor}}/>} aria-label="favorite"
                                   label={""}/>
                    </StyledTabs>
                    <Box my={2}>
                        <Image src={logo} alt={'Logo'} width={180} height={40}/>
                    </Box>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel index={0} value={value}>
                            <LoginDialog setValue={setValue} setOpen={setOpen}/>
                        </TabPanel>
                        <TabPanel index={1} value={value}>
                            <RegisterDialog setValue={setValue} setOpen={setOpen}/>
                        </TabPanel>
                    </SwipeableViews>
                </Stack>
            </Dialog>
        </div>
    );
}
export default memo(AuthWrapper);
