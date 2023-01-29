import {MouseEvent, useState} from "react";
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
    Typography,
} from "@mui/material";
import {styled} from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import {useRouter} from "next/router";

const pages = [
    {label: 'Last Minute Deals', path: "/last-minute-deals"},
    {label: 'Blog', path: '/blog'},
    {label: 'About us', path: '/about'},
    {label: 'Contacts', path: '/contacts'}
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const ColorButton = styled(Button)<ButtonProps>({
    color: "white",
    backgroundColor: "#A47C30",
    '&:hover': {
        backgroundColor: "#A47C30",
    },
});

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
        <AppBar position="static" sx={{paddingX: 1, background: "transparent", boxShadow: "none"}}>
            <Toolbar disableGutters>
                <AdbIcon fontSize={'large'} sx={{display: {xs: 'none', md: 'flex'}, mr: 1, color: "#A47C30"}}/>
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textDecoration: 'none',
                        color: "#A47C30"
                    }}
                >
                    LOGO
                </Typography>

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
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.label} value={page.path} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page.label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: {xs: 'flex', md: 'none'},
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textDecoration: 'none',
                        color: "#A47C30"
                    }}
                >
                    LOGO
                </Typography>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map((page) => (
                        <Button
                            key={page.label}
                            value={page.path}
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, display: 'block', textTransform: "capitalize",color:'black'}}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>

                <Box sx={{flexGrow: 0}}>
                    <ColorButton variant={'contained'} sx={{borderRadius: 25, m: 1, textTransform: "capitalize"}}>Rent
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