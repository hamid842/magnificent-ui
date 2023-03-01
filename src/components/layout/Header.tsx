import {MouseEvent, useState} from "react";
// next.js
import Image from "next/image";
import {useRouter} from "next/router";
// material-ui
import {AppBar, Box, Button, ButtonProps, IconButton, Menu, MenuItem, Stack, Toolbar, Typography,} from "@mui/material";
import {styled} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
// project imports
import logo from "../../../public/header/main-logo.png";
import {euclidFont, switzerFont} from "@/assets/fonts";
import colors from "@/assets/colors";
import RightDrawer from "@/components/layout/RightDrawer";

export const navPages = [
    {label: "Home", path: "/"},
    {label: "Our Homes", path: "/our-homes"},
    {label: "Blogs", path: "/blogs"},
    {label: "About us", path: "/about"},
    {label: "Contact Us", path: "/contact-us"},
];

export const ColorButton = styled(Button)<ButtonProps>({
    color: "white",
    backgroundColor: colors.mainColor,
    "&:hover": {
        backgroundColor: colors.mainColor,
    },
});

//========================|| Header ||=============================//

export default function Header() {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const menuItemsStyles = {
        fontSize: 16,
        fontWeight: 500,
        ml: 1,
        display: "block",
        textTransform: "capitalize",
        color: colors.navMenuColor,
        borderBottom: `2px solid transparent`,
        "&:hover": {
            color: colors.mainColor,
            borderRadius: 0,
            background: "transparent",
            borderBottom: `2px solid ${colors.mainColor}`,
        },
    };

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                width: "100vw",
                px: 1,
                py: 2,
                position: "absolute",
                top: 0,
                zIndex: 1000,
                background: colors.bodyBackground,
                boxShadow: "none",
            }}
        >
            <Toolbar disableGutters>
                <Box sx={{display: {xs: "none", sm: "none", md: "flex"}}}>
                    <Image
                        src={logo}
                        alt={"Logo"}
                        width={210}
                        height={98}
                        style={{cursor: "pointer"}}
                        onClick={() => router.push("/")}
                    />
                </Box>
                <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
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
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {navPages.map((page) => (
                            <MenuItem
                                key={page.label}
                                value={page.path}
                                onClick={() => router.push(page.path)}
                            >
                                <Typography textAlign="center" sx={{fontSize: 18}}>
                                    {page.label}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 2,
                        display: {xs: "none", md: "flex"},
                    }}
                >
                    {navPages.map((page) => (
                        <Button
                            key={page.label}
                            size={"small"}
                            value={page.path}
                            onClick={() => router.push(page.path)}
                            className={switzerFont.className}
                            sx={menuItemsStyles}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
                {/* ========================= || Setting (when click on header avatar) || ====================== */}
                <Box sx={{flexGrow: 0, mr: 2}}>
                    <Stack direction={"row"}>
                        <ColorButton
                            size={"small"}
                            variant={"contained"}
                            className={euclidFont.className}
                            sx={{
                                textTransform: "none",
                                borderRadius: 25,
                                fontSize: 12,
                                mr: 1,
                            }}
                            onClick={() => router.push("/rent-your-place")}
                        >
                            Rent your place
                        </ColorButton>
                        <RightDrawer/>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
