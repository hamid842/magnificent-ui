import {ChangeEvent, forwardRef, ReactElement, Ref, useContext, useEffect, useState} from "react";
// Next.js
import Image from "next/image";
// Material ui
import {AppBar, Dialog, Grid, IconButton, Paper, Stack, Toolbar, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
// Third Party
import moment from "moment";
// Project imports
import colors from "@/assets/colors";
import EuclidText from "@/components/css-texts/EuclidText";
import {IProperty} from "@/utils/property-type";
import AppContainer from "@/components/global/AppContainer";
import SpecialOffersIconDetails from "@/components/global/SpecialOffersIconDetails";
import BookingDetailsTitleAndValue from "@/components/global/BookingDetailsTitleAndValue";
import SwitzerText from "@/components/css-texts/SwitzerText";
import AppTextField from "@/components/global/AppTextField";
import {TPrice} from "@/components/our-homes/BookingCalculationSection";
import {instance} from "@/config/axiosConfig";
import AppButton from "@/components/global/AppButton";
import {AuthContext} from "../../../context/contexts";
import AuthWrapper from "@/auth/AuthWrapper";
import SwitchBtnForBooking from "@/components/our-homes/SwitchBtnForBooking";

const DATE_FORMAT = 'YYYY-MM-DD';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type BookingDialogProps = {
    property: IProperty,
    arrivalDate?: moment.Moment | null,
    departureDate?: moment.Moment | null,
    guestCount: number,
    price: TPrice | null
}

// The request data sent tto host to create a booking
type TBookingRequest = {
    userId: number,
    propertyId: string,
    arrival: string,
    departure: string,
    numberOfGuests: number,
    // Optional-------------
    guest?: {
        fullName: string,
        email: string,
        phoneNumber: string
    },
    additionalInformation?: string,
};

const BookingDialog = ({property, arrivalDate, departureDate, guestCount, price}: BookingDialogProps) => {
    const {attributes} = property
    const {user} = useContext(AuthContext);
    const [openPayDialog, setOpenPayDialog] = useState(false);
    const [payLoading, setPayLoading] = useState(false)
    const [guest, setGuest] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        additionalInfo: ""
    })

    // Is the user booking the property for himself?
    const [isForMe, setForMe] = useState<boolean>(false);
    useEffect(() => {
        if (!isForMe) return;
        if (!user) return;
        setGuest((prevGuest) => {
            return {
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                additionalInfo: prevGuest.additionalInfo
            }
        });
    }, [isForMe, user]);

    const handleChangeGuest = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setGuest({...guest, [name]: value})
    }

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

    const handlePay = () => {
        setOpenPayDialog(true);
        if (!arrivalDate || !departureDate || !property || !guestCount || !user) return;

        // Validate guest fields
        // TODO: Display Validation Errors on the text fields
        if (!isForMe) {
            if (!guest.email) return alert('Guest Email is Required!');
            if (!guest.fullName) return alert('Guest Full Name is Required!');
            if (!guest.phoneNumber) return alert('Guest Phone Number is Required!');
        }
        let guestObj = undefined;
        // If 'For Me' isn't checked, and the guest data is provided:
        if (!isForMe && guest.email && guest.fullName && guest.phoneNumber) {
            guestObj = {
                fullName: guest.fullName,
                email: guest.email,
                phoneNumber: guest.phoneNumber
            };
        }

        // TODO: Must make token management better
        const accessToken = localStorage.getItem('JWT');
        if (!accessToken) return console.log('No JWT found in local storage!');

        const data: TBookingRequest = {
            userId: user.id,
            propertyId: property.id,
            arrival: arrivalDate.format(DATE_FORMAT),
            departure: departureDate.format(DATE_FORMAT),
            numberOfGuests: guestCount,
            additionalInformation: guest.additionalInfo || undefined,
            guest: guestObj
        };
        instance.post(`/bookings`, data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setPayLoading(false)
                    window.open(response.data.stripeUrl, '__self');
                }
            }).catch(error => {
            setPayLoading(false);
            console.log(error)
        })
    }

    return (
        <Stack alignItems={'center'}>
            <AppButton
                label={'Book Now'}
                onClick={handleClickOpen}/>

            <Dialog
                fullScreen
                open={openPayDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                {/* Dialog Header*/}
                <AppBar sx={{position: 'relative', backgroundColor: 'white'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{color: '#333333', ml: 2, flex: 1}} variant="h6" component="div">
                            Booking Details
                        </Typography>
                        {user ? <AppButton label={'Pay Now'} onClick={handlePay}/> : <AuthWrapper isHeader={false}/>}
                    </Toolbar>
                </AppBar>
                {/* ====================== Dialog Content =======================*/}
                <AppContainer>
                    <Paper elevation={3} sx={{px: 2, pt: 1, width: '100%', height: '100%', mt: 2}}>
                        <Stack direction={'column'} alignItems={'center'} my={1}>
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
                                {price?.components?.map(item => <BookingDetailsTitleAndValue key={item.name}
                                                                                             title={item.title}
                                                                                             value={item.total}/>)}
                            </Grid>
                        </Grid>
                        <Stack sx={{mt: 2}} direction='column' alignItems='center' justifyContent='center'>
                            {/*<ToggleButton*/}
                            {/*    value="check"*/}
                            {/*    selected={isForMe}*/}
                            {/*    onChange={() => { setForMe((prev) => !prev); }}*/}
                            {/*    >*/}
                            {/*    /!* <CheckIcon /> *!/*/}
                            {/*    For Me?*/}
                            {/*</ToggleButton>*/}
                            <SwitchBtnForBooking checked={isForMe}
                                                 onChange={(event: ChangeEvent<HTMLInputElement>) => setForMe(event.target.checked)}/>
                        </Stack>
                        <Grid container p={2} spacing={2}>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField
                                    disabled={!isForMe}
                                    label={'Guest Full Name'}
                                    id={'fullName'}
                                    value={guest.fullName}
                                    onChange={handleChangeGuest}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField
                                    disabled={!isForMe}
                                    label={'Email'}
                                    id={'email'}
                                    value={guest.email}
                                    onChange={handleChangeGuest}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField
                                    disabled={!isForMe}
                                    label={'Phone Number'}
                                    id={'phoneNumber'}
                                    value={guest.phoneNumber}
                                    onChange={handleChangeGuest}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField
                                    label={'Additional Info'}
                                    id={'additionalInfo'}
                                    value={guest.additionalInfo}
                                    onChange={handleChangeGuest} multiline/>
                            </Grid>
                        </Grid>
                    </Paper>
                </AppContainer>
            </Dialog>
        </Stack>
    );
}
export default BookingDialog;