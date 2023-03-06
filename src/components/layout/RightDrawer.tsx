import {KeyboardEvent, MouseEvent, useState} from 'react';
import {useRouter} from "next/router";
// Next.js
import Image from "next/image";
// Material ui
import {Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Person} from "@mui/icons-material";
// Assets
import logo from '../../../public/dashboard/png5.png'
import {navPages} from "@/components/layout/Header";
import AppIcon from "@/components/global/AppIcon";
import { initialUser, TUser, useUpdateUser, useUser} from "../../../context/AuthContext";
import ResetPassModal from "@/components/layout/ResetPassModal";
import AuthWrapper from "@/auth/AuthWrapper";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

//====================|| Right Drawer ||=====================

export const dashboardPages = [
    {label: "Profile", path: "/dashboard/profile", icon: 'person'},
    {label: "Favorites", path: "/dashboard/favorites", icon: 'favorite'},
    {label: "Reservations", path: "/dashboard/reservations", icon: 'bookmark_add'},
    {label: "Inbox", path: "/dashboard/inbox", icon: 'inbox'},
];

const RightDrawer = () => {
    const router = useRouter();
    // const {user,setUser} = useContext(AuthContext);
    const user = useUser();
    const updateUser = useUpdateUser();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: KeyboardEvent | MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as KeyboardEvent).key === 'Tab' ||
                        (event as KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({...state, [anchor]: open});
            };

    const userList = (anchor: Anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Image src={logo} alt={""} width={120} height={25} style={{margin: '10px 40px'}}/>
            <Divider sx={{width: '100%', mt: 1}}/>
            <List>
                <ListItem disablePadding>
                    <AuthWrapper isHeader={true} label={'Login'}/>
                </ListItem>
                <Divider sx={{width: '100%', mt: 1}}/>
                {navPages.map(page => <ListItemButton key={page.label} onClick={() => router.push(page.path)}>
                    <ListItemText primary={page.label}/>
                </ListItemButton>)}
            </List>
        </Box>
    );
    const authList = (anchor: Anchor, setUser: (user: TUser) => void) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Image src={logo} alt={""} width={120} height={25} style={{margin: '10px 40px'}}/>
            <Divider sx={{width: '100%', mt: 1}}/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setUser(initialUser)}>
                        <ListItemIcon>
                            <AppIcon name={'logout'} size={1.5}/>
                        </ListItemIcon>
                        <ListItemText primary={'Sign out'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ResetPassModal/>
                </ListItem>
                <Divider sx={{width: '100%', mt: 1}}/>
                {dashboardPages.map(page => <ListItemButton key={page.label} onClick={() => router.push(page.path)}>
                    <ListItemIcon>
                        <AppIcon name={page.icon} size={1.5}/>
                    </ListItemIcon>
                    <ListItemText primary={page.label}/>
                </ListItemButton>)}
            </List>
        </Box>
    );

    return (
                <>
                    <Avatar
                        onClick={toggleDrawer('right', true)}
                        aria-haspopup={true}
                        sx={{cursor: "pointer"}}
                    >
                        <Person/>
                    </Avatar>
                    <Drawer
                        keepMounted
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                        sx={{
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 200},
                        }}
                    >
                        {user.username ? authList('right', updateUser) : userList('right')}
                    </Drawer>
                </>

    );
}
export default RightDrawer;