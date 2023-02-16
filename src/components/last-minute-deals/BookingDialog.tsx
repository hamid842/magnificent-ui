import {ChangeEvent, forwardRef, ReactElement, Ref, useContext, useState} from "react";
// Next.js
import Image from "next/image";
// Material ui
import {AppBar, Button, Dialog, Grid, IconButton, Paper, Stack, Toolbar, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PaymentIcon from '@mui/icons-material/Payment';
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
import {TPrice} from "@/components/last-minute-deals/BookingCalculationSection";
import {instance} from "@/config/axiosConfig";
import AppButton from "@/components/global/AppButton";
import {AuthContext} from "../../../context/contexts";
import AuthWrapper from "@/auth/AuthWrapper";

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
    price: TPrice | null
}

const BookingDialog = ({property, arrivalDate, departureDate, price}: BookingDialogProps) => {
    const {attributes} = property
    const {user} = useContext(AuthContext);
    const [openPayDialog, setOpenPayDialog] = useState(false);
    const [payLoading,setPayLoading] = useState(false)
    const [guest, setGuest] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        additionalInfo: ""
    })

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

    const handlePay = ()=>{
        setOpenPayDialog(true);
        instance.post(`/test`).then(response=>{
            if (response.status === 200) {
                setPayLoading(false)
                window.open(response.data.url,"_blank");
            }
        }).catch(error=>{
            setPayLoading(false);
            console.log(error)
        })
    }

    return (
        <Stack alignItems={'center'}>
            <AppButton
              label={'Book Now'}
                sx={{
                    backgroundColor: colors.mainColor,
                    textTransform: 'capitalize',
                    color: 'white',
                    border: 'none',
                    '&:hover': {
                        backgroundColor: colors.mainColor,
                        border: 'none'
                    }
                }} onClick={handleClickOpen}/>

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
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{color:'#333333',ml: 2, flex: 1}} variant="h6" component="div">
                            Booking Details
                        </Typography>
                        { user ? <AppButton label={'Pay Now'} onClick={handlePay}/> : <AuthWrapper isHeader={false}/>}
                    </Toolbar>
                </AppBar>
                {/* ====================== Dialog Content =======================*/}
                <AppContainer>
                    <Paper elevation={3} sx={{px: 2,pt:1, width: '100%', height: '100%', mt: 2}}>
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
                        <Grid container p={2} spacing={2}>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Guest Full Name'} id={'fullName'} value={guest.fullName}
                                              onChange={handleChangeGuest}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Email'} id={'email'} value={guest.email}
                                              onChange={handleChangeGuest}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Phone Number'} id={'phoneNumber'} value={guest.phoneNumber}
                                              onChange={handleChangeGuest}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <AppTextField label={'Additional Info'} id={'additionalInfo'}
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