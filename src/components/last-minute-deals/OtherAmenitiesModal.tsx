import {useEffect, useRef, useState} from "react";
// Material-ui
import {Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, Grid} from "@mui/material";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import {euclidFont} from "@/assets/fonts";
import SwitzerText from "@/components/css-texts/SwitzerText";
import AmenityIconAndTitle from "@/components/global/AmenityIconAndTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faElevator, faTv, faWifi} from "@fortawesome/free-solid-svg-icons";
import KitchenIcon from '@mui/icons-material/Kitchen';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import MicrowaveIcon from '@mui/icons-material/Microwave';

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
                    <EuclidText align={'center'} sx={{fontWeight: 600}} text={'The other amenities this place have:'}/></DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>

                    <SwitzerText sx={{fontWeight: 600, fontSize: 14, mt: 1}} text={'Kitchen'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={<KitchenIcon fontSize={'small'}/>} title={'Refrigerator'}/>
                        <AmenityIconAndTitle icon={<CoffeeMakerIcon fontSize={'small'}/>} title={'Coffee/tee Maker'}/>
                        <AmenityIconAndTitle icon={<LocalLaundryServiceIcon fontSize={'small'}/>}
                                             title={'Washing Machine'}/>
                        <AmenityIconAndTitle icon={<MicrowaveIcon fontSize={'small'}/>} title={'Microwave'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14}} text={'Bathroom'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faWifi}/>} title={'Wifi'}/>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faTv}/>} title={'TV'}/>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faElevator}/>} title={'Elevator'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14}} text={'Bedroom'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faWifi}/>} title={'Wifi'}/>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faTv}/>} title={'TV'}/>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faElevator}/>} title={'Elevator'}/>
                    </Grid>
                    <SwitzerText sx={{fontWeight: 600, fontSize: 14, mt: 1}} text={'Parking and Facilities'}/>
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faWifi}/>} title={'Wifi'}/>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faTv}/>} title={'TV'}/>
                        <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faElevator}/>} title={'Elevator'}/>
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