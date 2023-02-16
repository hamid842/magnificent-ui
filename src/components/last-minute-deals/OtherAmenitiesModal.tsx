import {useEffect, useRef, useState} from "react";
// Material-ui
import {Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, Grid} from "@mui/material";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import {euclidFont} from "@/assets/fonts";
import SwitzerText from "@/components/css-texts/SwitzerText";
import AmenityIconAndTitle from "@/components/global/AmenityIconAndTitle";

const OtherAmenitiesModal = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps['scroll']>('body');

    const handleClickOpen = () => {
        setOpen(true);
        setScroll('body');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button sx={{textTransform: 'none', color: colors.mainColor, fontWeight: 600, fontSize: 12}}
                    className={euclidFont.className} onClick={handleClickOpen}>show All</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <EuclidText align={'center'} sx={{fontSize: 16, fontWeight: 600}}
                                text={'The other amenities this place have:'}/></DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>

                    <SwitzerText sx={{fontWeight: 600, fontSize: 14, mt: 1}} text={'Kitchen'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Refrigerator'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Coffee/tee Maker'}/>
                        <AmenityIconAndTitle icon={'kitchen'}
                                             title={'Washing Machine'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Microwave'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14}} text={'Bathroom'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Wifi'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'TV'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Elevator'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14}} text={'Bedroom'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Wifi'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'TV'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Elevator'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14, mt: 1}} text={'Parking and Facilities'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Wifi'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'TV'}/>
                        <AmenityIconAndTitle icon={'kitchen'} title={'Elevator'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14, mt: 1}} text={'Lobby'}/>
                    <Divider/>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14, mt: 1}} text={'Outdoor'}/>
                    <Divider/>
                </DialogContent>
                <DialogActions>
                    <Button sx={{textTransform: 'none', color: colors.mainColor, fontWeight: 600, fontSize: 14}}
                            onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default OtherAmenitiesModal;