import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Grid, Paper, Stack} from "@mui/material";
import colors from "@/assets/colors";
import PaymentIcon from '@mui/icons-material/Payment';
import EuclidText from "@/components/css-texts/EuclidText";
import {IProperty} from "@/utils/property-type";
import Image from "next/image";
import AppContainer from "@/components/global/AppContainer";
import SpecialOffersIconDetails from "@/components/global/SpecialOffersIconDetails";
import BookingDetailsTitleAndValue from "@/components/global/BookingDetailsTitleAndValue";
import SwitzerText from "@/components/css-texts/SwitzerText";
import moment from "moment";
import AppTextField from "@/components/global/AppTextField";
import {TPrice} from "@/components/last-minute-deals/BookingCalculationSection";
import {useContext} from "react";
import {AuthContext, LoginDialogContext} from "../../../context/contexts";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type BookingDialogProps = {
    property: IProperty,
    arrivalDate?: moment.Moment | null,
    departureDate?: moment.Moment | null,
    price:TPrice | null
}

const BookingDialog = ({property, arrivalDate, departureDate,price}: BookingDialogProps) => {
    // const {user} = useContext(AuthContext);
    // const {openLoginDialog,setOpenLoginDialog} = useContext(LoginDialogContext);
    const {attributes} = property
    const [openPayDialog, setOpenPayDialog] = React.useState(false);

    const handleClickOpen = () => {
         setOpenPayDialog(true);
    };

    const handleClose = () => {
        setOpenPayDialog(false);
    };

    const calculateNightsOfSelectedDateRange = (startDate: moment.Moment | null | undefined, endDate: moment.Moment | null | undefined): number => {
        let numberOfNights = 0;
        if (startDate && endDate) {
            let timeDiff = Math.abs(startDate?.valueOf() - endDate?.valueOf());
            numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        return numberOfNights
    }

    return (
        <Stack >
            <Button
                fullWidth
                variant={'outlined'}
                size={'small'}
                sx={{
                    backgroundColor: colors.mainColor,
                    textTransform: 'capitalize',
                    color: 'white',
                    my: 2,
                    border: 'none',
                    '&:hover': {
                        backgroundColor: colors.mainColor,
                        border: 'none'
                    }
                }} onClick={handleClickOpen}>
                Book now
            </Button>
            <Dialog
                fullScreen
                open={openPayDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                {/* Dialog Header*/}
                <AppBar sx={{position: 'relative', backgroundColor: colors.mainColor}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Booking Details
                        </Typography>
                        <Button size={'small'} variant={'outlined'} startIcon={<PaymentIcon/>}
                                sx={{color: 'white', textTransform: 'none', borderColor: 'white'}}
                                onClick={handleClose}>
                            Pay Now
                        </Button>
                    </Toolbar>
                </AppBar>
                {/* ====================== Dialog Content =======================*/}
                <AppContainer>
                    <Paper elevation={3} sx={{px: 2, py: 1, width: '100%', height: '100%', mt: 2}}>
                        <Stack direction={'column'} alignItems={'center'} my={2}>
                            <EuclidText variant={'h5'} sx={{fontWeight: 700}}
                                        text={'Reservation Information'}/>
                            <SwitzerText variant={'caption'}
                                         text={"Please check the details below and proceed to pay if everything was right."}
                                         sx={{textAlign: 'center', color: colors.navMenuColor}}/>
                        </Stack>
                        <Grid container px={2} spacing={2}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Image src={attributes.images[0].url} alt={'Property Image'} width={200}
                                       height={200} style={{width: '100%', height: '100%', borderRadius: 5}}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Typography variant={'subtitle1'}>{attributes.Title}</Typography>
                                <SpecialOffersIconDetails bedsNumber={attributes.bedsNumber}
                                                          squareMeters={attributes.squareMeters}/>
                                <BookingDetailsTitleAndValue title={'Arrival Date'}
                                                             value={moment(arrivalDate).format('YYYY-MM-DD')}/>
                                <BookingDetailsTitleAndValue title={'Departure Date'}
                                                             value={moment(departureDate).format('YYYY-MM-DD')}/>
                                <BookingDetailsTitleAndValue title={'Total nights'}
                                                             value={calculateNightsOfSelectedDateRange(arrivalDate, departureDate)}/>
                                <BookingDetailsTitleAndValue title={'Rate'} value={attributes?.price}/>
                                <BookingDetailsTitleAndValue title={'Discount'} value={"Discount Code"}/>
                                <BookingDetailsTitleAndValue title={'Community Fee'} value={'Community Fee'}/>
                                <BookingDetailsTitleAndValue title={'Tax'} value={'Tax'}/>
                                <BookingDetailsTitleAndValue title={'Total'} value={price?.totalPrice}/>
                            </Grid>
                        </Grid>
                        <Grid container p={2} spacing={2}>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Guest Full Name'} id={'fullName'} value={""} onChange={() => {
                                }}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Email'} id={'email'} value={""} onChange={() => {
                                }}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Phone Number'} id={'phoneNumber'} value={""} onChange={() => {
                                }}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Additional Info'} id={'additionalInfo'} value={""}
                                              onChange={() => {
                                              }} multiline/>
                            </Grid>
                        </Grid>
                    </Paper>
                </AppContainer>
            </Dialog>
        </Stack>
    );
}
export default BookingDialog;