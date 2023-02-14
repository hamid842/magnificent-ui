import {forwardRef, ReactElement, ReactNode, Ref, useState} from "react";
import {Box, Button, Dialog, Slide, Stack} from '@mui/material';

import {TransitionProps} from '@mui/material/transitions';
import colors from "@/assets/colors";
import Image from "next/image";
import logo from "../../public/png5.png";

type AuthWrapperProps = {
    buttonTitle: string,
    children: ReactNode,
    icon: ReactNode
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const AuthWrapper = ({buttonTitle, children, icon}: AuthWrapperProps) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button size={'small'} onClick={handleClickOpen}
                    sx={{textTransform: 'none', height: 15, color: colors.navMenuColor}}
                    startIcon={icon}>
                {buttonTitle}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Stack direction={'column'} sx={{width: 400, p: 2}} alignItems={'center'}>
                    <Box my={2}>
                        <Image src={logo} alt={'Logo'} width={200} height={45}/>
                    </Box>
                {children}
                </Stack>
            </Dialog>
        </div>
    );
}
export default AuthWrapper;
