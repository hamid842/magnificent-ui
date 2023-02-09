import {MouseEvent, useState} from "react";
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
import logo from "../../public/logo.png";
import colors from '../assets/colors'
import {switzerFont} from "@/assets/fonts";

const pages = [
    {label: 'Last Minute Deals', path: "/last-minute-deals"},
    {label: 'Blog', path: '/blog'},
    {label: 'About us', path: '/about'},
    {label: 'Contacts', path: '/contacts'}
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e:any) => {
        setAnchorElNav(null);
        router.push(e.target.value).then(() => {});
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            width: '100%',
            px: 1,
            py: 2,
            position: 'absolute',
            top: 0,
            zIndex: 1000,
            background: "transparent",
            boxShadow: "none"

        }}>
            <Toolbar disableGutters>
                <Box sx={{display: {xs: 'none', sm: 'none', lg: 'flex'}}}>
                    <Image
                        src={logo}
                        alt={'Logo'}
                        width={150}
                        height={70}
                        style={{cursor: 'pointer'}}
                        onClick={() => router.push('/')}
                    />
                </Box>
                <Box sx={{flexGrow:1,display: {xs: 'flex', md: 'none'}}}>
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
                    display: {xs: 'none', md: 'flex'},
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {pages.map((page) => (
                        <Button
                            key={page.label}
                            size={'small'}
                            value={page.path}
                            onClick={handleCloseNavMenu}
                            className={switzerFont.className}
                            sx={{
                                fontSize: 14,
                                fontWeight:400,
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
                            }}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
                {/* ========================= || Setting || ====================== */}
                <Box sx={{flexGrow: 0}}>
                    <ColorButton size={'small'} variant={'contained'}
                                 sx={{borderRadius: 25, m: 1, textTransform: "capitalize"}}
                                 onClick={() => router.push('/rent-your-place')}>Rent
                        your place</ColorButton>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
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
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}