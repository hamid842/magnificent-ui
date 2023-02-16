import {MouseEvent, useContext, useState} from "react";
// next.js
import Image from "next/image";
import {useRouter} from "next/router";
// material-ui
import {
    AppBar,
    Box,
    Button,
    ButtonProps,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {styled} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
// project imports
import logo from "../../../public/main-logo.png";
import colors from '../../assets/colors'
import {switzerFont} from "@/assets/fonts";
import AppButton from "@/components/global/AppButton";
import LoginDialog from "@/auth/login/LoginDialog";
import RegisterDialog from "@/auth/register/RegisterDialog"
import AuthWrapper from "@/auth/AuthWrapper";
import {AuthContext} from "../../../context/contexts";

const pages = [
    {label: 'Last Minute Deals', path: "/last-minute-deals"},
    {label: 'Blog', path: '/blogs'},
    {label: 'About us', path: '/about'},
    {label: 'Contacts', path: '/contacts'}
];
const loggedInSettings = ['Dashboard', 'Logout'];

export const ColorButton = styled(Button)<ButtonProps>({
    color: "white",
    backgroundColor: colors.mainColor,
    '&:hover': {
        backgroundColor: colors.mainColor,
    },
});

//========================|| Header ||=============================//

export default function Header() {
    const router = useRouter();
    const {user} = useContext(AuthContext)
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const menuItemsStyles = {
        fontSize: 16,
        fontWeight: 500,
        ml: 1,
        display: 'block',
        textTransform: "capitalize",
        color: colors.navMenuColor,
        borderBottom: `2px solid transparent`,
        '&:hover': {
            color: colors.mainColor,
            borderRadius: 0,
            background: 'transparent',
            borderBottom: `2px solid ${colors.mainColor}`,

        }
    }

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e: any) => {
        setAnchorElNav(null);
        router.push(e.target.value).then(() => {
        });
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            width: '100vw',
            px: 1,
            py: 2,
            position: 'absolute',
            top: 0,
            zIndex: 1000,
            background: "transparent",
            boxShadow: "none"
        }}>
            <Toolbar disableGutters>
                <Box sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                    <Image
                        src={logo}
                        alt={'Logo'}
                        width={210}
                        height={98}
                        style={{cursor: 'pointer'}}
                        onClick={() => router.push('/')}
                    />
                </Box>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.label} value={page.path} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" sx={{fontSize: 18}}>{page.label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{
                    flexGrow: 1,
                    ml: 2,
                    display: {xs: 'none', md: 'flex'}
                }}>
                    {pages.map((page) => (
                        <Button
                            key={page.label}
                            size={'small'}
                            value={page.path}
                            onClick={handleCloseNavMenu}
                            className={switzerFont.className}
                            sx={menuItemsStyles}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
                {/* ========================= || Setting (when click on header image) || ====================== */}
                <Box sx={{flexGrow: 0,mr:2}}>
                    <AppButton label={'Rent Your Place'} onClick={() => router.push('/rent-your-place')}/>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} aria-haspopup={true}>
                            <Image src={'/profile.png'} alt={"Profile Image"} width={40} height={40}
                                   style={{borderRadius: 25}}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {!user ? <MenuItem onClick={handleCloseUserMenu}>
                            <AuthWrapper isHeader={true}/>
                        </MenuItem> : <>
                        <Button>Logout</Button>
                        </>}
                        {/*<MenuItem onClick={handleCloseUserMenu}>*/}
                        {/*    <RegisterDialog/>*/}
                        {/*</MenuItem>*/}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}